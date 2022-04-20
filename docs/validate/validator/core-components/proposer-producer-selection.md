---
id: proposer-producer-selection
title: Proposers & Producers Selections
description: Learn how the selection of proposers and block producers is done on the Polygon Network
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The ratio of [stake](/docs/validate/glossary#staking) specifies the probability to be selected as a member of [block producers](/docs/validate/glossary#block-producer) committee.

## Selection process

Let's suppose we have 3 validators in pool — Alice, Bill, and Clara:

* Alice is staking 100 MATIC tokens.
* Bill is staking 40 MATIC tokens.
* Clara is staking 40 MATIC tokens.

Validators are given slots according to the stake.

Because Alice has 100 MATIC tokens staked, and the per slot cost is 10 MATIC tokens as maintained by validator's governance, Alice gets 5 slots in total. Similarly, Bill and Clara get 2 slots in total.

The Alice, Bill and Clara validators are given the following slots:

* [ A, A, A, A, A, B, B, C, C ]

Polygon then shuffles the array of the Alice, Bill and Clara slots by using the Ethereum block hashes as seed.

The result of the shuffle is the following array of slots:

* [ A, B, A, A, C, B, A, A, C]

Now depending on the total block producer count as maintained by validator's governance, Polygon uses the validators from the top — for example. for a set of 5 producers the array of slots is [ A, B, A, A, C].

The producer set for the next span is defined as [ A: 3, B:1, C:1 ].

Using the resulting validator set and Tendermint's [proposer selection algorithm](https://docs.tendermint.com/master/spec/consensus/proposer-selection.html), Polygon selects a producer for every sprint on Bor.

<img src={useBaseUrl("img/validators/producer-proposer.png")} />

Legend:

* Dynasty: Time between the end of the last auction and start time of the next auction.
* Sprint: Time interval for which the block producers committee is selected.
* Span: Number of blocks produced by a single producer.
