import React, { useEffect } from 'react';

import { metaMask, useAccounts, useChainId, useIsActivating, useIsActive } from '../connectors';
import { getChain } from '../constants/chains';
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

  const buttonStyle =
    'px-4 py-1 text-sm ml-4 font-semibold text-black border border-gray-200 rounded-2xl';

  return (
    <div className="flex items-center justify-end p-4 text-white bg-white border-b border-gray-200">
      <div className="flex-1"></div>

      {isActive && accounts && chainId ? (
        <div className="flex">
          <div className={buttonStyle}>{getChain(chainId)?.name || 'Unknown'}</div>

          <div className={buttonStyle}>{formatAddress(accounts[0])}</div>
        </div>
      ) : isActivating ? (
        'Connecting...'
      ) : (
        <button onClick={() => metaMask.activate()} className={buttonStyle}>
          Connect
        </button>
      )}
    </div>
  );
}

export default Header;
