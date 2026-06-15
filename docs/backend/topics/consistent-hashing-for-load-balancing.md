# Consistent hashing for load balancing

**Domain:** Backend
**Group:** Caching, hashing, and approximate data structures
**Role tags:** sr, backend
**Example environment:** node

## Summary

Consistent hashing maps keys to nodes so adding or removing nodes moves only a fraction of keys. It is useful for caches, shards, and load balancing with reduced remapping churn.

## Why it matters

Use this group to design fast paths that remain correct enough under invalidation, shard movement, cardinality estimation, and hot-key pressure.

## JavaScript example

```js
import { createHash } from 'node:crypto';

const hashInt = (value) => createHash('sha256').update(value).digest().readUInt32BE(0);
const ring = ['api-a', 'api-b', 'api-c'].map((node) => ({ node, point: hashInt(node) })).sort((a, b) => a.point - b.point);

export const pickNode = (key) => ring.find((entry) => entry.point >= hashInt(key))?.node ?? ring[0].node;
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
