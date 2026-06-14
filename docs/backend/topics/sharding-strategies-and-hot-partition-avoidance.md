# Sharding strategies & hot partition avoidance

**Domain:** Backend
**Group:** Databases, storage, and transactions
**Example environment:** node

## Summary

Sharding splits data across partitions by key, range, hash, tenant, or geography. Hot partitions happen when too much traffic targets one shard and are mitigated with better keys, salting, splitting, and load-aware routing.

## Why it matters

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

## JavaScript example

```js
import { createHash } from 'node:crypto';

const shardFor = (key, shardCount) => {
  const hash = createHash('sha256').update(key).digest();
  return hash.readUInt32BE(0) % shardCount;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
