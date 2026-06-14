# Idempotency keys in API design

**Domain:** Backend
**Group:** Distributed systems and consistency
**Example environment:** node

## Summary

Idempotency keys let clients safely retry state-changing requests without creating duplicate side effects. The server stores the key, request fingerprint, status, and response for a defined retention window.

## Why it matters

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

## JavaScript example

```js
const responses = new Map();

export const handlePost = async (request, create) => {
  const key = request.headers.get('idempotency-key');
  if (responses.has(key)) return responses.get(key);
  const response = await create();
  responses.set(key, response);
  return response;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
