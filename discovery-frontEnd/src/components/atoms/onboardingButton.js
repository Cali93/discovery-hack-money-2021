import { useMutation } from '@apollo/client';
import { Button } from '@material-ui/core';
import MetaMaskOnboarding from '@metamask/onboarding';
import React from 'react';
import { setAccountsMutation } from '../../graphql/authentication';

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect';
const CONNECTED_TEXT = 'Connected';

export function OnboardingButton() {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();
  const [signup, { data }] = useMutation(setAccountsMutation);
  console.log({data});
  const handleLoginOrRegister = (newAccounts) => {
    signup({
      variables: {
        data: {
          ethAddresses: newAccounts
        }
      }
    })
    return setAccounts(newAccounts);
  }

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(CONNECTED_TEXT);
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  React.useEffect(() => {
    function handleNewAccounts(newAccounts) {
      handleLoginOrRegister(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleNewAccounts);
      window.ethereum.on('accountsChanged', handleNewAccounts);
    }
  }, []);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((newAccounts) => handleLoginOrRegister(newAccounts));
    } else {
      onboarding.current.startOnboarding();
    }
  };
  return (
    <Button variant='outlined' disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </Button>
  );
}