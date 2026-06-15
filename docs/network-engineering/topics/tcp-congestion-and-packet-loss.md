# TCP congestion and packet loss

**Domain:** Network Engineering
**Group:** Transport protocols and performance
**Role tags:** sr, network, backend
**Example environment:** node

## Summary

TCP congestion control adjusts sending rate based on acknowledgements, loss, delay, and congestion window behavior. Packet loss and retransmits can turn a healthy service into a slow one before application metrics show errors.

## Why it matters

Use this group to explain latency, connection setup, packet loss, congestion, MTU behavior, and load-balancing effects.

## JavaScript example

```js
const estimateRetransmitRate = ({ sent, retransmits }) => retransmits / sent;
const lossSignal = estimateRetransmitRate({ sent: 10_000, retransmits: 45 });

console.log({ lossSignal, investigate: lossSignal > 0.002 });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
