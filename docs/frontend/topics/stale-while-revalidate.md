# Stale-while-revalidate

**Domain:** Frontend
**Group:** Security, networking, and caching
**Example environment:** node

## Summary

Stale-while-revalidate serves a cached stale response immediately while refreshing in the background. It improves perceived latency but requires tolerance for temporary staleness and careful invalidation for user-specific data.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
const cache = new Map();

export const getStaleWhileRevalidate = async (key, load) => {
  const entry = cache.get(key);
  if (entry) {
    load().then((value) => cache.set(key, { value, time: Date.now() }));
    return entry.value;
  }

  const value = await load();
  cache.set(key, { value, time: Date.now() });
  return value;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
