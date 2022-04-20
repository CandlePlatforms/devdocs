---
id: staking-faq
title: Staking FAQ
sidebar_label: Staking FAQ
description: Build your next blockchain app on Polygon.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

### What is the staking dashboard URL?

The staking dashboard URL is: https://wallet.polygon.technology/staking

### What is the minimum stake amount?

There is no minimum stake amount to delegate.

### How to stake tokens on Polygon?

For Staking you would need to have funds on the Ethereum Mainnet. Log into Metamask on the Ethereum network using the Staking Dashboard. https://wallet.polygon.technology/staking/

Please watch this video for a graphical illustration of how this works:

<video autoplay width="70%" height="70%" controls="true" >
  <source type="video/mp4" src="/img/staking_faq/staking.mov"></source>
  <p>Your browser does not support the video element.</p>
</video>

### What’s the incentive to be a Polygon staker?

Polygon is allocating 12% of its total supply of 10 billion tokens to fund the staking rewards. These 1.2 billion tokens will be the staking incentive for the first five years. This is to ensure that the network is seeded well enough until transaction fees gain traction. These rewards are primarily meant to jump-start the network, while the protocol in the long run should be able to sustain itself on the basis of transaction fees.

**Validator Rewards = Staking Rewards + Transaction Fees from Polygon chain**

First year will see the maximum amount of tokens allocated as staking rewards. This is allocated in a way to ensure gradual decoupling of staking rewards from being the dominant component of the validator rewards.

See also [Rewards](/docs/validate/rewards).

### Can I participate in the staking process, even if I do not want to run a node?

MATIC token holders who do not wish to run their own node can delegate their tokens to a validator. Delegation increases the power of the validator. More the power, more probability of the validator to become the block producer and checkpoint proposer and more weight in the consensus.

There is no minimum amount requirement for delegation. Any amount, even 1 MATIC, will be accepted in the system. However, it is up to validators to set a minimum limit or not while accepting delegations. Validators might charge a commission in exchange for their node running services. Other than the commission charged, one needs to evaluate the track record of the validator for example, average uptime or if the node was ever compromised.

See also [Delegate](/docs/validate/delegate).

### I've staked my Matic tokens. How can I stake more?
You can navigate to "Your Delegations", choose one of the stakes and click on "Stake More".

Please watch this video for a graphical illustration of how this works:

<video loop autoplay width="70%" height="70%" controls="true" >
  <source type="video/mp4" src="/img/staking_faq/stakingMore.mov"></source>
  <p>Your browser does not support the video element.</p>
</video>

### Do I need ETH to pay for gas fees?

Yes. You should provision for ~0.05-0.1 ETH to be safe.

### Do I need to deposit MATIC tokens to the Polygon mainnet network for staking?

No. All your funds need to be on the Ethereum mainnet.

### When I try to do the transaction, my **Confirm** button is disabled, why so?

Please check if you have enough ETH for the gas fees.

### Why am I not able to stake?

Check if you have funds on the Main Ethereum Network, to delegate your tokens. All staking happens on the Ethereum Network only.

### I am unable to view the Staking tab. How do I access Staking?

Once logged into https://wallet.polygon.technology/ you need to  click on apps > staking. Users will be landed on the staking overview page. Reference for guide:

<img src={useBaseUrl("img/staking_faq/stakingApp.PNG")} height="500px"/>

### How do I know which Validator to select for better rewards?

It depends on your understanding and research on which validator you would want to stake on. You can find the list of validators here : https://wallet.polygon.technology/staking/validators

### How are staking rewards allocated to stakers?

