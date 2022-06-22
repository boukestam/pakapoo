import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';

const [metaMask, hooks] = initializeConnector<MetaMask>(actions => new MetaMask({ actions }));

const {
  useProvider,
  useAccount,
  useAccounts,
  useChainId,
  useENSName,
  useENSNames,
  useIsActivating,
  useIsActive,
} = hooks;

export { metaMask };
export {
  useAccount,
  useAccounts,
  useChainId,
  useENSName,
  useENSNames,
  useIsActivating,
  useIsActive,
  useProvider,
};
