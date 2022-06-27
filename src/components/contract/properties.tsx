import React, { useEffect } from 'react';

import { BigNumber, ContractFunction, ethers } from 'ethers';

import { useProvider } from '../../connectors';
import { ImportedContract } from '../../store';
import { getProperties } from '../../utils/parseABI';
import { ContractValue } from './value';

async function fetchProperty(f: ContractFunction) {
  try {
    const result = await f();
    return result;
  } catch (e: any) {
    console.error(e);
    return e.reason || e.message || 'Unknown error';
  }
}

function ContractProperty({ name, values }: { name: string; values: any }) {
  return (
    <div className="flex px-4 py-3 mb-0.5 bg-white text-sm">
      <div className="flex-initial w-64">{name}</div>
      <div>
        {Array.isArray(values) &&
          values.map((value, valueIndex) => <ContractValue value={value} key={valueIndex} />)}
      </div>
    </div>
  );
}

function ContractProperties({ contract }: { contract: ImportedContract }) {
  const provider = useProvider();

  const [balance, setBalance] = React.useState<BigNumber | null>(null);
  const [outputs, setOutputs] = React.useState<any[][]>([]);

  useEffect(() => {
    if (!provider) return;

    const views = getProperties(contract.abi);

    const contractInstance = new ethers.Contract(contract.address, contract.abi, provider);

    provider.getBalance(contract.address).then(balance => {
      setBalance(balance);
    });

    const promises = views.map(view => fetchProperty(contractInstance.functions[view.name]));

    Promise.all(promises).then(results => {
      setOutputs(results);
    });
  }, [contract, provider]);

  return (
    <div>
      <div className="mb-4">
        <ContractProperty name="Address" values={[contract.address]} />
        <ContractProperty name="Balance" values={[balance]} />
      </div>

      <div>
        {getProperties(contract.abi).map((view, viewIndex) => (
          <ContractProperty key={view.name} name={view.name} values={outputs[viewIndex]} />
        ))}
      </div>
    </div>
  );
}

export default ContractProperties;
