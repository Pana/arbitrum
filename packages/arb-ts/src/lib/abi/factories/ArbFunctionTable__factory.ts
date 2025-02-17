/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type {
  ArbFunctionTable,
  ArbFunctionTableInterface,
} from '../ArbFunctionTable'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'get',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'size',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'buf',
        type: 'bytes',
      },
    ],
    name: 'upload',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class ArbFunctionTable__factory {
  static readonly abi = _abi
  static createInterface(): ArbFunctionTableInterface {
    return new utils.Interface(_abi) as ArbFunctionTableInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbFunctionTable {
    return new Contract(address, _abi, signerOrProvider) as ArbFunctionTable
  }
}
