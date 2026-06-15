# Scheduler priorities

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Scheduler priorities decide which work should run now and which work can wait. UI schedulers prioritize input and visible updates over background rendering, prefetching, analytics, and non-urgent transitions.

## Why it matters

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

## JavaScript example

```js
const post = globalThis.scheduler?.postTask
  ? (task) => scheduler.postTask(task, { priority: 'user-blocking' })
  : (task) => setTimeout(task, 0);

post(() => console.log('run after yielding to input'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
