# TCP congestion control algorithms

**Domain:** Backend
**Group:** Transport and protocol internals
**Example environment:** node

## Summary

TCP congestion control adjusts send rate based on acknowledgements, loss, and inferred network capacity. A clear answer mentions slow start, congestion avoidance, multiplicative decrease, RTT, packet loss, and fairness.

## Why it matters

Use this group to reason about how bytes move over the network, what happens under packet loss, and where protocol-level latency or head-of-line blocking comes from.

## JavaScript example

```js
let congestionWindow = 1;

const onAck = () => {
  congestionWindow += 1 / congestionWindow;
};

const onLoss = () => {
  congestionWindow = Math.max(1, Math.floor(congestionWindow / 2));
};

onAck();
onLoss();
console.log({ congestionWindow });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
