# Eventual consistency in cache

**Domain:** Backend
**Group:** Caching, hashing, and approximate data structures
**Example environment:** node

## Summary

Eventually consistent caches can serve stale data after writes, invalidations, or replication delays. Safe design scopes staleness, uses versions, routes critical reads to truth, and avoids caching irreversible authorization decisions incorrectly.

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
