# Result types and explicit outcomes

**Domain:** Software Engineering
**Group:** Modeling, APIs, and contracts
**Role tags:** mid, software
**Example environment:** node

## Summary

Result types represent success and failure as data. They are useful when callers are expected to branch on known outcomes such as validation failures, missing records, authorization decisions, or conflicts.

## Why it matters

Use this group to express business rules, invariants, outcomes, and compatibility expectations directly in code boundaries.

## JavaScript example

```js
const ok = (value) => ({ ok: true, value });
const err = (code, message) => ({ ok: false, error: { code, message } });

const parseId = (value) => value ? ok(String(value)) : err('missing_id', 'id is required');
console.log(parseId('u1'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
