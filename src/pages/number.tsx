import React, { useEffect, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useParams } from 'react-router-dom';

import { BigNumber, ethers } from 'ethers';

import abi from '../abi.json';

export function Number() {
  const { numberIndex } = useParams();

  const [number, setNumber] = useState<number>(0);
  const [tx, setTx] = useState<string>('');
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://sepolia.infura.io/v3/70c7fc7307034433a706556377bd1fc6',
    );

    const contract = new ethers.Contract(
      process.env.REACT_APP_CONTRACT_ADDRESS as string,
      abi,
      provider,
    );

    contract
      .getNumber(numberIndex)
      .then((result: { randomWord: BigNumber; blockNumber: BigNumber }) => {
        console.log(result);
        console.log(result.randomWord.toNumber(), result.blockNumber.toNumber());
        setNumber(result.randomWord.toNumber());

        const eventFilter = contract.filters.RequestFulfilled();
        contract
          .queryFilter(
            eventFilter,
            result.blockNumber.toNumber() - 1,
            result.blockNumber.toNumber() + 1,
          )
          .then(events => {
            console.log(events);
            if (events.length > 0) {
              setTx(events[0].transactionHash);
            }
          });
      })
      .catch((e: any) => {
        console.error(e);
        setNotFound(true);
      });
  }, [numberIndex]);

  return (
    <div className="flex flex-col items-center p-8 rounded bg-slate-700">
      <div className="mb-4 font-bold">Winning number</div>

      {number > 0 ? (
        <div>
          <div className="text-center text-7xl">{number}</div>
          {tx && (
            <div className="mt-10">
              <a
                className="underline"
                href={'https://goerli.etherscan.io/tx/' + tx}
                target="_blank"
              >
                View proof on blockchain
              </a>
            </div>
          )}
        </div>
      ) : notFound ? (
        <div className="text-sm">This round is not finished</div>
      ) : (
        <CgSpinner size={48} className="animate-spin" />
      )}
    </div>
  );
}
