---
id: deposit-ether
title: deposit ether
keywords: 
- 'pos client, depositEther, candle, sdk'
description: 'depositEther method can be used to deposit required amount of ether from ethereum to candle.'
---

`depositEther` method can be used to deposit required amount of **ether** from ethereum to candle.

```
const result = await posClient.depositEther(<amount>, <userAddress>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
