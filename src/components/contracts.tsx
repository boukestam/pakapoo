import React from 'react';

import { useChainId } from '../connectors';
import { useStore } from '../store';
import { formatAddress } from '../utils/formatAddress';
import ImportContract from './import-contract';

function Contracts() {
  const { contracts, setSelectedContract } = useStore();
  const chainId = useChainId();

  return (
    <>
      <ImportContract />

      <div className="my-4 text-lg">Contracts</div>

      <div>
        {contracts
          .filter(contract => contract.chainId === chainId)
          .map(contract => (
            <div
              className="px-4 py-2 mb-2 bg-white border border-gray-300 cursor-pointer hover:shadow-md hover:bg-gray-50"
              onClick={() => setSelectedContract(contract)}
              key={contract.address}
            >
              <div className="font-semibold">{contract.name}</div>
              <div className="text-sm text-gray-500">{formatAddress(contract.address)}</div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Contracts;
