import React, { useEffect, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useParams } from 'react-router-dom';

import { BigNumber, ethers } from 'ethers';

import abi from '../abi.json';

export function Number() {
  const { lotteryIndex } = useParams();

  const [number, setNumber] = useState<number>(0);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://rinkeby.infura.io/v3/70c7fc7307034433a706556377bd1fc6',
    );

    const contract = new ethers.Contract(
      '0x3B99D9d97ef9c447DA7339C298048b1F043577F2',
      abi,
      provider,
    );

    contract
      .getNumber(lotteryIndex)
      .then((result: BigNumber) => {
        console.log(result);
        setNumber(result.toNumber());
      })
      .catch((e: any) => {
        console.error(e);
        setNotFound(true);
      });
  }, [lotteryIndex]);

  return (
    <div className="flex flex-col items-center p-8 rounded bg-slate-700">
      <div className="mb-4 font-bold">Winning number</div>

      {number > 0 ? (
        <span className="text-7xl">{number}</span>
      ) : notFound ? (
        <div className="text-sm">This lottery is not finished</div>
      ) : (
        <CgSpinner size={48} className="animate-spin" />
      )}
    </div>
  );
}
