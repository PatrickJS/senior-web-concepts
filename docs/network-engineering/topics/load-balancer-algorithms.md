# Load balancer algorithms

**Domain:** Network Engineering
**Group:** Transport protocols and performance
**Role tags:** mid, network, platform
**Example environment:** node

## Summary

Load balancer algorithms choose targets with policies such as round robin, least connections, weighted routing, hashing, locality, or latency. The choice affects fairness, cache locality, stickiness, failure recovery, and hot spots.

## Why it matters

Use this group to explain latency, connection setup, packet loss, congestion, MTU behavior, and load-balancing effects.

## JavaScript example

```js
const leastConnections = (targets) => {
  return targets.toSorted((a, b) => a.connections - b.connections)[0];
};

console.log(leastConnections([{ id: 'a', connections: 12 }, { id: 'b', connections: 3 }]));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
