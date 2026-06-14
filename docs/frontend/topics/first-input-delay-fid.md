# First Input Delay (FID)

**Domain:** Frontend
**Group:** Performance and Web Vitals
**Example environment:** browser

## Summary

FID measured the delay before the browser could start processing the first input. It is largely a main-thread availability metric and is best explained historically as the predecessor to INP for interaction responsiveness.

## Why it matters

Use this group to connect browser metrics to concrete causes: network, parsing, main-thread work, layout, paint, and input latency.

## JavaScript example

```js
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('interaction latency candidate', {
      duration: entry.duration,
      inputDelay: entry.processingStart - entry.startTime
    });
  }
}).observe({ type: 'event', buffered: true, durationThreshold: 40 });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
