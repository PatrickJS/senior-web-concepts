# Cache invalidation strategies

**Domain:** Frontend
**Group:** Security, networking, and caching
**Example environment:** node

## Summary

Cache invalidation is the policy for removing or superseding cached data when truth changes. Techniques include TTLs, versioned keys, surrogate keys, write-through updates, event-driven purges, and scoped cache busting.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
const keyForUser = (userId, version) => `user:${userId}:v${version}`;

const writeUser = async (user, db, cache) => {
  const saved = await db.users.save({ ...user, cacheVersion: user.cacheVersion + 1 });
  cache.delete(keyForUser(saved.id, user.cacheVersion));
  cache.set(keyForUser(saved.id, saved.cacheVersion), saved);
  return saved;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
