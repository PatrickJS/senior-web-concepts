# Invariants

**Domain:** Software Engineering
**Group:** Modeling, APIs, and contracts
**Role tags:** mid, software
**Example environment:** node

## Summary

Invariants are facts that must remain true before and after operations. Naming invariants explicitly turns hidden assumptions into validations, tests, constructors, and state transition rules.

## Why it matters

Use this group to express business rules, invariants, outcomes, and compatibility expectations directly in code boundaries.

## JavaScript example

```js
const createDateRange = (start, end) => {
  if (Date.parse(start) > Date.parse(end)) throw new RangeError('start must be before end');
  return Object.freeze({ start, end });
};

console.log(createDateRange('2030-01-01', '2030-01-31'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
