# Distributed cache invalidation (cache-aside vs write-through)

**Domain:** Backend
**Group:** Caching, hashing, and approximate data structures
**Role tags:** sr, backend
**Example environment:** node

## Summary

Cache-aside loads on miss and invalidates after writes; write-through writes cache and database together. Distributed invalidation must handle races, partial failures, versioning, and cross-node propagation delay.

## Why it matters

Use this group to design fast paths that remain correct enough under invalidation, shard movement, cardinality estimation, and hot-key pressure.

## JavaScript example

```js
const getCacheAside = async (key, cache, db) => {
  const cached = await cache.get(key);
  if (cached) return cached;
  const value = await db.get(key);
  await cache.set(key, value);
  return value;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
