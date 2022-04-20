---
id: glossary
title: Glossary
description: Key Polygon terms
keywords:
  - docs
  - matic
  - polygon
  - glossary
image: https://matic.network/banners/matic-network-16x9.png 
---

## Block producer

A block producer is an active [validator](/docs/validate/glossary#validator) selected to act as block producer for a [span](/docs/validate/glossary#validator).

A block producer is responsible for creating blocks and broadcasting the created blocks to the network.

## Bor

A Bor node is a node producing blocks on the Polygon Network.

Bor is based on [Go Ethereum](https://geth.ethereum.org/).

## Checkpoint transaction

A checkpoint transaction is a transaction containing the Merkle root of blocks of the [Bor](/docs/validate/glossary#bor) layer between the checkpoint intervals.

The transaction is committed to the Polygon staking contracts on the Ethereum mainnet by a [Heimdall](/docs/validate/glossary#heimdall) node.

See also:

* [Heimdall architecture: Checkpoint](/docs/contribute/heimdall/checkpoint)
* [Checkpoint Mechanism](/docs/validate/validator/checkpoint-mechanism)

## Commission

A commission is the percentage of the rewards taken by [validators](/docs/validate/glossary#validator) from the [delegators](/docs/validate/glossary#delegator) who stake with the validators.

See also [Validator Commission Operations](/docs/validate/validate/validator-commission-operations).

## Delegator

The delegator role stakes the MATIC tokens to secure the Polygon Network with existing [validators](/docs/validate/glossary#validator) without running the nodes themselves.

See also [Who Is a Delegator](/docs/validate/polygon-basics/who-is-delegator).

## Full node

A full node is a fully synced [sentry node](/docs/validate/glossary#sentry) running both [Heimdall](/docs/validate/glossary#heimdall) and [Bor](/docs/validate/glossary#bor).

See also [Full Node Deployment](/docs/integrate/full-node-deployment/).

## Heimdall

A Heimdall node is a node running in parallel to the Ethereum mainnet, monitoring the set of contracts deployed on the Ethereum mainnet, and committing the Polygon Network [checkpoints](/docs/validate/glossary#checkpoint-transaction) to the Ethereum mainnet.

Heimdall is based on [Tendermint](https://tendermint.com/).

## Owner address

An owner address is the address used to stake, restake, change the signer address, withdraw rewards and manage delegation related parameters on the Ethereum mainnet.

While the [signer key](/docs/validate/glossary#signer-address) is kept on the node and is considered a *hot* wallet, the owner key must be kept very secure, used infrequently, and is considered a *cold* wallet.

See also [Key Management](/docs/validate/validator/core-components/key-management).

## Proposer

A proposer is the [validator](/docs/validate/glossary#validator) selected by the algorithm to propose a new block.

A proposer is also responsible for collecting all signatures for a particular [checkpoint](/docs/validate/glossary#checkpoint-transaction) and committing the checkpoint to the Ethereum mainnet.

## Sentry

A sentry node is a node running both the [Heimdall](/docs/validate/glossary#heimdall) node and the [Bor](/docs/validate/glossary#bor) node to download the data from other nodes on the network and to propagate the [validator](/docs/validate/glossary#validator) data on the network.

A sentry node is open to all other sentry nodes on the network.

## Span

A logically defined set of blocks for which a set of validators is chosen from all the available [validators](/docs/validate/glossary#validator).

The selection of each span is decided by at least 2/3 of the validators in terms of the staking power.

See also [Bor Consensus: Span](/docs/contribute/bor/consensus/#span).

## Staking

Staking is the process of locking up tokens into a deposit to earn the right to validate and produce blocks on a blockchain. Typically staking is done in the native token for the network — for the MATIC token is locked up by validators/stakers in the Polygon Network. Other examples include ETH in ETH 2.0, ATOM in Cosmos, etc.

See also [What Is Proof of Stake](/docs/home/polygon-basics/what-is-proof-of-stake).

## Signer address

A signer address is the address of an Ethereum account of the [Heimdall](/docs/validate/glossary#heimdall) validator node. The signer address signs and submits the [checkpoint transactions](/docs/validate/glossary#checkpoint-transaction).

While the signer key is kept on the node and is considered a *hot* wallet, the [owner key](/docs/validate/glossary#owner-address) must be kept very secure, used infrequently, and is considered a *cold* wallet.

See also [Key Management](/docs/validate/validator/core-components/key-management).

## Validator

The validator role stakes the MATIC tokens and is running both the [Heimdall](/docs/validate/glossary#heimdall) node and the [Bor](/docs/validate/glossary#bor) node to commit the network checkpoints to the Ethereum mainnet and to produce blocks on the network.

A validator node is only open to its [sentry](/docs/validate/glossary#sentry) node and closed to the rest of the network.

See also [Who Is a Validator](/docs/validate/polygon-basics/who-is-validator).
