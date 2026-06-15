# Idempotent UI actions

**Domain:** Frontend
**Group:** Rendering correctness and state
**Role tags:** sr, frontend
**Example environment:** node

## Summary

An idempotent UI action produces the same durable result even if the user clicks twice, the request retries, or the component remounts. The usual tools are action keys, disabled states, dedupe maps, idempotency headers, and server-side replay protection.

## Why it matters

Use this group to make UI behavior repeatable under retries, concurrency, async races, and partial failure.

## JavaScript example

```js
const inFlight = new Map();

export const runOnce = async (key, action) => {
  if (inFlight.has(key)) return inFlight.get(key);

  const promise = action().finally(() => inFlight.delete(key));
  inFlight.set(key, promise);
  return promise;
};

await runOnce('save:profile:patrickjs', async () => ({ ok: true }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
