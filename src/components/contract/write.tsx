import React from 'react';

import { ImportedContract } from '../../store';
import { getOperations } from '../../utils/parseABI';
import ContractCall from './call';

function ContractWrite({ contract }: { contract: ImportedContract }) {
  return (
    <div>
      {getOperations(contract.abi).map(call => (
        <ContractCall contract={contract} call={call} actionLabel="Write" key={call.name} />
      ))}
    </div>
  );
}

export default ContractWrite;
