# Message-driven architecture (Akka / Orleans)

**Domain:** Backend
**Group:** Messaging, streams, and event-driven systems
**Example environment:** node

## Summary

Message-driven architecture structures systems around asynchronous messages and handlers. It improves decoupling and resilience but introduces delivery guarantees, ordering, retries, idempotency, and observability requirements.

## Why it matters

Use this group to design event pipelines that survive retries, reordering, backpressure, projection lag, and consumer failures.

## JavaScript example

```js
class Bus {
  handlers = new Map();
  on(type, handler) { this.handlers.set(type, [...(this.handlers.get(type) ?? []), handler]); }
  emit(event) { return Promise.all((this.handlers.get(event.type) ?? []).map((handler) => handler(event))); }
}
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
