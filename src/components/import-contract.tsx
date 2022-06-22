import React from 'react';

import { useChainId } from '../connectors';
import { useStore } from '../store';
import Button from './button';
import FormRow from './form-row';

function ImportContract() {
  const { addContract } = useStore();
  const chainId = useChainId();

  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [abi, setAbi] = React.useState('');

  function importContract() {
    if (!chainId) return;

    addContract({ name, address, abi, chainId });
  }

  return (
    <div>
      <div className="mb-4 text-lg">Import contract</div>

      <FormRow label="Name">
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </FormRow>

      <FormRow label="Address">
        <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
      </FormRow>

      <FormRow label="ABI">
        <textarea value={abi} onChange={e => setAbi(e.target.value)}></textarea>
      </FormRow>

      <Button onClick={importContract} className="w-full">
        Import
      </Button>
    </div>
  );
}

export default ImportContract;
