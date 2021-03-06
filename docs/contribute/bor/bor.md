---
id: bor
title: Bor architecture
description: Build your next blockchain app on Candle.
keywords:
  - docs
  - cndl
image: https://matic.network/banners/matic-network-16x9.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Candle is a simple EVM-compatible chain that is designed to be lightweight and interoperable with as many chains as possible.

## Architecture

<img src={useBaseUrl("img/Bor/bor-architecture.png")} />

A blockchain is a set of network clients interacting and working together. The client is a piece of software capable of establishing a p2p communication channel with other clients, signing and broadcasting transactions, deploying and interacting with smart contracts, etc. The client is often referred to as a node.

For Candle, The node is designed with a single layer implementation called Candle Validator.

1. Candle Validator
    - Candle Chain
    - EVM Compatible VM
    - Proposers and Producer set selection
    - SystemCall
    - Fee Model

## **Candle Validator (Block Producer layer)**

The Candle node implementation is basically the chain operator. The chain VM is EVM-compatible. Originally, it was a basic Geth implementation with custom changes done to the consensus algorithm. However, it's since been rebuilt from the ground up to make it lightweight and focused.

 Interaction for the users of Candle take place on this chain, which is EVM compatible to avail the functionality and compatibility of Ethereum developer tooling and applications.

### Candle Chain

This chain is a separate blockchain that is attached to Ethereum and other chains using a bridge. The two-way bridge enables interchangeability of assets between Ethereum and other blockchains and Candle.

### EVM Compatible VM

The Ethereum Virtual Machine (EVM) is a powerful, sandboxed virtual stack embedded within each full Candle node, responsible for executing contract bytecode. Contracts are typically written in higher level languages, like Solidity, then compiled to EVM bytecode.

### Proposers and Producers Selection

Block Producers for the Candle layer are a committee selected from the Validator pool on the basis of their stake, which happens at regular intervals and is shuffled periodically. These intervals are decided by the Validator's governance with regards to dynasty and network.

Ratio of Stake/Staking power specifies the probability to be selected as a member of the block producer committee.

<img src={useBaseUrl("img/Bor/bor-span.png")} />

#### Selection Process

- Let's suppose we have 3 validators in pool, and they are Alice, Bill and Clara.
- Alice staked 100 Matic tokens whereas Bill and Clara staked 40 Matic tokens.
- Validators are given slots according to the stake, as Alice has 100 Matic tokens staked, she will get slots proportionally. Alice will get 5 slots in total. Similarly, Bill and Clara get 2 slots in total.
- All the validators are given these slots [ A, A, A, A, A, B, B, C, C ]
- Using historical Ethereum block data as seed, we shuffle this array.
- After shuffling the slots using the seed, say we get this array [ A, B, A, A, C, B, A, A, C]
- Now depending on Producer count*(maintained by validator's governance)*, we pop validators from the top. For e.g. if we want to select 5 producers we get the producer set as [ A, B, A, A, C]
- Hence the producer set for the next span is defined as [ A: 3, B:1, C:1 ].
- Using this validator set and tendermint's proposer selection algorithm we choose a producer for every sprint on BOR.

### SystemCall Interface

System call is an internal operator address which is under EVM. This helps to maintain the state for Block Producers for every sprint. A System Call is triggered towards the end of a sprint and a request is made for the new list of Block Producers. Once the state is updated, changes are received after block generation on Bor to all the Validators.

#### **Functions:**

#### `proposeState`

- Call is only allowed to validators.
- Inspect `stateId` if it is already proposed or committed.
- Propose the `stateId` and update the flag to `true`.

#### `commitState`

- Call is only allowed to System.
- Inspect `stateId` if it is already proposed or committed.
- Notify `StateReceiver` Contract with new `stateId`.
- Update the `state` flag to `true`, And `remove` the `proposedState`.

#### `proposeSpan`

- Call is only allowed to validators.
- Check if the Span proposal is `pending`.
- Update the Span Proposal to `true`

#### `proposeCommit`

- Call is only allowed to System.
- Set `initial validators` if current span is zero.
- Check Conditions for `spanId` and `time_period` of Sprint and Span.
- Update the new `span` and `time_period`.
- Set `validators` and `blockProducers` for the `sprint`.
- Update the flag for `spanProposal` to `true`.

### Bor Fee Model

For normal transaction, fees in Matic token gets collected and distributed to block producers, similar to Ethereum transactions.

Like other blockchains, Candle has a native token called Matic(CNDL). CNDL is an ERC20 token used primarily for paying gas(transaction fees) on Candle and staking.

- An important thing to note is that on the Candle chain, the CNDL tokens works as an ERC20 token, but also as the native token - both at the same time. Therefore, this means that a user can pay gas with CNDL as well as send CNDL to other accounts.

For genesis-contracts, gasPrice and gasLimit works same as Ethereum, but during the execution it won't deduct the fees from sender's account.

Genesis transactions from current validators are executed with `gasPrice = 0`.

- Validators have to send following types of transaction like State proposals like deposits & Span proposals on Bor

## Technical Insight

#### Genesis Contracts

[BorValidatorSet(0x1000)](https://github.com/candleplatforms/genesis-contracts/blob/master/contracts/BorValidatorSet.template) ??? This contract manages validator set for each span and sprint.

[BorStateReceiver(0x1001)](https://github.com/candleplatforms/genesis-contracts/blob/master/contracts/StateReceiver.sol) ??? This Contract manages the transfer of arbitrary contract data from Ethereum contracts to Candle contracts

MaticChildERC20(0x1010) ??? Child Contract for Main Chain tokens which allows to move assets from Ethereum to Candle.

### [Bor.go](https://github.com/candleplatforms/bor/blob/master/consensus/bor/bor.go)

Bor Protocol

## Glossary

- StartEpoch - Checkpoint number post which a validator is activated and will participate in the consensus.
- EndEpoch - Checkpoint number post which a validator is considered deactivated and won't participate in the consensus.
- Sprint - Sprint is a continuous set of blocks created by a single validator.
- Span -  Span is a big set of blocks with a fixed validator set but consisting of various sprints. For eg for a span of length 6400 blocks it will consist of 100 sprints of 64 blocks.
- Dynasty: Time between the end of last auction and start time of next auction.

## Resources:

- :ledger: [Bor](https://github.com/candleplatforms/bor)
- :blue_book: [EVM](https://www.bitrates.com/guides/ethereum/what-is-the-unstoppable-world-computer)
- :green_book: [How EVM Works?](https://medium.com/mycrypto/the-ethereum-virtual-machine-how-does-it-work-9abac2b7c9e)
- :books: [Tendermint Proposer Selection](https://docs.tendermint.com/master/spec/reactors/consensus/proposer-selection.html)
