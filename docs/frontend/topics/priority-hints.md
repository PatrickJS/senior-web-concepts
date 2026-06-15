# Priority hints

**Domain:** Frontend
**Group:** Security, networking, and caching
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Priority hints communicate relative fetch importance to the browser. They are useful for hero images and noncritical assets, but should complement rather than replace correct resource discovery and markup order.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
const hero = document.querySelector('img[data-hero]');
hero.fetchPriority = 'high';
hero.loading = 'eager';

const belowFold = document.querySelector('img[data-below-fold]');
belowFold.fetchPriority = 'low';
belowFold.loading = 'lazy';
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
