# Subpixel rendering

**Domain:** Frontend
**Group:** Observers, layout, paint, and CSS pipeline
**Example environment:** browser

## Summary

Subpixel rendering occurs because layout uses fractional CSS pixels while screens use device pixels. Rounding can affect text, transforms, borders, canvas drawing, and alignment across devicePixelRatio values.

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
