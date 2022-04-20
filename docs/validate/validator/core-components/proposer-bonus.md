---
id: proposer-bonus
title: Proposer Bonus
description: Learn about the additional incentive of being a validator on the Polygon Network.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

In Polygon, there is an additional element of committing periodic [checkpoints](/docs/validate/glossary#checkpoint-transaction) to the Ethereum mainnet. This is a major part of the validator responsibilities and they are incentivized to perform this activity. This constitutes a cost to the validator which is unique to a Layer 2 solution such as Polygon. We strive to accommodate this cost in the validator staking reward payout mechanism as a bonus to be paid to the [proposer](/docs/validate/glossary#proposer), who is responsible for committing the checkpoint. Rewards minus the bonus is to be shared among all stakers; proposer and [signers](/docs/validate/glossary#signer-address), proportionally.

To avail the bonus completely, the proposer must include all signatures in the checkpoint. Because the protocol desires ⅔ +1 weight of the total stake, the checkpoint is accepted even with 80% votes. However, in this case, the proposer gets only 80% of the calculated bonus.
