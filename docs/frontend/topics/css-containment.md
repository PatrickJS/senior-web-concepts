# CSS containment

**Domain:** Frontend
**Group:** Observers, layout, paint, and CSS pipeline
**Example environment:** browser

## Summary

CSS containment tells the browser that layout, paint, style, or size effects are isolated. It lets the engine skip broader invalidation and is especially useful for virtualized lists, cards, and independent widgets.

## Why it matters

Use this group to reason about browser pipeline phases, observer callbacks, compositing, containment, and avoiding accidental layout cost.

## JavaScript example

```js
const panel = document.querySelector('[data-virtual-list]');
panel.style.contain = 'layout paint size';
panel.style.contentVisibility = 'auto';
panel.style.containIntrinsicSize = '800px';
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
