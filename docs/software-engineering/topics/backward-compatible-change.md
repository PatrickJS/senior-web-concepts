# Backward-compatible change

**Domain:** Software Engineering
**Group:** Modeling, APIs, and contracts
**Role tags:** sr, software, dx
**Example environment:** node

## Summary

Backward-compatible change lets existing callers continue working while new behavior rolls out. Practical compatibility includes additive fields, tolerant readers, deprecation windows, feature flags, and migration helpers.

## Why it matters

Use this group to express business rules, invariants, outcomes, and compatibility expectations directly in code boundaries.

## JavaScript example

```js
const readUserName = (payload) => {
  return payload.displayName ?? [payload.firstName, payload.lastName].filter(Boolean).join(' ');
};

console.log(readUserName({ firstName: 'Grace', lastName: 'Hopper' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
