# API contract testing (Pact / Spring Cloud Contract)

**Domain:** Backend
**Group:** API design, auth, and edge controls
**Example environment:** node

## Summary

Contract testing verifies that providers and consumers agree on request/response behavior. It catches breaking changes earlier than full integration tests and supports independent service deployment.

## Why it matters

Use this group to make APIs safe, compatible, observable, throttled, cacheable, and resilient under N+1, auth, schema, or gateway pressure.

## JavaScript example

```js
const assertUserContract = (body) => {
  if (typeof body.id !== 'string') throw new Error('id must be string');
  if (typeof body.email !== 'string') throw new Error('email must be string');
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
