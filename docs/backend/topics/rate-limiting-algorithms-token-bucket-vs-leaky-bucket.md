# Rate limiting algorithms (token bucket vs leaky bucket)

**Domain:** Backend
**Group:** API design, auth, and edge controls
**Example environment:** node

## Summary

Token bucket allows bursts up to bucket capacity while refilling over time; leaky bucket smooths output at a fixed rate. The right choice depends on burst tolerance, fairness, and user experience.

## Why it matters

Use this group to make APIs safe, compatible, observable, throttled, cacheable, and resilient under N+1, auth, schema, or gateway pressure.

## JavaScript example

```js
class TokenBucket {
  constructor({ capacity, refillPerSecond }) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillPerSecond = refillPerSecond;
    this.updatedAt = Date.now();
  }
  take() {
    const elapsed = (Date.now() - this.updatedAt) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + elapsed * this.refillPerSecond);
    this.updatedAt = Date.now();
    if (this.tokens < 1) return false;
    this.tokens -= 1;
    return true;
  }
}
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
