---
id: withdraw-exit-faster
title: withdrawExitFaster
keywords: 
- 'pos client, erc721, withdrawExitFaster, polygon, sdk'
description: 'Get started with maticjs'
---

`withdrawExitFaster` method can be used to exit the withdraw process by using the txHash from `withdrawStart` method.

 class="highlight mb-20px mt-20px">
It is fast because it generates proof in backend. You need to configure <a href="docs/set-proof-api">setProofAPI</a>
>

**Note**- withdrawStart transaction must be checkpointed in order to exit the withdraw.

```
const erc721RootToken = posClient.erc721(<root token address>, true);

const result = await erc721RootToken.withdrawExitFaster(<burn tx hash>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
