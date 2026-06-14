# MutationObserver cost

**Domain:** Frontend
**Group:** Observers, layout, paint, and CSS pipeline
**Example environment:** browser

## Summary

MutationObserver batches DOM mutation records, but broad subtree observation can be expensive. The cost comes from record volume, callback work, retained nodes, and accidental feedback loops that create more mutations.

## Why it matters

Use this group to reason about browser pipeline phases, observer callbacks, compositing, containment, and avoiding accidental layout cost.

## JavaScript example

```js
const pending = new Set();

const observer = new MutationObserver((records) => {
  for (const record of records) pending.add(record.target);
  queueMicrotask(() => {
    for (const node of pending) console.log('changed', node);
    pending.clear();
  });
});

observer.observe(document.body, { subtree: true, childList: true });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
