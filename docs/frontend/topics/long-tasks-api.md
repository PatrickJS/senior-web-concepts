# Long tasks API

**Domain:** Frontend
**Group:** Performance and Web Vitals
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

The Long Tasks API exposes main-thread tasks that run long enough to block input and rendering. It is useful for finding expensive scripts, hydration bursts, synchronous parsing, and third-party code that creates responsiveness cliffs.

## Why it matters

Use this group to connect browser metrics to concrete causes: network, parsing, main-thread work, layout, paint, and input latency.

## JavaScript example

```js
new PerformanceObserver((list) => {
  for (const task of list.getEntries()) {
    console.warn('long task blocked the main thread', task.duration);
  }
}).observe({ type: 'longtask', buffered: true });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
