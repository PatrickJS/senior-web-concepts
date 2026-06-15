# Partitioning and sharding strategy

**Domain:** Data & Storage Engineering
**Group:** Storage topology and replication
**Role tags:** sr, backend, data, platform
**Example environment:** node

## Summary

Partitioning and sharding split data by tenant, key, hash, range, geography, or workload. A good strategy minimizes hot partitions, cross-shard joins, rebalancing pain, and tenant blast radius.

## Why it matters

Use this group to reason about partitioning, replicas, backups, search indexes, time-series storage, and tenant boundaries.

## JavaScript example

```js
const shardForTenant = (tenantId, shardCount) => {
  const hash = [...tenantId].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return hash % shardCount;
};

console.log(shardForTenant('tenant-acme', 16));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
