# Priority inversion in async code

**Domain:** Frontend
**Group:** Rendering correctness and state
**Example environment:** node

## Summary

Priority inversion happens when urgent work waits behind lower-priority work because the scheduler or promise chain cannot preempt it. In UI this shows up as input blocked behind rendering, background fetches, or heavy microtask chains.

## Why it matters

Use this group to make UI behavior repeatable under retries, concurrency, async races, and partial failure.

## JavaScript example

```js
const queue = [];

export const schedule = (priority, task) => {
  queue.push({ priority, task });
  queue.sort((a, b) => b.priority - a.priority);
};

schedule(1, () => console.log('background render'));
schedule(10, () => console.log('input update first'));

while (queue.length > 0) queue.shift().task();
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
