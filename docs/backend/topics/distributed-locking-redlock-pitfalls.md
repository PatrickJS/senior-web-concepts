# Distributed locking (Redlock pitfalls)

**Domain:** Backend
**Group:** Distributed systems and consistency
**Example environment:** node

## Summary

Distributed locks are hard because clocks, partitions, pauses, and delayed clients can violate mutual exclusion. Redlock-style leases need careful TTL assumptions and often require fencing tokens to protect downstream resources.

## Why it matters

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

## JavaScript example

```js
const acquireWithFencing = async (locks, resource) => {
  const token = await locks.nextFencingToken(resource);
  const quorum = await locks.tryAcquireQuorum(resource, token, { ttlMs: 3000 });
  if (!quorum) throw new Error('lock quorum failed');
  return { resource, token };
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
