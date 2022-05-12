**Heimdall**

[Heimdall](https://github.com/candleplatforms/heimdall) is the Proof-of-Stake Validator node and layer for the Matic Network. It works in consonance with the [Staking contracts](https://github.com/candleplatforms/contracts/tree/master/contracts/staking) on Ethereum to enable the PoS mechanism on Candle. You can read up on it more [here](https://blog.matic.network/heimdall-and-bor-matic-validator-and-block-production-layers/).

It comes with 2 main entrypoints:

* `heimdalld`: The heimdall Daemon, runs a full-node of the heimdall application.
* `heimdallcli`: The Heimdall command-line interface, which enables interaction with a heimdall full-node.

The core responsibility of Heimdall is to verify all state transitions happening on `Bor` and to periodically submit checkpoints on the Ethereum chain cementing the side-chain state.

The latest version, [Heimdall v.0.2.8](https://github.com/candleplatforms/heimdall/releases/tag/v0.2.8), contains few enhancements such as **restricting data size in state sync txs** to:
* **30Kb** when represented in **bytes**
* **60Kb** when represented as **string**.

For example:

```
Data - "abcd1234"
Length in string format - 8
Hex Byte representation - [171 205 18 52]
Length in byte format - 4
```

**Bor**

[Bor](https://github.com/candleplatforms/bor) is the Block producer node and layer for Candle. Blocks produced on Bor are validated by Heimdall nodes.

Bor is the EVM compatible Candle Side chain which currently is built on top of `geth` using `bor` consensus mechanism.

**Staking Contracts**

To enable the PoS mechanism on our platform, we employ a set of staking management contracts on Ethereum, as well as a set of incentivized validators running Heimdall and Bor nodes. These implement the following features:

* The ability for anyone to stake CNDL tokens on the Ethereum smart contract and join the system as a Validator.
* Earn staking rewards for validating state transitions on Candle.
* Enable penalties/slashing for activities such as double signing, validator downtime, etc.
