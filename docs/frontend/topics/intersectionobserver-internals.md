# IntersectionObserver internals

**Domain:** Frontend
**Group:** Observers, layout, paint, and CSS pipeline
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

IntersectionObserver asynchronously reports visibility intersections between targets and a root. It avoids many scroll-handler costs, but callbacks are still approximate, threshold-based, and affected by root margins and layout changes.

## Why it matters

Use this group to reason about browser pipeline phases, observer callbacks, compositing, containment, and avoiding accidental layout cost.

## JavaScript example

```js
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.src = entry.target.dataset.src;
    observer.unobserve(entry.target);
  }
}, { rootMargin: '200px' });

for (const image of document.querySelectorAll('img[data-src]')) observer.observe(image);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
