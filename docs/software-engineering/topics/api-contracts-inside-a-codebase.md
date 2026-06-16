# API contracts inside a codebase

**Domain:** Software Engineering
**Group:** Modeling, APIs, and contracts
**Role tags:** sr, software, dx
**Example environment:** node

## Summary

Internal APIs still need contracts: inputs, outputs, side effects, errors, ordering, idempotency, and compatibility expectations. Clear internal contracts reduce coordination cost between modules and teams.

## Why it matters

Use this group to express business rules, invariants, outcomes, and compatibility expectations directly in code boundaries.

## JavaScript example

```js
const normalizeCreateUserCommand = (input) => ({
  email: String(input.email ?? '').trim().toLowerCase(),
  displayName: String(input.displayName ?? '').trim()
});

console.log(normalizeCreateUserCommand({ email: ' ADA@EXAMPLE.COM ', displayName: 'Ada' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
