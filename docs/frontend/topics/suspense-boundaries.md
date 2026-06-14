# Suspense boundaries

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Example environment:** node

## Summary

Suspense boundaries isolate async waiting so one slow dependency does not block the entire UI. A strong explanation mentions fallback UI, reveal order, thrown promises/resource reads, streaming SSR, and avoiding waterfalls.

## Why it matters

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

## JavaScript example

```js
const createResource = (promise) => {
  let status = 'pending';
  let result;
  const suspender = promise.then(
    (value) => { status = 'success'; result = value; },
    (error) => { status = 'error'; result = error; }
  );

  return () => {
    if (status === 'pending') throw suspender;
    if (status === 'error') throw result;
    return result;
  };
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
