import { useMutation } from '@apollo/client';
import { Button } from '@material-ui/core';
import MetaMaskOnboarding from '@metamask/onboarding';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useCallback } from 'react';
import { logoutMutation, setAccountsMutation } from '../../graphql/authentication';

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect';
const LOGOUT_TEXT = 'Logout';

export function OnboardingButton() {
  const setUser = useStoreActions(actions => actions.user.setUser);
  const removeToken = useStoreActions(actions => actions.user.logout);
  const { user } = useStoreState(state => state.user);
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const onboarding = React.useRef();
  const [login, { data: loginData }] = useMutation(setAccountsMutation);
  const [logout] = useMutation(logoutMutation);
  console.log({loginData });
  const handleLoginOrRegister = useCallback(
    async (newAccounts) => {
      console.log('handling signup', user.accessToken, newAccounts);
      if (user.accessToken){
        setButtonText(LOGOUT_TEXT)
      }
      const loginResponse = await login({
        variables: {
          data: {
            ethAddresses: newAccounts
          }
        }
      })
      console.log({loginResponse});
      if(loginResponse?.data?.login?.accessToken){
        setUser(loginResponse.data.login)
      }
    },
    [login, user.accessToken, setUser],
  )
  const handleLogout = useCallback(
    async (ethAddresses) => {
      if (user.accessToken || loginData?.login?.accessToken){
        const logoutStatus = await logout({
          variables: {
            data: {
              ethAddresses: ethAddresses,
              accessToken: user.accessToken || loginData?.login?.accessToken
            }
          }
        })
        console.log(loginData?.login?.accessToken);
        console.log({logoutStatus});
        if (logoutStatus.data.logout === 200){
          removeToken()
          setDisabled(false);
          setButtonText(CONNECT_TEXT);
        }
      }
    },
    [logout, loginData?.login?.accessToken, user.accessToken, removeToken],
  )

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  React.useEffect(() => {
    console.log('in use effect');
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      console.log('meta installed');
      if (user.accessToken || loginData?.login?.accessToken) {
        setButtonText(LOGOUT_TEXT);
        onboarding.current.stopOnboarding();
        setDisabled(false);
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [loginData?.login?.accessToken, user.accessToken]);

  const handleWalletAction = useCallback(
    (e, action) => {
      e.preventDefault();
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        if(action === CONNECT_TEXT){
          window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(handleLoginOrRegister);
        }
        if(action === LOGOUT_TEXT){
          window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(handleLogout);
          window.ethereum.on('accountsChanged', handleLogout);
        }
      } else {
        onboarding.current.startOnboarding();
      }
    },
    [handleLoginOrRegister, handleLogout],
  )
  return (
    <Button variant='outlined' disabled={isDisabled} onClick={(e) => handleWalletAction(e, buttonText)}>
      {buttonText}
    </Button>
  );
}