# Paint vs composite vs layout

**Domain:** Frontend
**Group:** Observers, layout, paint, and CSS pipeline
**Example environment:** browser

## Summary

Layout computes geometry, paint rasterizes pixels, and composite assembles layers on screen. Performance work often means avoiding layout and paint when a transform or opacity-only composite will do.

## Why it matters

Use this group to reason about browser pipeline phases, observer callbacks, compositing, containment, and avoiding accidental layout cost.

## JavaScript example

```js
const el = document.querySelector('[data-card]');

// Layout-affecting: width, height, top, left.
el.style.width = '320px';

// Composite-friendly: transform and opacity.
el.style.transform = 'translate3d(10px, 0, 0)';
el.style.opacity = '0.9';
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
