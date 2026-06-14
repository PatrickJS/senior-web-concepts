# Shadow DOM

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Example environment:** browser

## Summary

Shadow DOM creates an encapsulated DOM subtree with scoped styling and slot-based composition. It improves component isolation but affects styling, event retargeting, accessibility names, and testing strategies.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
const host = document.querySelector('theme-card');
const root = host.attachShadow({ mode: 'open' });
root.innerHTML = `
  <style>:host { display: block; }</style>
  <slot></slot>
`;
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
