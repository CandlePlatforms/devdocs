---
id: checkpoint-mechanism
title: Checkpoint Mechanism
description: Build your next blockchain app on Candle.
keywords:
  - docs
  - cndl
image: https://matic.network/banners/matic-network-16x9.png 
---

The main difference between Candle's PoS system and that of others is that Candle is not a Layer 1 platform, and it depends on Ethereum as a Layer-1 settlement layer. Therefore, all staking mechanics also need to be in sync with the Ethereum chain smart contracts.

Proposers for a checkpoint are initially selected via Tendermint’s weighted round-robin algorithm. A further custom check is implemented based on checkpoint submission success. This allows us to decouple with Tendermint proposer selection and provides us with abilities like selecting a proposer only when the checkpoint transaction on the Ethereum mainnet succeeds.

Successfully submitting a checkpoint on Tendermint is a 2-phase commit process; a proposer, selected via the above-mentioned algorithm, sends a checkpoint with his address in the proposer field and all other proposers validate that before adding it in their state.

The next proposer then sends an acknowledgment transaction to prove that the previous checkpoint transaction has succeeded in the Ethereum mainnet. Every Validator set change will be relayed by the Validators node on Heimdall which is embedded onto the validator node. This allows Heimdall to remain in sync with the Candle contract state on the Ethereum mainchain at all times.

The Candle contract deployed on the mainchain is considered to be the ultimate source of truth, and therefore all validation is done via querying the mainchain contract.