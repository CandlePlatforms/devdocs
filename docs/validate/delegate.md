---
id: delegate
title: Become a Delegator
description: Learn how to become a delegator on the Polygon Network.
keywords:
  - docs
  - matic
  - polygon
  - delegate
image: https://matic.network/banners/matic-network-16x9.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This is a step-by-step guide to help you become a [delegator](/docs/validate/glossary#delegator) on the Polygon Network.

The only prerequisite is to have your MATIC tokens and ETH on the Ethereum mainnet address.

## Access the dashboard

1. In your wallet (e.g. MetaMask), choose the Ethereum mainnet.
1. Log in to the [Polygon Wallet dashboard](https://wallet-dev.polygon.technology/staking/).
1. Once you log in, you will the list of validators with stats.

:::note

If you a validator, use a different non-validating address to log in as delegator.

:::

## Delegate to a validator

1. Click **Become a Delegator** or scroll down to a specific validator and click **Delegate**.
1. Provide the amount of MATIC to delegate.
1. Approve the delegation transaction and click **Delegate**.

After the delegation transaction completes, you will see the *Delegation Completed* message.

## View your delegations

To view your delegations, click [My Account](https://wallet.polygon.technology/staking/my-account).

## Withdraw rewards

1. Click [My Account](https://wallet.polygon.technology/staking/my-account).
1. Under your delegated validator, click **Withdraw Reward**.

This will withdraw the MATIC token rewards to your Ethereum address.

## Restake rewards

1. Click [My Account](https://wallet.polygon.technology/staking/my-account).
1. Under your delegated validator, click **Restake Reward**.

The will restake the MATIC token rewards to the validator and increase your delegation stake.

## Unbond from a validator

1. Click [My Account](https://wallet.polygon.technology/staking/my-account).
1. Under your delegated validator, click **Unbond**.

The will  withdraw your rewards from the validator and your entire stake from the validator.

Your withdrawn rewards will show up immediately on your Ethereum address.

Your withdrawn stake funds will be locked for 80 [checkpoints](/docs/validate/glossary#checkpoint-transaction).

The fund locking for the unbonding period is in place to ensure there is no malicious behaviour on the network.

## Move stake from one node to another node

Moving stake from one node to another node is a single transaction. There are no delays or unbonding periods during this event.

1. Log in to the [My Account](https://wallet-dev.polygon.technology/staking/my-account) on the staking dashboard.
1. Click **Move Stake** under your delegated validator.
1. Select an external validator and click **Stake here**.
1. Provide the stake amount and click **Move Stake**.

This will move the stake. The dashboard will update after 12 block confirmations.

:::note
Moving stake is allowed between any nodes. The only exception is moving stake from one Foundation node to another Foundation node is not allowed.

:::
