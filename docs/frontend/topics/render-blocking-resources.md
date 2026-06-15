# Render blocking resources

**Domain:** Frontend
**Group:** Bundling, modules, and delivery
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Render-blocking resources delay first paint or meaningful rendering because the browser must fetch, parse, or execute them first. CSS, synchronous scripts, fonts, and late-discovered hero assets are common causes.

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
