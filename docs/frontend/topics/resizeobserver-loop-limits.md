# ResizeObserver loop limits

**Domain:** Frontend
**Group:** Observers, layout, paint, and CSS pipeline
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

ResizeObserver reports element size changes, but writing size-affecting styles inside the callback can create loops. Browsers limit these loops, so callbacks should defer writes and avoid recursive layout changes.

## Why it matters

Use this group to reason about browser pipeline phases, observer callbacks, compositing, containment, and avoiding accidental layout cost.

## JavaScript example

```js
const observer = new ResizeObserver((entries) => {
  requestAnimationFrame(() => {
    for (const entry of entries) {
      entry.target.style.setProperty('--width', `${entry.contentRect.width}px`);
    }
  });
});

observer.observe(document.querySelector('[data-panel]'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
