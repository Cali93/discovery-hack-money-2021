import { useMutation } from '@apollo/client';
import { Button } from '@material-ui/core';
import MetaMaskOnboarding from '@metamask/onboarding';
import React, { useCallback } from 'react';
import { removeAccountsMutation, setAccountsMutation } from '../../graphql/authentication';

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect';
const CONNECTED_TEXT = 'Logout';

export function OnboardingButton() {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const onboarding = React.useRef();
  const [login, { data: loginData }] = useMutation(setAccountsMutation);
  const [logout, { data: logoutData }] = useMutation(removeAccountsMutation);
  console.log({loginData, logoutData});
  const handleLoginOrRegister = useCallback(
    (newAccounts) => {
      console.log('handling signup', loginData?.login?.accessToken, newAccounts);
      if (loginData?.login?.accessToken){
        setButtonText(CONNECTED_TEXT)
      }
      login({
        variables: {
          data: {
            ethAddresses: newAccounts
          }
        }
      })
    },
    [login, loginData?.login.accessToken],
  )
  const handleRemoveEthAddresses = useCallback(
    (ethAddresses) => {
      console.log('handling logout');
      logout({
        variables: {
          data: {
            ethAddresses: ethAddresses,
            accessToken: loginData?.login?.accessToken
          }
        }
      })
      setButtonText(CONNECT_TEXT);
      setDisabled(false);
    },
    [logout, loginData?.login?.accessToken],
  )

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (loginData?.login.accessToken) {
        setButtonText(CONNECTED_TEXT);
        onboarding.current.stopOnboarding();
        setDisabled(false);
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [loginData?.login?.accessToken]);

  // React.useEffect(() => {
  //   if (MetaMaskOnboarding.isMetaMaskInstalled()) {
  //     window.ethereum
  //       .request({ method: 'eth_requestAccounts' })
  //       .then(handleLoginOrRegister);
  //     window.ethereum.on('accountsChanged', handleLoginOrRegister);
  //   }
  // }, [handleLoginOrRegister]);

  const handleWalletAction = useCallback(
    (action) => {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        if(action === CONNECT_TEXT){
          window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((newAccounts) => handleLoginOrRegister(newAccounts));
        }
        if(action === CONNECTED_TEXT){
          window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((addresses) => handleRemoveEthAddresses(addresses));
          window.ethereum.on('accountsChanged', handleRemoveEthAddresses);
        }
      } else {
        onboarding.current.startOnboarding();
      }
    },
    [handleLoginOrRegister, handleRemoveEthAddresses],
  )
  return (
    <Button variant='outlined' disabled={isDisabled} onClick={() => handleWalletAction(buttonText)}>
      {buttonText}
    </Button>
  );
}