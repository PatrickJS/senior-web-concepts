# Layout thrashing

**Domain:** Frontend
**Group:** Observers, layout, paint, and CSS pipeline
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Layout thrashing alternates DOM reads that force layout with writes that invalidate layout. Batch reads before writes, use transforms for motion, and avoid measuring after each mutation.

## Why it matters

Use this group to reason about browser pipeline phases, observer callbacks, compositing, containment, and avoiding accidental layout cost.

## JavaScript example

```js
const items = [...document.querySelectorAll('.item')];
const rects = items.map((item) => item.getBoundingClientRect());

requestAnimationFrame(() => {
  for (const [index, item] of items.entries()) {
    item.style.transform = `translateY(${rects[index].height}px)`;
  }
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
