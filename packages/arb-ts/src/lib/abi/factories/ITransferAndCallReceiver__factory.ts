/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type {
  ITransferAndCallReceiver,
  ITransferAndCallReceiverInterface,
} from '../ITransferAndCallReceiver'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'onTokenTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class ITransferAndCallReceiver__factory {
  static readonly abi = _abi
  static createInterface(): ITransferAndCallReceiverInterface {
    return new utils.Interface(_abi) as ITransferAndCallReceiverInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransferAndCallReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ITransferAndCallReceiver
  }
}
