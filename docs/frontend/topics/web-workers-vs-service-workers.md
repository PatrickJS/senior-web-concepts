# Web Workers vs Service Workers

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Example environment:** browser

## Summary

Web Workers run background JavaScript for a page; Service Workers act as network/proxy lifecycle scripts for an origin scope. Workers help CPU isolation, while Service Workers intercept requests, cache, and enable offline behavior.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
const worker = new Worker('/cpu-worker.js', { type: 'module' });
worker.postMessage({ type: 'hash', payload: 'large input' });

await navigator.serviceWorker.register('/service-worker.js', { type: 'module' });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
