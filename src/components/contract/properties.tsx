import React, { useEffect } from 'react';

import { ethers } from 'ethers';

import { useProvider } from '../../connectors';
import { ImportedContract } from '../../store';
import { getProperties } from '../../utils/parseABI';
import { ContractValue } from './value';

function ContractProperties({ contract }: { contract: ImportedContract }) {
  const provider = useProvider();

  const [outputs, setOutputs] = React.useState<any[][]>([]);

  useEffect(() => {
    if (!contract) return;

    const views = getProperties(contract.abi);

    const contractInstance = new ethers.Contract(contract.address, contract.abi, provider);
    const promises = views.map(view => contractInstance.functions[view.name]());

    Promise.all(promises).then(results => {
      setOutputs(results);
    });
  }, [contract, provider]);

  return (
    <div>
      {getProperties(contract.abi).map((view, viewIndex) => (
        <div className="flex px-4 py-3 mb-0.5 bg-white text-sm" key={view.name}>
          <div className="flex-initial w-64">{view.name}</div>
          <div>
            {Array.isArray(outputs[viewIndex]) &&
              outputs[viewIndex].map((value, valueIndex) => (
                <ContractValue value={value} key={valueIndex} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContractProperties;
