# OffscreenCanvas

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Example environment:** browser

## Summary

OffscreenCanvas allows canvas rendering off the main thread, often in a Worker. It is useful for charts, games, image processing, and avoiding main-thread paint pressure.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
const canvas = document.querySelector('canvas');
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker('/paint-worker.js', { type: 'module' });
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
