# Composition over inheritance

**Domain:** Software Engineering
**Group:** Code structure and modularity
**Role tags:** mid, software
**Example environment:** node

## Summary

Composition builds behavior by passing collaborators or functions together, while inheritance shares behavior through parent classes. Composition usually makes behavior easier to test, replace, and combine without deep class hierarchies.

## Why it matters

Use this group to reason about module shape, dependency direction, abstraction, information hiding, and how local code structure affects future change.

## JavaScript example

```js
const withRetry = (operation, attempts = 3) => async (...args) => {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try { return await operation(...args); } catch (error) { lastError = error; }
  }
  throw lastError;
};

console.log(typeof withRetry(async () => 'ok'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
