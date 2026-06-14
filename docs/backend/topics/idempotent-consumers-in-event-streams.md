# Idempotent consumers in event streams

**Domain:** Backend
**Group:** Messaging, streams, and event-driven systems
**Example environment:** node

## Summary

Idempotent consumers handle duplicate events safely by recording processed IDs, using natural keys, checking versions, or making writes commutative. This is required because retries and rebalances can redeliver messages.

## Why it matters

Use this group to design event pipelines that survive retries, reordering, backpressure, projection lag, and consumer failures.

## JavaScript example

```js
const seen = new Set();

export const consume = async (message, handler) => {
  if (seen.has(message.id)) return 'duplicate';
  await handler(message);
  seen.add(message.id);
  return 'processed';
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
