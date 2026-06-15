# Critical rendering path

**Domain:** Frontend
**Group:** Bundling, modules, and delivery
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

The critical rendering path is the sequence from HTML bytes to DOM, CSSOM, render tree, layout, paint, and composite. Optimizing it means reducing blocking resources and making important content discoverable early.

## Why it matters

Use this group to explain how JavaScript reaches the browser, how chunks are split, and what makes code removable or render-blocking.

## JavaScript example

```js
const script = document.createElement('script');
script.src = '/analytics.js';
script.defer = true;
document.head.append(script);

const css = document.createElement('link');
css.rel = 'preload';
css.as = 'style';
css.href = '/critical.css';
document.head.append(css);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
