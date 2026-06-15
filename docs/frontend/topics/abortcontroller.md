# AbortController

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Role tags:** sr, frontend
**Example environment:** node

## Summary

AbortController coordinates cancellation for fetches, streams, event listeners, and async operations. It prevents stale updates, leaked work, unnecessary network traffic, and component-unmount races.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
/* global fetch */
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 1000);

try {
  const response = await fetch('https://example.com', { signal: controller.signal });
  console.log(response.status);
} finally {
  clearTimeout(timeout);
}
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
