---
id: wallet-bridge-faq
title: General
description: Build your next blockchain app on Polygon.
keywords:
  - docs
  - matic
  - wallet
image: https://matic.network/banners/matic-network-16x9.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Where can I use the Matic Web Wallet?
[https://wallet.polygon.technology/](https://wallet.polygon.technology/)

## How do I find the token contract?

Pleas check [Adding a Custom Token](../faq/adding-a-custom-token) article

## Which wallets are currently supported?

- Metamask
- Coinbase Wallet
- Wallet Connect

We will soon add more wallets.

## How is Plasma different from PoS?

Plasma comes with a additional security. 
Check out: [https://docs.polygon.technology/docs/develop/ethereum-polygon/getting-started](https://docs.polygon.technology/docs/develop/ethereum-polygon/getting-started)

## What tokens are only available on Plasma?

Polygon tokens

## How do I deposit to Polygon Wallet and also withdraw?

These blogs and videos are a perfect guide to start with depositing and withdrawing: 

Documentation: [https://docs.polygon.technology/docs/develop/wallets/matic-web-wallet/web-wallet-v2-guide/#depositing-funds-from-ethereum-to-matic](https://docs.polygon.technology/docs/develop/wallets/matic-web-wallet/web-wallet-v2-guide/#depositing-funds-from-ethereum-to-matic)

Videos: [https://www.youtube.com/playlist?list=PLslsfan1R_z0Epvnqsj29V1LBAh99dzu9](https://www.youtube.com/playlist?list=PLslsfan1R_z0Epvnqsj29V1LBAh99dzu9)

## How to switch to Polygon mainnet in Metamask?

Assuming that you have already added the network and custom RPC for Polygon mainnet in your Metamask wallet here is how you can switch:

1. Open your Metamask wallet and click on the network dropdown to expand as shown in figure:

<img src={useBaseUrl("img/wallet-bridge/wallet-faq-1.png")} width="30%" height="30%" />

1. Once the window expands you can select Polygon Network to switch.

<img src={useBaseUrl("img/wallet-bridge/wallet-faq-2.png")} width="30%" height="30%" />

You have now switched to Polygon mainnet.

You can refer to this link if you are looking for instructions on how to add the network to Metamask: [https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/](https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/)

## How to choose Polygon mainnet in Walletlink?

Please follow the guide provided [here](https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-wallets#configure-polygon-on-walletlink)

## I have deposited WETH but I don’t see it on Metamask. What do I do?

You need to manually add the custom token address of WETH to Metamask.

Open Metamask and scroll down to click on add tokens.

<img src={useBaseUrl("img/wallet-bridge/wallet-faq-3.png")} width="30%" height="30%" />


Then, select Custom Token to add the relevant contract address, symbol and the decimal precision. Contract addresses (PoS-WETH in this case) can be found on this link: [https://docs.polygon.technology/docs/develop/network-details/mapped-tokens/](https://docs.polygon.technology/docs/develop/network-details/mapped-tokens/)

You will need to add the child token address to view balances on Polygon mainnet.

Decimal of precision is 18 for WETH (generally, for most tokens decimal of precision is 18).

Once you fill in all the fields, you can click on next and your token will be added.

<img src={useBaseUrl("img/wallet-bridge/wallet-faq-4.png")} width="30%" height="30%" />


## Can I send my tokens from Polygon to any other wallet/exchange ?

You cannot directly send tokens from Polygon UI to Exchange/wallets. You have to first withdraw from Polygon to Ethereum and then send it to your exchange address (unless your exchange/wallet explicitly supports the network).

## I made a mistake of sending funds to an exchange/wallet directly. Can you help?

Unfortunately, we can not assist in such cases. Please don't send funds directly to exchanges that support only Ethereum, you have to first withdraw from Polygon to Ethereum and then send it to your exchange address.

## My transaction is pending for too long, what can I do?

Transactions on the blockchain might be dropped due to a low gas price being set when submitting the transaction. They may also be dropped when there is a sudden surge in the gas price due to congestion on Ethereum. Another possibility is that you might have canceled the transaction from your wallet or replaced the transaction. In all these cases, the wallet web will show you a transaction in progress message and this will cause you to you wait longer.

If your transaction is stuck for more than an hour, a "Try Again" button will be shown. This is good, it means you can prompt the network to retry the transaction for you. What you can do next is click on the "Try Again" button to retry the same transaction. If your deposit transaction was stuck, your deposit process will be re-initiated and if your withdrawal transaction was stuck, you will be able to continue your withdrawal from where you successfully completed the last step.

In case you face problems in going ahead with the "Try Again" button and you are using the Metamask wallet, you might need to check if there are lot of queued up transactions clogging your metamask's activity section. In this case, it may be helpful to re-install the metamask wallet and then proceed with your transaction. Alternatively, you may try to initiate the transaction from a separate browser.

Watching the video below can give more clarity on how to use the "Try Again" feature

[https://youtu.be/0b4yjR_naEQ](https://youtu.be/0b4yjR_naEQ)

## What are the list of Supported Exchanges on Polygon?

Below is a list of centralised exchanges that currently support Polygon and also the tokens that these exchanges support.

AscendEX - USDC, EASY, MATIC

MXC - MATIC, QUICK, PlotX, Dfyn

Okcoin -  ETH, USDT, LINK, MKR, USDC, DAI, USDK, COMP, YFI, SNX, YFII, and UNI. ( Tokens can only be moved from Okcoin to Polygon chain. Transferring tokens from Polygon to Okcoin is not currently supported)

Okex - BAL, BAT, CEL, COMP, CRV, DAI, ETH, GHST, GUSD, LINK, MKR, PAX, SNX, SUSHI, TUSD, UNI, USDC-ERC20, USDT-ERC20, USDK, wBTC, YFI, YFII, ZRX ( Tokens can only be moved from Okex to Polygon chain. Transferring tokens from Polygon to Okex is not currently supported)

Bitforex - MATIC

Sending Tokens to any other exchange that is not mentioned explicitly in the above list can lead to a loss of funds. If you want to withdraw funds to any exchange that does not support Polygon, you will have to first withdraw the token to Ethereum and then send it to the exchange using your Ethereum wallet. This video demonstrates how to withdraw funds from Polygon to Ethereum - [https://www.youtube.com/watch?v=DgpHY95qrbQ&list=PLslsfan1R_z0Epvnqsj29V1LBAh99dzu9&index=5](https://www.youtube.com/watch?v=DgpHY95qrbQ&list=PLslsfan1R_z0Epvnqsj29V1LBAh99dzu9&index=5)

Alternatively, you can follow this guide [here](https://docs.matic.today/docs/develop/wallets/matic-web-wallet/web-wallet-v2-guide/).

## I am not able to login, what do I do?

[https://docs.polygon.technology/docs/validate/delegator-faq/#my-metamask-is-stuck-at-confirming-after-login-what-do-i-do-or-nothing-happens-when-i-try-to-login](https://docs.polygon.technology/docs/validate/delegator-faq/#my-metamask-is-stuck-at-confirming-after-login-what-do-i-do-or-nothing-happens-when-i-try-to-login)

## Does Polygon support hardware wallets?
Yes, hardware wallets are supported.

## What can I do with my Polygon wallet?

- Send funds to any account on Polygon.
- Deposit funds from Ethereum to Polygon (using the bridge).
- Withdraw funds back to Ethereum from Polygon (also using the bridge).

## My token is not visible in the list. Who should I contact?

Reach out to the Polygon team on Discord or Telegram and get your token listed. Before that, ensure your token is mapped. If it is not mapped, please raise a request at [https://mapper.polygon.technology/](https://mapper.polygon.technology/)

## What are some best practices to follow?

- When you want to send funds from Polygon to Ethereum, use the withdraw functionality. Do not use the send functionality. This will lead to loss of funds.
- Do not deposit to the Polygon mainnet if you wish to participate in staking only.
- Do not change the gas limit from Metamask.

## What do I do if the deposit is confirmed but the balance is not getting updated?

It takes 7-8 minutes for the deposit transaction to complete. Please wait for some time and click on "refresh balance".

## What should I do if the checkpoint is not happening?

Checkpoints sometimes take more that 45 minutes to 1 hour based on network congestion on Ethereum, we suggest waiting for a while before raising a ticket.

## Is it possible to cancel a withdraw transaction?

No, you have to complete the next steps. If the current gas price is too high, then please wait and try later when the price goes down.

## Why is the MATIC token is not supported on PoS?

MATIC is the native token of Polygon and it has a contract address - 0x0000000000000000000000000000000000001010 on the Polygon chain. It is also used to pay gas. Mapping the MATIC token on the PoS bridge will lead to MATIC having an additional contract address on the Polygon chain. This will collide with the existing contract address as this new token address can not be used to pay for gas and will have to remain as a normal ERC20 token on the Polygon chain. Hence, to avoid this confusion, it was decided to retain MATIC only on Plasma.

## How do I map tokens?

Please raise a mapping request at [https://mapper.polygon.technology/](https://mapper.polygon.technology/)

## What do I do if the transaction is taking too long or if the gas price is too high?

Transaction time and gas price varies based on network congestion. If a high gas price is paid, then transaction gets confirmed faster.

## Can I change the gas limit or the gas price?

Gas limit is estimated and set by the application according to certain requirements of the function being called in the contract. This should not be edited. Only gas price can be changed in order to increase or decrease the transaction fees.

## What should I do if the transaction was cancelled but the web wallet shows transaction is completed?

Please reach out to our support team.

## Where do I raise a support ticket?
https://support.polygon.technology/support/home

## The gas price is more than the amount I seek to withdraw.

A withdrawal transaction with the Plasma bridge is split into 3 steps, one that happens on the Polygon Mainnet and two steps that are to be completed on the Ethereum Mainnet. On the PoS bridge, the withdrawal transaction happens over two steps: Token burning on the Polygon network and proof submission on the Ethereum network. On the Polygon mainnet, the charges are very minimal, and the lion share of the transaction cost you see is the gas price on the Ethereum Network governed by Ethereum miners. As can be expected, this charge is outside our control, and we don't have much influence over the price point. One last thing, if your tokens are burnt, you may have to proceed with your withdrawal regardless as there is nothing we can do to reverse the process.


## Can I cancel my withdrawal transaction?

Unfortunately, Polygon cannot cancel a withdrawal once the process is initialised and the tokens are successfully burnt. A burn hash is created and the next phase of the transaction comes in immediately. If the burn transaction is still pending, you may be able to facilitate a cancellation via the following guides

[Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction) <br />
[Walletlink](https://www.techdreams.org/crypto-currency/how-to-cancel-a-pending-ethereum-transaction-on-coinbase-wallet/10159-20210412)


## My transaction is stuck.

We have listed some common errors that the users might face. You can find the solution below the image of the error. In case you're shown a different error, please [raise a support ticket](https://support.polygon.technology/support/home) for our team to troubleshoot.

  - ### Common Errors
  a. Withdrawal stuck on the Initialised phase.   

    <img src={useBaseUrl("img/wallet-bridge/stuckAtIntialised.png")} height="500px"/>

    This normally occurs when the transaction gets replaced and the wallet web application is not able to detect the replaced transaction hash. Please follow the instructions on [https://polygon-withdraw.matic.network/](https://polygon-withdraw.matic.network/) and complete your withdrawal.

  b. RPC Error

    <img src={useBaseUrl("img/wallet-bridge/RPCError.png")} height="500px"/>   

    The current RPC error you're facing might be due to an RPC overload.

    Please try changing your RPC and proceed with the transaction. You may follow this link [here](https://docs.polygon.technology/docs/develop/network-details/network#matic-mainnet) for more information.

  c.

  <img src={useBaseUrl("img/wallet-bridge/serversStumbled.png")} height="500px"/>  

  This is usually an off-and-on error that gets resolved automatically. In case you are still receiving the same error while reinitiating the step, do [raise a support ticket](https://support.polygon.technology/) with all the relevant information to troubleshoot this further.

## I made the mistake of sending funds to an exchange/wallet directly from Polygon Wallet. Can you help?

Sadly, we regret to inform you that we may not be able to assist if you have sent tokens from the Polygon network to an exchange/wallet which is not supported.

Here is what an exchange needs to do in this case (although not sure how much flexibility the support executives have to execute this). Assuming the exchange support executive has access to the account's private keys, they can transfer the funds from their account on Polygon to your (the user's) address on Polygon.

It's important to note that you shouldn't send funds directly to exchanges that support only Ethereum. The correct procedure is you have to first withdraw from Polygon to Ethereum and then send it to your exchange address.

## I'm shown an insufficient balance error.

Withdrawals and deposits on the Polygon network are cheap. What is to be understood is that the insufficient balance error can be cleared by getting some ETH balance on the ethereum mainnet. That generally clears out the problem of an insufficient balance.

If this is a transaction on the Polygon mainnet, we'll require that you have sufficient amount of matic tokens.

## How do I bridge assets across chains?

[https://wallet.polygon.technology/bridge/](https://wallet.polygon.technology/bridge/) (ETH <-> Polygon) <br/>
[https://xpollinate.io/](https://xpollinate.io/) (BSC <-> Polygon <-> xDai) <br/>
[https://exchange.chainswap.com/](https://exchange.chainswap.com/) (ETH <-> Polygon/BSC) <br/>
[https://anyswap.exchange/bridge](https://anyswap.exchange/bridge) (ETH <-> Polygon <-> BSC/xDai) <br/>
[https://app.0.exchange/#/home](https://app.0.exchange/#/home)(ETH <-> Polygon <-> Avalanche <-> BSC)

To add, we do not endorse any external services, please make sure to always do your own research

##  I made a transfer to the wrong address. How do I retrieve the funds?

Unfortunately, nothing can be done. Only the owner of the private keys to that particular address can move those assets.


## My transactions are not visible on the explorer. What should I do?

This is probably an indexing issue with Polygonscan. Please contact the [Support Team](https://support.polygon.technology/support/home) for more clarifications.
You may also try these block explorers

[https://polygon-explorer-mainnet.chainstacklabs.com](https://polygon-explorer-mainnet.chainstacklabs.com/) <br />
[https://explorer-mainnet.maticvigil.com](https://explorer-mainnet.maticvigil.com/) <br />
[https://explorer.matic.network](https://explorer.matic.network/) <br />
[https://backup-explorer.matic.network](https://backup-explorer.matic.network/)


## I initiated a deposit on Ethereum but it still shows as pending. What should I do?

Your supplied gas is probably too low. You should wait a while and redo the transaction if it doesn't get mined. In case of additional help, please reach out to the [support team](https://support.polygon.technology/support/home) with your wallet address, transaction hashes (if any) and relevant screenshots.


## I have a token withdrawal issue with OpenSea or any other application which uses polygon bridge.

If you have an issue with your withdrawal transaction being stuck, Polygon offers the withdraw bridge with https://polygon-withdraw.matic.network/ to help get you off the ground if you have your burn hash. With this tool, you're quickly onboarded and the issue will be resolved. Other questions concerning your transaction with OpenSea and other dApps will have to be handled by the application's team.


## Where can I get MATIC tokens directly?

So MATIC tokens can be bought from any centralized ([Binance](https://www.binance.com/en), [Coinbase](https://www.coinbase.com/), et.al) or Decentralised ([Uniswap](https://uniswap.org/), [QuickSwap](https://quickswap.exchange/#/swap)) exchange. You may also research and try some on-ramps like [Transak](https://transak.com/), [Ramp](https://ramp.network/).
The purpose for your purchase of MATIC coins should also determine where you'll buy them from and the network. It is advisable to have MATIC on Ethereum Main-net if your intention is either staking or delegation. if your intent is a transaction on the Polygon mainnet, you should hold and transact with MATIC on Polygon mainnet.


## I'm not getting a transaction hash and my deposits aren't going through? What is happening?

You probably have prior pending transactions, please cancel or speed them up first. Transactions in Ethereum can only happen one after the other.


## It shows Polygon does not charge any amount for a withdrawal but we are to pay during the transaction.

A withdrawal transaction with the Plasma bridge is split into 3 steps, one that happens on the Polygon Mainnet and two steps that are to be completed on the Ethereum Mainnet. On the PoS bridge, the withdrawal transaction happens over two steps: Token burning on the Polygon network and proof submission on the Ethereum network. In every case, token burning that happens on the Polygon Mainnet will be a very minimal cost. The remaining steps that happen on the Ethereum Mainnet will have to be paid in ETH depending on the current gas price which can be verified [here](https://ethgasstation.info/).


## How do I contact major applications deployed on the Polygon Network?

Curve  [https://discord.gg/JnUFrsDF](https://discord.gg/JnUFrsDF) <br />
SushiSwap  [https://discord.gg/ApbE4Eau](https://discord.gg/ApbE4Eau) <br />
CREAM  [https://discord.gg/js8JpmFB](https://discord.gg/js8JpmFB) <br />
AAVE  [https://discord.gg/YYtp7N5d](https://discord.gg/YYtp7N5d) <br />
FuruCombo  [https://discord.gg/wJJ7PXAd](https://discord.gg/wJJ7PXAd) <br />
QuickSwap  [http://t.me/QuickSwapDEX](http://t.me/QuickSwapDEX) <br />

Beefy Finance - [https://discord.gg/egkEEAkC](https://discord.gg/egkEEAkC)


## List of hardware wallets supported on Polygon Network.

So the Polygon Network will support all the hardware wallets compatible with Metamask. Please follow this [link](https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet) from Metamask for more information.


## I have been scammed. How will I retrieve my tokens?

Unfortunately, there is no recovery process for lost coins. We ask that before you make a transaction, you go on to check and double-check before starting and completing. Please note that the Polygon network and our official handles do not engage in any giveaway posts or token doubling and we will never approach you on behalf of the organisation. Please disregard all attempts as they're most likely scams. All our communications are through are official
handles.


## So Ethereum has Goerli as its test Network. Does Polygon Network have a Test Network.

So how the Ethereum Network has Goerli as its test network, the Polygon Mainnet has Mumbai. All transactions on this test network will be indexed on the Mumbai Explorer.


## How can  speed up my transaction on Metamask.

For speeding up transactions via Metamask, please go to this [link](https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction)


## What all information should I provide when I create a ticket?

- Wallet address
- Transaction hash
- Exact action intended and the result, very descriptive
- Screenshots or screen recordings of the action

## I was trying to make a deposit but the transaction stopped at the Approve step.

If the transaction is still at the **Approve** step, it is not yet complete. To fulfill it, you need to pay the gas fee and then it should go through.

## The gas fee for my withdrawal transaction is too high.

Gas fees on the Polygon network are always very low, but we can’t say the same for the Ethereum mainnet fees. 
If you have started the transaction, it is important not to cancel it. Instead, you can wait for the gas fees to lower or add more ETH to your account. 

## There are some unauthorized transactions in my wallet. Is my wallet hacked?

Unfortunately, the network cannot revert unwanted transactions. 
It is always important to be careful with your private keys and **never share them with anyone**.
If you still have some remaining funds, transfer them immediately to a new wallet.

## Polygon wallet shows an ‘Oops our Server Stumbled’ error message.

That message might mean that our server is down. However, if everything is working fine, we suggest that you use another browser.
If you are trying to make a withdrawal, you can also try the [Polygon Withdrawal tool](https://polygon-withdraw.matic.network/). There, you can connect your wallet, paste your transaction hash, and proceed with the transaction.

## Polygon wallet shows ‘User denied transaction signature’ error message.

This usually happens because the user canceled or refused to sign a transaction via MetaMask. When prompted by the MetaMask wallet, proceed with signing the transaction by clicking on Approve and not on Cancel.

## I did not receive the tokens I transferred to an exchange
You transferred coins to Binance (Coinbase, Kucoin or any other exchange) but did not receive them on the exchange side. If that was your case, it's important to know that we currently don’t provide a direct connection with exchanges. Most transactions would actually pass by Ethereum mainnet before reaching the exchange.
Please, contact the exchange’s support team.

## My MetaMask wallet is not connecting with Polygon wallet

There are many reasons why this might be happening. We suggest that you **try another time**, **use another browser** or, if any of these doesn’t help, **contact our support team**.

## How can I get MATIC tokens to pay for gas fees?

We provide a [Gas Swap](https://wallet.polygon.technology/gas-swap/) service that will help you with that. You choose an amount of MATIC you need to complete your transaction and you can swap it for other tokens such as Ether or USDT. It’s worth noting that this is a **gas-less transaction**.

## Token Swap is too slow.

If you are trying to swap tokens and it is taking too long, you could try the same transaction on a different browser. If that doesn’t work and you’re facing an error, please send a screenshot to our Support team.
