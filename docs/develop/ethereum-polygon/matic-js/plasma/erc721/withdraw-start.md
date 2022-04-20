---
id: withdraw-start
title: withdrawStart
keywords: 
- 'plasma client, erc721, withdrawStart, candle, sdk'
description: 'Get started with maticjs'
---

`withdrawStart` method can be used to initiate the withdraw process which will burn the specified token on candle chain.

```
const erc721Token = plasmaClient.erc721(<token address>);

const result = await erc721Token.withdrawStart(<token id>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
