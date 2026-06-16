# Systematic debugging

**Domain:** Software Engineering
**Group:** Debugging, configuration, and runtime behavior
**Role tags:** jr, software
**Example environment:** node

## Summary

Systematic debugging forms a hypothesis, chooses the smallest useful observation, compares expected and actual behavior, and updates the model. It prevents random edits from hiding the real cause.

## Why it matters

Use this group to connect everyday code decisions to diagnosis, configuration safety, logs, profiling, and production behavior.

## JavaScript example

```js
const observation = { expected: 200, actual: 500, changedRecently: ['auth-middleware'] };
const hypothesis = observation.changedRecently.includes('auth-middleware') ? 'check auth path first' : 'gather more data';

console.log(hypothesis);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
