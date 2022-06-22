import React, { useEffect, useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

import clsx from 'clsx';
import { ethers } from 'ethers';

import { useProvider } from '../../connectors';
import { ImportedContract } from '../../store';
import { ABIFunction } from '../../utils/parseABI';
import Button from '../button';
import FormRow from '../form-row';
import { ContractValue } from './value';

export default function ContractCall({
  contract,
  call,
  actionLabel,
}: {
  contract: ImportedContract;
  call: ABIFunction;
  actionLabel: string;
}) {
  const provider = useProvider();

  const [expanded, setExpanded] = useState<boolean>(false);

  const [inputs, setInputs] = useState<string[]>(new Array(call.inputs.length).fill(''));
  const [outputs, setOutputs] = useState<any[]>([]);

  async function fetch() {
    if (!contract || !provider) return;

    const contractInstance = new ethers.Contract(
      contract.address,
      contract.abi,
      provider.getSigner(0),
    );

    try {
      const response = await contractInstance.functions[call.name](...inputs);

      if (call.stateMutability !== 'view') {
        const result = await response.wait();
        setOutputs([result.transactionHash]);
      } else {
        setOutputs(response);
      }
    } catch (e) {
      console.error(e);
      setOutputs([(e as any).toString()]);
    }
  }

  return (
    <div className="mb-1">
      <div
        className="flex items-center px-4 py-3 text-sm border border-gray-200 cursor-pointer bg-gray-50"
        key={call.name}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-initial w-64">{call.name}</div>
        <div className="flex-1"></div>
        <div>{expanded ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}</div>
      </div>
      <div
        className={clsx(
          'transition-all bg-white border-x border-gray-200 overflow-hidden',
          expanded ? 'border-b p-4' : 'h-0',
        )}
      >
        {call.inputs.map((input, inputIndex) => (
          <FormRow label={`${input.name || 'input' + inputIndex} (${input.type})`} key={inputIndex}>
            <input
              type="text"
              value={inputs[inputIndex]}
              onChange={e => {
                const copy = [...inputs];
                copy[inputIndex] = e.target.value;
                setInputs(copy);
              }}
            />
          </FormRow>
        ))}

        <Button type="secondary" className="mt-2" onClick={fetch}>
          {actionLabel}
        </Button>

        <div className="mt-2">
          {outputs.map((output, outputIndex) => (
            <div key={outputIndex}>
              {call.outputs[outputIndex].name || 'output' + outputIndex}:
              <ContractValue value={output} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
