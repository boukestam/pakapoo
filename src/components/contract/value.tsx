import React from 'react';

import { ethers } from 'ethers';

function numberWithCommas(s: string) {
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function ContractValue({ value }: { value: any }) {
  function toString(v: any) {
    if (v instanceof ethers.BigNumber) {
      if (v.gte(ethers.constants.WeiPerEther)) {
        return numberWithCommas(ethers.utils.formatEther(v)).replace(/\.0+$/, '') + ' ether';
      }
    }

    return v.toString();
  }

  return <div>{toString(value)}</div>;
}
