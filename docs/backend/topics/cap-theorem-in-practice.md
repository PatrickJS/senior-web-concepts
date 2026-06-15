# CAP theorem in practice

**Domain:** Backend
**Group:** Distributed systems and consistency
**Role tags:** sr, backend
**Example environment:** node

## Summary

CAP says that during a network partition a distributed system must choose between consistency and availability. In practice, systems make per-operation trade-offs with leader routing, quorum reads/writes, retries, and degraded modes.

## Why it matters

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

## JavaScript example

```js
const handlePartition = ({ requireFreshReads }) => {
  if (requireFreshReads) return 'CP: reject or route to leader during partition';
  return 'AP: accept writes and reconcile later';
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
