import React from 'react';

import { ethers } from 'ethers';

import { useStore } from '../../store';
import { copyToClipboard } from '../../utils/copyToClipboard';
import { formatAddress } from '../../utils/formatAddress';

function numberWithCommas(s: string) {
  const parts = s.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export function ContractValue({ value, shorten }: { value: any; shorten?: boolean }) {
  const { addNotification } = useStore();

  function toString(v: any) {
    if (v === null) return 'null';
    if (v === undefined) return 'undefined';

    return v.toString();
  }

  function toFormat(v: any) {
    if (v instanceof ethers.BigNumber) {
      if (v.gte(ethers.constants.WeiPerEther)) {
        return numberWithCommas(ethers.utils.formatEther(v)).replace(/\.0+$/, '') + ' ether';
      }
    }

    if (typeof v === 'string' && v.startsWith('0x') && shorten) {
      return formatAddress(v);
    }

    return toString(v);
  }

  return (
    <div
      title={toString(value)}
      onClick={() => {
        copyToClipboard(toString(value))
          .then(() => {
            addNotification('Copied to clipboard');
          })
          .catch(() => {
            addNotification('Error while copying');
          });
      }}
      className="cursor-pointer hover:underline hover:opacity-80"
    >
      {toFormat(value)}
    </div>
  );
}