Tokens to be given out as staking rewards for the first five years of the network life are fixed. This reward is divided per [checkpoint](/docs/validate/glossary#checkpoint-transaction) and the amount to be shared with all stakers is absolute. The reward rate will be higher during lower bonding rates and vice-versa otherwise.

The staking reward gets distributed proportionally to all stakers; proposer and signers, with the exception of proposer getting a bonus.

### For how long will my funds be locked?

If one wishes to opt out of the system, the staked tokens undergo an unbonding period during which they are liable to being slashed for any misbehaviour committed by the validator before the unbonding period started.

Delegated tokens enter unbonding period immediately upon unbond request. However, validators will need to serve a certain notice period in active state, participating in consensus and proposing checkpoints before entering into unbonding period.

Stakers can withdraw their tokens after the unbonding period ends. The duration of the unbonding period is of 82 checkpoints.

See:

* [Delegate](/docs/validate/delegate)
* [Validator Staking Operations](/docs/validate/mainnet/validator-staking-operations)

### How to unbond?

To Unbond from a Validator, navigate to MyAccount, where you find "Your Delegations".
There you will see an Unbond button for each of the validators. Click on the Unbond button for whichever validator that you want to unbond from.

`Step 1` <br/>
<img src={useBaseUrl("img/staking_faq/step1unbond.png")} height="400px"/><br/>

`Step 2` <br/>
<img src={useBaseUrl("img/staking_faq/step2unbond.png")} height="500px"/><br/>

Please watch the video for a graphical illustration of how this works:

<video width="70%" height="70%" controls="true" >
  <source type="video/mp4" src="/img/staking_faq/unbonding.mov"></source>
  <p>Your browser does not support the video element.</p>
</video>

### What is the unbonding period?

The unbonding period on Polygon is 80 checkpoints. This is approximately ~3-4 days. Every checkpoint takes approximately 3 hours. However, some checkpoints could be delayed due to congestion on Ethereum.
This period applies to the originally delegated amount and re-delegated amounts. It does not apply to any rewards that were not re-delegated.

### How do I know when the unbonding period is over?

You can check status of your current unbonding period on the [History](https://wallet.polygon.technology/staking/history) tab.

Every checkpoint takes approximately 30 minutes. However, some checkpoints could be delayed upto ~1 hour due to congestion on the Ethereum mainnet.

### Where can I check my rewards?

Click [My Account](https://wallet.polygon.technology/staking/my-account) on the dashboard.

Check the **Reward** field under your delegated validator.

### How many rewards will I get if I delegate?

Please use the [staking rewards calculator](https://wallet.polygon.technology/staking/rewards-calculator) to determine your estimates.

### What does Restake Reward mean?

Restaking your rewards means increasing your stake by restaking the rewards you have accumulated.

### How to restake rewards?

Go to “My Account” to check "Your Delegations".
Clicking on "Restake Reward" will ask you for confirmation from your Metamask account. Once you confirm the transaction, only then the restake transaction would be complete.

`Step 1` <br/>
<img src={useBaseUrl("img/staking_faq/RestakeRewards1.png")} height="300px"/><br/>

`Step 2` <br/>
<img src={useBaseUrl("img/staking_faq/restakeRewards2.png")} height="415px"/><br/>

Please watch the video for a graphical illustration of how this works:

<video width="70%" height="70%" controls="true" >
  <source type="video/mp4" src="/img/staking_faq/restakingRewards.mov"></source>
  <p>Your browser does not support the video element.</p>
</video>

### I want to Restake Rewards but I am unable to.

You would need to have a minimum of **2 Matic** to restake rewards.

### How to withdraw rewards?

You can claim your rewards by clicking on the “My Account”, all the delegators for a validator are displayed. Click on the “Withdraw Reward” button and the rewards will be transferred to your delegated account on Metamask.

`Step 1` <br/>
<img src={useBaseUrl("img/staking_faq/withdraw1.png")} height="300px"/><br/>

`Step 2` <br/>
<img src={useBaseUrl("img/staking_faq/withdraw2.png")} height="380px"/><br/>

Please watch the video for a graphical illustration of how this works:

<video width="70%" height="70%" controls="true" >
  <source type="video/mp4" src="/img/staking_faq/withdraw.mov"></source>
  <p>Your browser does not support the video element.</p>
</video>

### I want to Withdraw Rewards but I am unable to.

You would need to have a minimum of **2 Matic** to withdraw rewards.

### How to claim stake?

Once the **unbonding period is complete**, the Claim Stake button will be enabled and you can then claim your staked tokens. The tokens will be transferred to your account.

`Step 1` <br/>
<img src={useBaseUrl("img/staking_faq/claimStake1.png")} height="400px"/><br/>

`Step 2` <br/>
<img src={useBaseUrl("img/staking_faq/claimStake2.png")} height="300px"/><br/>

`Step 3` <br/>
<img src={useBaseUrl("img/staking_faq/claimStake3.png")} height="400px"/><br/>

Please watch the video for a graphical illustration of how this works:

<video width="70%" height="70%" controls="true" >
  <source type="video/mp4" src="/img/staking_faq/claimingStake.mov"></source>
  <p>Your browser does not support the video element.</p>
</video>


### Which wallets are currently supported?

Currently, the MetaMask extension on the desktop browser and Coinbase Wallet are supported. Additionally, you can use WalletConnect and WalletLink from supported mobile wallets to interact with the staking dashboard on desktop/laptop. We will be gradually adding support for other wallets soon.

### Are hardware wallets supported?

Yes, hardware wallets are supported. You can use the "Connect Hardware Wallet" option on Metamask and connect your Hardware wallet and then continue the delegation process.

### How do I send funds from Binance or other exchanges to Polygon wallet?

Technically, the Polygon web wallet/staking interface is just a web application. Currently, it supports the following wallets — MetaMask. WalletConnect and WalletLink.

So first you must withdraw your funds from Binance or any other exchange to your Ethereum address on MetaMask. If you don't know how to use MetaMask, Google it a bit. There are plenty of videos and blogs to get started with it.

### Why can’t I stake directly from Binance?

Staking through Binance is not yet supported. There will be an announcement if and when Binance starts supporting it.

### Do I need to deposit Matic tokens to the Polygon Mainnet network for staking?

No. All your funds need to be on the Main Ethereum Network.

### When do rewards get distributed?

The rewards are distributed whenever a [checkpoint](/docs/validate/glossary#checkpoint-transaction) is submitted.

Approximately 20188 Matic tokens are distributed proportionately on each successful checkpoint submission to each delegator based on their stake relative to the overall staking pool of all validators and delegators. Also, the percentage for the reward distributed to each delegator will vary with each checkpoint depending on the relative stake of the delegator, validator and the overall stake.

(Note that there is a 10% proposer bonus that accrues to the validator who submits the checkpoint, but over time, the effect of the extra bonus is nullified over multiple checkpoints by different validators.)

The checkpoint submission is done by one of the validators approximately every 34 minutes. This time may vary based on validator consensus on the Polygon Heimdall layer. This may also vary based on the Ethereum Network. Higher congestion in the network may result in delayed checkpoints.

You can track checkpoints on the staking contract here: [on Etherscan](https://etherscan.io/address/0x86e4dc95c7fbdbf52e33d563bbdb00823894c287).

### Why do rewards keep getting decreased at every checkpoint?

Rewards earned will depend on the actual total locked supply in the network at each checkpoint. This is expected to vary significantly as more MATIC tokens get locked in the staking contracts.
Rewards will be higher, to begin with, and will keep decreasing as the locked supply percentage goes up. This change in locked supply is captured at every checkpoint, and rewards are calculated based on this.

### Will I keep receiving rewards after I unbond?

No. Once you unbond you stop receiving rewards.

### Can I move the stake to another validator?
 Yes, you just have to reach "Your Delegations", click on "Move Stake", and then choose your new validator.

Please watch the video for a graphical illustration of how this works:

<video width="70%" height="70%" controls="true" >
  <source type="video/mp4" src="/img/staking_faq/movingStake.mov"></source>
  <p>Your browser does not support the video element.</p>
</video>

### Which browsers are compatible with the Staking Dashboard?

Chrome, Firefox, and Brave.

### Nothing happens when I try to log in or my Metamask is stuck at confirming after logging in. What do I do?

Check for the following:
- If you’re using Brave, please turn off the option for “Use Crypto Wallets” in the settings panel.
- Check if you are logged into Metamask.
- Check if you are logged into Metamask with Trezor/Ledger. You need to additionally turn on permission to call contracts on your Ledger device, if not enabled already.
- Check your system timestamp. If the system time is not correct, you will need to correct it.

### Where do the staked tokens reside?

Staked tokens are locked in a contract deployed on the Ethereum mainnet. Validators do not hold the custody of the delegated tokens. However, in the event of validator getting slashed delegated tokens also get slashed.

### Why does my transaction take so long?

All staking transactions of Polygon happen on the Ethereum mainnet for security reasons.

The time taken to complete a transaction depends on:

* The gas fees that you have allowed.
* The network congestion of the Ethereum mainnet.

 You can always use the **Speed Up** option to increase the gas fees so that your transaction can be completed soon.

### I have completed my delegation, where can I check details?

Once you have completed your delegation, wait for 12 block confirmations on the Ethereum mainnet (~3-5 minutes). After 12 block confirmations, click [My Account](https://wallet.polygon.technology/staking/my-account) on the dashboard.

### How many transactions does the delegation require?

Delegation requires 2 transactions one after the other — one Approve and another Deposit.

### What happens if I have earned rewards while delegating and I add additional funds to the same validator node?

If you have not re-delegated your rewards before delegating additional funds to the same validator node, your rewards will be withdrawn automatically.

In case you do not want that to happen, re-delegate your rewards before delegating additional funds.

### I have delegated my tokens via MetaMask on the staking dashboard. Do I need to keep my system or device on?

No. Once your delegation transactions are confirmed, and you can see your tokens reflected in the **Your Stake** and **Reward** fields in [My Account](https://wallet.polygon.technology/staking/my-account), then you are done. There is no need to keep your system or device on.

### How do I switch my delegation from Foundation nodes to external nodes?

You can switch your Delegation using the **Move Stake** option on the [staking dashboard](https://wallet.polygon.technology/staking/my-account). This will switch your delegation from the Foundation node to any other external node of your choice.

### Will there be any ubonding period when I switch delegation from Foundation nodes to external nodes?

There will be no unbonding period when you switch delegation from Foundation nodes to external nodes. It will be a direct switch without any delays. However, if you are unbonding from a Foundation node or an external node, there will be an unbonding period for that.

### Are they any specifics to choose an external node during switch delegation?

No. You can choose any node of your choice.

### What happens to my rewards that are accumulated if I switch delegation from Foundation to external node?

If you haven't already withdrawn your rewards before switching delegation, then upon successful switch of your delegation from Foundation to external node, the rewards that were accumulated until then will be transferred back to your account.

### Will delegation on the external nodes work the same as Foundation nodes?

Yes, it will work the same as Foundation nodes.

### Will I still get rewards after delegating to an external node?

Yes, rewards will be distributed the same as earlier with the Foundation nodes. Every successful submission of a [checkpoint]((/docs/validate/glossary#checkpoint-transaction)) will yield rewards. Rewards will be distributed and calculated at every checkpoint relative to the stake ratio, as currently implemented.

### Will there be any unbonding period if I unbond from an external node?

Yes, the unbonding period will stay the same as currently implemented. 80 checkpoints.

### Will there be any locking period after I switch my delegation from Foundation to external node?

No. There won't be any locking period after you switch your delegation.

### Can I partially switch my delegation from Foundation to external nodes?

Yes, you will have the option to partially move your stake from Foundation node to an external node. The remaining partial stake will remain on the Foundation node. You can then move that to another node of your choice or the same node.

### Can I switch delegation from an external node to another external node?

The **Move Stake** option is available to switch the delegation between any nodes. The only exception is moving stake from one Foundation node to another Foundation node, which is not allowed.

### How many transactions do I need to pay for gas when I Move Stake?

The Move Stake is a single transaction only. All transactions would be on the Ethereum mainnet, so you would need to spend some ETH while doing the Move Stake transaction.

### If the external validator is missing signing checkpoints, does that mean I lose on rewards too?

Yes. Rewards are distributed every [checkpoint](/docs/validate/glossary#checkpoint-transaction) and each validator is supposed to sign the checkpoint transaction. However, if any validator misses signing the checkpoint transaction for that checkpoint, rewards are not issued for that validator. Which in return means that you as delegator will not earn any rewards for that particular checkpoint.
