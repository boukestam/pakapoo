import React, { useEffect } from 'react';

import { metaMask, useAccounts, useChainId, useIsActivating, useIsActive } from '../connectors';
import { chainNames } from '../constants/chainNames';
import { formatAddress } from '../utils/formatAddress';

function Header() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();
  const isActive = useIsActive();

  useEffect(() => {
    metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask');
    });
  }, []);

  return (
    <div className="flex items-center justify-end p-4 text-white bg-blue-500">
      <div className="text-xl font-bold">EVM Tools</div>

      <div className="flex-1"></div>

      {isActive && accounts && chainId ? (
        <div className="flex">
          <div className="px-4 py-2 mr-4 font-semibold text-black bg-white rounded-2xl">
            {chainNames[chainId].name}
          </div>

          <div className="px-4 py-2 font-semibold text-black bg-white rounded-2xl">
            {formatAddress(accounts[0])}
          </div>
        </div>
      ) : isActivating ? (
        'Connecting...'
      ) : (
        <button
          onClick={() => metaMask.activate()}
          className="px-4 py-2 font-semibold text-black bg-white rounded-2xl"
        >
          Connect
        </button>
      )}
    </div>
  );
}

export default Header;
