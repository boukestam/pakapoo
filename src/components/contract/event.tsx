import React, { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

import clsx from 'clsx';
import { ethers } from 'ethers';

import { useProvider } from '../../connectors';
import { ImportedContract } from '../../store';
import { ABIEvent } from '../../utils/parseABI';
import Button from '../button';
import { ContractValue } from './value';

export default function ContractEvent({
  contract,
  event,
}: {
  contract: ImportedContract;
  event: ABIEvent;
}) {
  const provider = useProvider();

  const [expanded, setExpanded] = useState<boolean>(false);

  const [outputs, setOutputs] = useState<any[]>([]);

  async function fetch() {
    if (!contract || !provider) return;

    const contractInstance = new ethers.Contract(
      contract.address,
      contract.abi,
      provider.getSigner(0),
    );

    try {
    } catch (e) {
      console.error(e);
      setOutputs([(e as any).toString()]);
    }
  }

  return (
    <div className="mb-1">
      <div
        className="flex items-center px-4 py-3 text-sm border border-gray-200 cursor-pointer bg-gray-50"
        key={event.name}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-initial w-64">{event.name}</div>
        <div className="flex-1"></div>
        <div>{expanded ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}</div>
      </div>
      <div
        className={clsx(
          'transition-all bg-white border-x border-gray-200 overflow-hidden',
          expanded ? 'border-b p-4' : 'h-0',
        )}
      >
        <Button type="secondary" className="mt-2" onClick={fetch}>
          Get
        </Button>

        <div className="mt-2">
          {outputs.map((output, outputIndex) => (
            <div key={outputIndex}>
              {event.inputs[outputIndex].name || 'output' + outputIndex}:
              <ContractValue value={output} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
