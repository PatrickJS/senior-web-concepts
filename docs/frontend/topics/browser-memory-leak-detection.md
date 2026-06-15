# Browser memory leak detection

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Browser memory leak detection is the process of proving memory grows because objects remain reachable after expected cleanup. Good explanations include heap snapshots, allocation timelines, detached DOM node views, listener cleanup, and reproducible interaction loops.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
const controller = new AbortController();

window.addEventListener('resize', () => {
  console.log(window.innerWidth);
}, { signal: controller.signal });

export const dispose = () => {
  controller.abort();
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
