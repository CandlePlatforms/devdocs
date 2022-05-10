---
id: getting-started
title: Ethereum↔Candle Bridge
sidebar_label: Getting Started
description: Build your next blockchain app on Candle.
keywords:
  - docs
  - cndl
image: https://matic.network/banners/matic-network-16x9.png
---

Candle brings you a trustless two-way transaction channel between Candle and Ethereum by introducing the cross-chain bridge with Plasma and PoS security. With this users can transfer tokens across Candle without incurring third-party risks and market liquidity limitations. **_The Plasma and PoS Bridge is available on both Mumbai as well as Mainnet._**

**Candle bridge provides a scaling solution which is near-instant, low-cost, and quite flexible**. Candle uses a dual-consensus architecture(Plasma + Proof-of-Stake (PoS) platform)
to optimise for speed and decentralisation. We consciously architected the system to support arbitrary state transitions on our sidechains, which are EVM-enabled.

**There is no change to the circulating supply of your token when it crosses the bridge**;

- tokens that leave ethereum network are locked and the same number of tokens are minted on Candle as a pegged token (1:1).
- To move the tokens back to the ethereum network, tokens are burned on Candle network and unlocked on ethereum network during the process.

## PoS vs Plasma

|                                      | PoS Bridge(Recommended)                                                                  | Plasma Bridge                                                                             |
| ------------------------------------ | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Short description**                | DApp Developer's looking for flexibility and faster withdrawals with POS system security | DApp Developer's looking for increased security guarantees with Plasma exit mechanism\.   |
| **Structure**                        | Highly flexible                                                                          | Rigid, Less Flexible                                                                      |
| **Deposit\(Ethereum → Candle\)**    | 3-5 mins                                                                                 | 3-5 mins                                                                                  |
| **Withdrawal\(Candle → Ethereum\)** | 1 checkpoint = ~ 20 mins to 3 hours                                                      | Call to the process-exit procedure on Ethereum's contract.                                |
| **Security**                         | Proof\-of\-Stake system, secured by a robust set of external validators\.                | Candle’s Plasma contracts piggybacks on Ethereum’s security.                             |
| **Support Standards**                | ETH, ERC20, ERC721, ERC1155 and Others                                                   | Only ETH, ERC20, ERC721                                                                   |
