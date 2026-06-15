# Deterministic rendering

**Domain:** Frontend
**Group:** Rendering correctness and state
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Deterministic rendering means the same inputs produce the same UI output. It avoids hidden time, random values, mutable globals, request order dependence, and client/server mismatches during hydration.

## Why it matters

Use this group to make UI behavior repeatable under retries, concurrency, async races, and partial failure.

## JavaScript example

```js
export const renderUserCard = (state) => {
  const name = state.user?.name ?? 'Unknown';
  const plan = state.user?.plan ?? 'free';
  return `<article><h2>${name}</h2><p>${plan}</p></article>`;
};

const state = Object.freeze({ user: { name: 'Patrick', plan: 'pro' } });
console.log(renderUserCard(state));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
