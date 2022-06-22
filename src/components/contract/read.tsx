import React from 'react';

import { ImportedContract } from '../../store';
import { getCalls } from '../../utils/parseABI';
import ContractCall from './call';

function ContractRead({ contract }: { contract: ImportedContract }) {
  return (
    <div>
      {getCalls(contract.abi).map(call => (
        <ContractCall contract={contract} call={call} actionLabel="Read" key={call.name} />
      ))}
    </div>
  );
}

export default ContractRead;
