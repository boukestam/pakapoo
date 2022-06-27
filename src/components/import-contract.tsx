import React from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

import { useChainId } from '../connectors';
import { useStore } from '../store';
import Button from './button';
import { Collapsable } from './collapsable';
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
    <Collapsable
      header={
        <div className="flex items-center px-4 py-2 text-sm border border-gray-200 cursor-pointer bg-gray-50">
          <div>Import contract</div>
          <div className="flex-1"></div>
          <div>
            <MdExpandLess size={20} className="hidden collapsable-expanded:block" />
            <MdExpandMore size={20} className="collapsable-expanded:hidden" />
          </div>
        </div>
      }
    >
      <FormRow label="Name" className="mt-4">
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
    </Collapsable>
  );
}

export default ImportContract;
