# Mutation testing

**Domain:** Software Engineering
**Group:** Testing and quality signals
**Role tags:** sr, software
**Example environment:** node

## Summary

Mutation testing changes code in small ways and checks whether tests fail. Surviving mutations show where tests execute code without proving the behavior that matters.

## Why it matters

Use this group to choose tests that prove useful behavior instead of only executing implementation details.

## JavaScript example

```js
const isAdult = (age) => age >= 18;
const tests = [isAdult(18) === true, isAdult(17) === false];

console.log({ testsPass: tests.every(Boolean) });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
