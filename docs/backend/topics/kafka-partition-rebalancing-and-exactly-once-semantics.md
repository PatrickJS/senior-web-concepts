# Kafka partition rebalancing & exactly-once semantics

**Domain:** Backend
**Group:** Messaging, streams, and event-driven systems
**Role tags:** sr, backend
**Example environment:** node

## Summary

Kafka rebalancing moves partitions across consumers when group membership changes, causing pauses and offset coordination. Exactly-once semantics rely on idempotent producers, transactions, committed offsets, and careful sink behavior.

## Why it matters

Use this group to design event pipelines that survive retries, reordering, backpressure, projection lag, and consumer failures.

## JavaScript example

```js
const assignPartitions = (members, partitions) => partitions.map((partition, index) => ({
  partition,
  member: members[index % members.length]
}));

console.log(assignPartitions(['a', 'b'], [0, 1, 2, 3]));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
