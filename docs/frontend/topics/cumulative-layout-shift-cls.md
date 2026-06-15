# Cumulative Layout Shift (CLS)

**Domain:** Frontend
**Group:** Performance and Web Vitals
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

CLS measures unexpected visual movement during page lifetime. The core prevention model is reserving space, stable dimensions, predictable font loading, non-intrusive ads/embeds, and avoiding DOM insertions above existing content.

## Why it matters

Use this group to connect browser metrics to concrete causes: network, parsing, main-thread work, layout, paint, and input latency.

## JavaScript example

```js
let cls = 0;

new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (!entry.hadRecentInput) cls += entry.value;
  }
  console.log({ cls });
}).observe({ type: 'layout-shift', buffered: true });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
