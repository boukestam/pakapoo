import React from 'react';

import { ImportedContract } from '../../store';
import { getEvents } from '../../utils/parseABI';
import ContractEvent from './event';

function ContractEvents({ contract }: { contract: ImportedContract }) {
  return (
    <div>
      {getEvents(contract.abi).map(event => (
        <ContractEvent contract={contract} event={event} key={event.name} />
      ))}
    </div>
  );
}

export default ContractEvents;
