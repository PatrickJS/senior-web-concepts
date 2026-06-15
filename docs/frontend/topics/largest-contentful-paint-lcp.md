# Largest Contentful Paint (LCP)

**Domain:** Frontend
**Group:** Performance and Web Vitals
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

LCP measures when the largest visible content element in the viewport is rendered. Good explanations connect LCP to TTFB, render-blocking CSS, image discovery, resource priority, server rendering, and client-side render delays.

## Why it matters

Use this group to connect browser metrics to concrete causes: network, parsing, main-thread work, layout, paint, and input latency.

## JavaScript example

```js
const report = ({ name, value, id }) => {
  navigator.sendBeacon('/vitals', JSON.stringify({ name, value, id }));
};

new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    report({ name: entry.entryType, value: entry.startTime, id: entry.id });
  }
}).observe({ type: 'largest-contentful-paint', buffered: true });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
