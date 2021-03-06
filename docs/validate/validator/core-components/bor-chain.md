---
id: bor-chain
title: Bor Chain
description: Learn what the Bor node is on Candle.
keywords:
  - docs
  - cndl
  - polygon
image: https://matic.network/banners/matic-network-16x9.png 
---

The Bor node or the block producer implementation is the sidechain operator.

The sidechain VM is EVM-compatible. Currently, Bor is a basic Geth implementation with custom changes done to the consensus algorithm.

Block producers are chosen from the [validator](/docs/validate/glossary#validator) set and are shuffled using historical Ethereum block hashes.

See also [Bor architecture](/docs/contribute/bor/overview).
