---
id: deposit-ether
title: deposit
keywords: 
- 'plasma client, depositEther, candle, sdk'
description: 'Get started with maticjs'
---

`depositEther` method can be used to deposit required amount of **ether** from ethereum to candle..

```
const result = await plasmaClient.depositEther(100);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
