# Value objects

**Domain:** Software Engineering
**Group:** Modeling, APIs, and contracts
**Role tags:** jr, software
**Example environment:** node

## Summary

Value objects represent values by their contents instead of identity. They are useful for money, email addresses, quantities, ranges, and other concepts that need validation and equality semantics.

## Why it matters

Use this group to express business rules, invariants, outcomes, and compatibility expectations directly in code boundaries.

## JavaScript example

```js
const createMoney = (currency, cents) => {
  if (!Number.isInteger(cents)) throw new TypeError('cents must be an integer');
  return Object.freeze({ currency, cents });
};

console.log(createMoney('USD', 1299));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
