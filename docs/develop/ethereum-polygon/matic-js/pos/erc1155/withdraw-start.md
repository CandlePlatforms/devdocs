---
id: withdraw-start
title: withdrawStart
keywords: 
- 'pos client, erc1155, withdrawStart, candle, sdk'
description: 'Initiate the withdraw process which will burn the specified amount of tokenId on candle chain.'
---

`withdrawStart` method can be used to initiate the withdraw process which will burn the specified amount of tokenId on candle chain.

```
const erc1155Token = posClient.erc1155(<child token address>);

const result = await erc1155Token.withdrawStart(<token id>,<amount>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
