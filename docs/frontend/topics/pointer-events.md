# Pointer events

**Domain:** Frontend
**Group:** Input and accessibility
**Example environment:** browser

## Summary

Pointer events unify mouse, touch, pen, and stylus input behind one event model. A strong explanation covers pointerId, pointerType, pressure, pointer capture, cancellation, and why duplicating mouse/touch logic creates gesture bugs.

## Why it matters

Use this group to reason about operability, assistive technology behavior, focus/input semantics, and whether UI changes are perceivable to more than just a visual mouse user.

## JavaScript example

```js
const box = document.querySelector('[data-drag-box]');

box.addEventListener('pointerdown', (event) => {
  box.setPointerCapture(event.pointerId);
  box.dataset.dragging = 'true';
});

box.addEventListener('pointermove', (event) => {
  if (box.dataset.dragging !== 'true') return;
  box.style.translate = `${event.clientX}px ${event.clientY}px`;
});

box.addEventListener('pointerup', (event) => {
  box.releasePointerCapture(event.pointerId);
  delete box.dataset.dragging;
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
