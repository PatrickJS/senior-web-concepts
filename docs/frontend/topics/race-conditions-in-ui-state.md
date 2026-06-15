# Race conditions in UI state

**Domain:** Frontend
**Group:** Rendering correctness and state
**Role tags:** sr, frontend
**Example environment:** node

## Summary

UI state races happen when async results arrive out of order or after the state they depended on has changed. Common fixes are request IDs, AbortController, version checks, state machines, and idempotent reducers.

## Why it matters

Use this group to make UI behavior repeatable under retries, concurrency, async races, and partial failure.

## JavaScript example

```js
let latestRequestId = 0;

const search = async (query, fetchResults) => {
  const requestId = ++latestRequestId;
  const results = await fetchResults(query);
  if (requestId !== latestRequestId) return;
  render(results);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
