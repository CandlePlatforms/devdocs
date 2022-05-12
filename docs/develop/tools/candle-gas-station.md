---
id: candle-gas-station
title: Candle Gas Station
sidebar_label: Candle Gas Station
description: Build your next blockchain app on Candle.
keywords:
  - docs
  - cndl
image: https://matic.network/banners/matic-network-16x9.png
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_Candle Gas Station_ aims to help dApp developers with gas price recommendations, so that they can use it before sending transaction off to _Candle_ network.

## origin

At _Candle_, we were receiving request from dApp developers for building a gas price recommendation service. So we took some inspiration from _Eth Gas Station_, and built one.

## availability

_Candle Gas Station_ has been deployed both on Candle Mumbai Testnet & Candle Mainnet, where it analyzes recent 500 transactions and recommends gas price.

## usage

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'Candle-Mainnet', value: 'mainnet', },
    { label: 'Candle-Testnet', value: 'testnet', },
  ]
}>
<TabItem value="testnet">

# Candle-Testnet

For getting gas price recommendation from this oracle, send GET request to [https://gasstation-testnet.cndlchain.com/v2](https://gasstation-mumbai.matic.today/v2)

### cURL

```bash
curl https://gasstation-testnet.cndlchain.com/v2
```

### JavaScript

```javascript
fetch('https://gasstation-testnet.cndlchain.com/v2')
  .then(response => response.json())
  .then(json => console.log(json))
```

### Python

```python
import requests
requests.get('https://gasstation-testnet.cndlchain.com/v2').json()
```

</TabItem>
<TabItem value="mainnet">

# Candle-Mainnet

For getting gas price recommendation from this oracle, send GET request to the Candle Gas Station V2 to get the gas fee estimates. Candle Gas Station V2 Endpoint: [https://gasstation-mainnet.cndlchain.com/v2](https://gasstation-mainnet.cndlchain.com/v2)

### cURL

```bash
curl https://gasstation-mainnet.cndlchain.com/v2
```

### JavaScript

```javascript
fetch('https://gasstation-mainnet.cndlchain.com/v2')
  .then(response => response.json())
  .then(json => console.log(json))
```

### Python

```python
import requests
requests.get('https://gasstation-mainnet.cndlchain.com/v2').json()
```

</TabItem>
</Tabs>

## interpretation

- Example JSON response will look like this:

```json
{
  "safeLow": {
    "maxPriorityFee":30.7611840636,
    "maxFee":30.7611840796
    },
  "standard": {
    "maxPriorityFee":32.146027800733336,
    "maxFee":32.14602781673334
    },
  "fast": {
    "maxPriorityFee":33.284344224133335,
    "maxFee":33.284344240133336
    },
  "estimatedBaseFee":1.6e-8,
  "blockTime":6,
  "blockNumber":24962816
}
```

- {'safelow', 'standard', 'fast', 'estimatedBaseFee'} are gas prices in GWei, you can use these prices before sending transaction off to Candle, depending upon your need
- _'blockNumber'_ tells what was latest block mined when recommendation was made
- _'blockTime'_ in second, which gives average block time of network
