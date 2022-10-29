import React, { useEffect, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';

import { ethers } from 'ethers';

import abi from '../abi.json';
import Button from '../components/button';
import { metaMask, useAccounts, useChainId, useIsActive, useProvider } from '../connectors';

export function Generate() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActive = useIsActive();
  const provider = useProvider();

  const [ticketCount, setTicketCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask');
    });
  }, []);

  async function generate() {
    if (!provider) {
      alert('Please connect to MetaMask');
      return;
    }

    const contract = new ethers.Contract(
      '0x3B99D9d97ef9c447DA7339C298048b1F043577F2',
      abi,
      provider.getSigner(0),
    );

    setLoading(true);

    try {
      const tx = await contract.requestRandomWords(ticketCount);
      const receipt = await tx.wait();
      console.log(receipt);
      alert('Number requested successfully');
    } catch (e: any) {
      alert('There was an error: ' + e.toString());
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center p-8 rounded bg-slate-700">
      <div className="mb-8 text-xl font-bold">Generate a winning number</div>

      {(!isActive || !accounts) && (
        <Button onClick={() => metaMask.activate()}>Connect with MetaMask</Button>
      )}

      {isActive && chainId !== 5 && <div>Please switch your network to Görli</div>}

      {isActive && chainId === 5 && (
        <>
          <div className="mb-2">How many tickets are there?</div>
          <input
            type="number"
            step={1}
            value={ticketCount}
            onChange={e => setTicketCount(e.target.valueAsNumber)}
            className="text-black"
          />

          <Button onClick={generate} className="flex mt-8">
            Generate {loading && <CgSpinner size={20} className="ml-2 animate-spin" />}
          </Button>
        </>
      )}
    </div>
  );
}
