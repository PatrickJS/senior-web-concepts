# GraphQL resolver batching & N+1 problem

**Domain:** Backend
**Group:** API design, auth, and edge controls
**Role tags:** sr, backend
**Example environment:** node

## Summary

The GraphQL N+1 problem happens when nested resolvers issue one backend query per parent object. Batching and caching loaders group keys per tick or request to reduce queries while preserving resolver composition.

## Why it matters

Use this group to make APIs safe, compatible, observable, throttled, cacheable, and resilient under N+1, auth, schema, or gateway pressure.

## JavaScript example

```js
const createBatcher = (loadMany) => {
  let queue = [];
  return (id) => new Promise((resolve) => {
    queue.push({ id, resolve });
    queueMicrotask(async () => {
      const batch = queue;
      queue = [];
      const rows = await loadMany(batch.map((item) => item.id));
      batch.forEach((item) => item.resolve(rows.get(item.id)));
    });
  });
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
