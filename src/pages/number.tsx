import React, { useEffect, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useParams } from 'react-router-dom';

import { BigNumber, ethers } from 'ethers';

import abi from '../abi.json';

export function Number() {
  const { numberIndex } = useParams();

  const [number, setNumber] = useState<number>(0);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://goerli.infura.io/v3/70c7fc7307034433a706556377bd1fc6',
    );

    const contract = new ethers.Contract(
      '0x2D1416Bf5d59D66850F2110FE03E240f667a81Da',
      abi,
      provider,
    );

    contract
      .getNumber(numberIndex)
      .then((result: BigNumber) => {
        console.log(result);
        setNumber(result.toNumber());
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
        <span className="text-7xl">{number}</span>
      ) : notFound ? (
        <div className="text-sm">This round is not finished</div>
      ) : (
        <CgSpinner size={48} className="animate-spin" />
      )}
    </div>
  );
}
