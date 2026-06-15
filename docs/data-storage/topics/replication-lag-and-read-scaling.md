# Replication lag and read scaling

**Domain:** Data & Storage Engineering
**Group:** Storage topology and replication
**Role tags:** sr, backend, data, platform
**Example environment:** node

## Summary

Read replicas increase read capacity but introduce freshness lag and failover complexity. Designs must define which reads can be stale, how lag is measured, and when to route to the primary.

## Why it matters

Use this group to reason about partitioning, replicas, backups, search indexes, time-series storage, and tenant boundaries.

## JavaScript example

```js
const chooseReadTarget = ({ requiresFresh, replicaLagMs }) => {
  if (requiresFresh || replicaLagMs > 500) return 'primary';
  return 'replica';
};

console.log(chooseReadTarget({ requiresFresh: false, replicaLagMs: 120 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
