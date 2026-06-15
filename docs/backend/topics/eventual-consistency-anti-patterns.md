# Eventual consistency anti-patterns

**Domain:** Backend
**Group:** Distributed systems and consistency
**Role tags:** sr, backend
**Example environment:** node

## Summary

Eventual consistency becomes an anti-pattern when product flows require immediate guarantees but the system hides lag. Examples include stale permission reads, double spends, missing read-your-writes, and silent conflict overwrites.

## Why it matters

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

## JavaScript example

```js
const readProfile = async ({ primary, replica, userId, minVersion }) => {
  const row = await replica.get(userId);
  if (row.version >= minVersion) return row;
  return primary.get(userId);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
