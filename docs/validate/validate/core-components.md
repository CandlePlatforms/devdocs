---
id: core-components
title: Core Components
description: The layers and components of the Polygon Network.
keywords:
  - docs
  - matic
  - polygon
  - architecture
image: https://matic.network/banners/matic-network-16x9.png 
---

## Overview

Polygon consists of the three following layers:

* Ethereum layer — a set of contracts on the Ethereum mainnet.
* Heimdall layer — a set of proof-of-stake Heimdall nodes running in parallel to the Ethereum mainnet, monitoring the set of staking contracts deployed on the Ethereum mainnet, and committing the Polygon Network checkpoints to the Ethereum mainnet. Heimdall is based on Tendermint.
* Bor layer — a set of block-producing Bor nodes shuffled by Heimdall nodes. Bor is based on Go Ethereum.

To be a validator on the Polygon Network, you must run:

* Sentry node — a separate machine running a Heimdall node and a Bor node. A sentry node is open to all nodes on the Polygon Network.
* Validator node — a separate machine running a Heimdall node and a Bor node. A validator node receives the data from and the sends the data to the sentry node.
* Stake the MATIC tokens in the staking contracts deployed on the Ethereum mainnet.

## Components

### Heimdall

Heimdall does the following:

* Monitors the staking contracts on the Ethereum mainnet.
* Verifies all state transitions on the Bor chain.
* Commits the Bor chain state checkpoints to the Ethereum mainnet.

Heimdall is based on Tendermint.

:::note

See also:

* GitHub repository: [Heimdall](https://github.com/maticnetwork/heimdall)
* GitHub repository: [Staking contracts](https://github.com/maticnetwork/contracts/tree/master/contracts/staking)
* Blog post: [Heimdall and Bor](https://blog.polygon.technology/heimdall-and-bor/)

:::

### Bor

Bor does the following:

* Produces blocks on the Polygon Network.

Bor is based on Go Ethereum.

Bor is the Block producer node and layer for the Polygon Network. Blocks produced on Bor are validated by Heimdall nodes.

:::note

See also:

* GitHub repository: [Bor](https://github.com/maticnetwork/bor)
* Blog post: [Heimdall and Bor](https://blog.polygon.technology/heimdall-and-bor/)

:::
