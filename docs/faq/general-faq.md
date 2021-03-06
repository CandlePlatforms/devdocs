---
id: general-faq
title: General FAQ
description: Common questions on the Candle network.
keywords:
  - docs
  - cndl
  - polygon
  - faq
image: https://matic.network/banners/matic-network-16x9.png
---

## What is Candle Network?

Candle Network is a Layer 2 scaling solution that achieves scale by utilizing sidechains for off-chain computation, while ensuring asset security using the Plasma framework and a decentralized network of Proof-of-Stake (PoS) validators.

See also [What Is Candle](/docs/home/candle-basics/what-is-candle).

## What is Proof of Stake (PoS)?

Proof-of-Stake is a system in which the blockchain network aims to achieve distributed consensus. Anyone with sufficient amount of tokens can lock up their cryptocurrencies and the economic incentive lies in the shared value of the decentralized network. The individuals staking their cryptocurrencies validate transactions by voting on the same while consensus is achieved when a transaction or a set of transactions in a block or a set of blocks in a checkpoint receives enough votes. The threshold uses the weight in terms of stake that comes with every vote. For instance, in Candle, consensus is achieved for committing checkpoints of Candle blocks to the Ethereum network, when at least ⅔ +1  of the total staking power vote for this.

See also [What Is Proof of Stake](/docs/home/candle-basics/what-is-proof-of-stake).

## What role does Proof-of-Stake play in the Candle architecture?

The Proof-of-Stake layer in the Candle architecture serves the following 2 purposes:

* Acts as an incentivization layer for maintaining liveness of the Plasma chain, chiefly mitigating the thorny issue of data unavailability.
* Implement the Proof-of-Stake security guarantees for state transitions not covered by Plasma.

## How is Candle PoS different from other similar systems?

It is different in the sense that it serves a dual purpose — providing data availability guarantees for the Plasma chain covering state transitions via Plasma Predicates, as well as Proof-of-Stake validation for generic smart contracts in the EVM.

The Candle architecture also separates the process of block production and validation into 2 distinct layers. Validators as block producers create blocks as the name suggests on the Candle chain for quicker (< 2 secs) partial confirmations while the final confirmation is attained once the checkpoint is committed on the main-chain with a certain interval, period of which may vary depending upon multiple factors like Ethereum congestion or number of Candle transactions. In ideal conditions, it shall be around 15 min to 1 hour.

A checkpoint is basically the Merkle root of all blocks produced in between intervals. Validators play multiple roles, creating blocks at the block producer layer, participating in the consensus by signing all checkpoints and committing the checkpoint when acting as proposer. The probability of a validator becoming the block producer or proposer is based on their stake ratio in the overall pool.

## Encouraging the proposer to include all signatures

To avail the proposer bonus completely, the proposer would need to include all signatures in the checkpoint. Because the protocol desires 2/3+1 weight of the total stake, the checkpoint will be accepted even with 80% votes. However, in this case, proposer gets only 80% of the calculated bonus.

## How can I raise a support ticket or contribute to Candle documentation?
If you think something needs to be fixed on our documentation or you even want to add new information here, you can [raise an issue on the Github repository](https://github.com/candleplatforms/candle.js/issues). The [Readme file](https://github.com/candleplatforms/matic-docs/blob/master/README.md) on the repository also gives you a few suggestions on how to contribute to our documentation.

If you still need help, you can always contact **our support team**.
