# PerformanceObserver API

**Domain:** Frontend
**Group:** Performance and Web Vitals
**Example environment:** node

## Summary

PerformanceObserver streams browser or runtime performance entries as they occur, often with buffered historical entries. It is the common mechanism for collecting vitals, resource timing, long tasks, marks, and measures.

## Why it matters

Use this group to connect browser metrics to concrete causes: network, parsing, main-thread work, layout, paint, and input latency.

## JavaScript example

```js
import { performance, PerformanceObserver } from 'node:perf_hooks';

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) console.log(entry.name, entry.duration);
});

observer.observe({ entryTypes: ['measure'] });
performance.mark('start');
await new Promise((resolve) => setTimeout(resolve, 20));
performance.mark('end');
performance.measure('async-work', 'start', 'end');
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
