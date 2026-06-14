# Circuit breaker + bulkhead patterns

**Domain:** Backend
**Group:** Deployment and reliability patterns
**Example environment:** node

## Summary

Circuit breakers stop calling failing dependencies temporarily; bulkheads isolate resource pools so one failing area does not exhaust the entire service. Together they prevent cascading failures.

## Why it matters

Use this group to keep systems available while code, traffic, dependencies, and failure modes change.

## JavaScript example

```js
const breaker = { failures: 0, openedUntil: 0 };

export const callWithBreaker = async (task) => {
  if (Date.now() < breaker.openedUntil) throw new Error('circuit open');
  try {
    const result = await task();
    breaker.failures = 0;
    return result;
  } catch (error) {
    breaker.failures++;
    if (breaker.failures >= 3) breaker.openedUntil = Date.now() + 5000;
    throw error;
  }
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
