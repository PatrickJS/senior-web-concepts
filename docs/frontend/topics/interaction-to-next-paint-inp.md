# Interaction to Next Paint (INP)

**Domain:** Frontend
**Group:** Performance and Web Vitals
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

INP measures the latency of user interactions from input through processing to the next paint. It rewards short event handlers, quick style/layout work, cooperative yielding, and avoiding long main-thread tasks.

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
