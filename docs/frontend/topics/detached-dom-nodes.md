# Detached DOM nodes

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Example environment:** browser

## Summary

Detached DOM nodes are removed from the visible document but still retained by JavaScript references. They often come from leaked listeners, caches, closures, observers, and component cleanup bugs.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
const listeners = new WeakMap();

export const mount = (node) => {
  const onClick = () => console.log('clicked');
  node.addEventListener('click', onClick);
  listeners.set(node, onClick);
};

export const unmount = (node) => {
  node.removeEventListener('click', listeners.get(node));
  listeners.delete(node);
  node.remove();
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
