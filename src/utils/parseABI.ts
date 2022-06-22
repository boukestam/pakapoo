export interface ABIIO {
  name: string;
  type: string;
  internalType: string;
}

export interface ABIFunction {
  name: string;
  inputs: ABIIO[];
  outputs: ABIIO[];
  stateMutability: 'view' | 'nonpayable' | 'payable';
  type: 'function';
}

export interface ABIEventInput {
  name: string;
  type: string;
  internalType: string;
  indexed: boolean;
}

export interface ABIEvent {
  name: string;
  anonymous: boolean;
  inputs: ABIEventInput[];
  type: 'event';
}

export function getProperties(abiString: string): ABIFunction[] {
  const abi: any[] = JSON.parse(abiString);

  return abi.filter(
    item => item.type === 'function' && item.stateMutability === 'view' && item.inputs.length === 0,
  );
}

export function getCalls(abiString: string): ABIFunction[] {
  const abi: any[] = JSON.parse(abiString);

  return abi.filter(
    item => item.type === 'function' && item.stateMutability === 'view' && item.inputs.length > 0,
  );
}

export function getOperations(abiString: string): ABIFunction[] {
  const abi: any[] = JSON.parse(abiString);

  return abi.filter(item => item.type === 'function' && item.stateMutability !== 'view');
}

export function getEvents(abiString: string): ABIEvent[] {
  const abi: any[] = JSON.parse(abiString);

  return abi.filter(item => item.type === 'event');
}
