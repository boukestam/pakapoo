import React, { useState } from 'react';
import { FaFileContract } from 'react-icons/fa';

import clsx from 'clsx';

import { useStore } from '../../store';
import ContractProperties from './properties';
import ContractRead from './read';
import ContractWrite from './write';

enum ContractTab {
  Properties = 'Properties',
  Read = 'Read',
  Write = 'Write',
  Events = 'Events',
}

function Contract() {
  const { selectedContract } = useStore();

  const [tab, setTab] = useState<ContractTab>(ContractTab.Properties);

  return (
    <div className="flex-1 max-w-4xl">
      {selectedContract ? (
        <div>
          <div className="flex justify-center mb-4">
            {Object.keys(ContractTab).map(option => (
              <div
                key={option}
                className={clsx(
                  'p-1 m-2 cursor-pointer',
                  option === tab && 'border-b-2 border-blue-500 text-blue-500',
                )}
                onClick={() => setTab(option as ContractTab)}
              >
                {option}
              </div>
            ))}
          </div>
          <div>
            {tab === ContractTab.Properties && <ContractProperties contract={selectedContract} />}
            {tab === ContractTab.Read && <ContractRead contract={selectedContract} />}
            {tab === ContractTab.Write && <ContractWrite contract={selectedContract} />}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-96">
          <FaFileContract size={48} className="mb-4" />
          <div>No contract selected</div>
        </div>
      )}
    </div>
  );
}

export default Contract;
