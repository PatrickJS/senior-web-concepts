# Failure mode analysis

**Domain:** System Design
**Group:** Reliability and operations
**Role tags:** sr, system
**Example environment:** node

## Summary

Failure mode analysis lists what can break, how the system detects it, what user impact it creates, and which mitigation applies. It converts architecture diagrams from happy-path pictures into operable designs.

## Why it matters

Use this group to reason about failure modes, overload behavior, fallback, disaster recovery, observability, alerts, and releases.

## Architecture sketch

```mermaid
flowchart LR
  Component["Component"] --> Failure["Failure mode"]
  Failure --> Detection["Detection"]
  Detection --> Mitigation["Mitigation"]
  Mitigation --> UserImpact["User impact"]
  UserImpact --> Priority["Priority"]
```

## Related concepts

- Backend: Chaos engineering principles
- Backend: Circuit breaker + bulkhead patterns

## JavaScript example

```js
const failureModes = [
  { component: 'cache', failure: 'stale data', mitigation: 'versioned keys' },
  { component: 'queue', failure: 'backlog', mitigation: 'shed low priority work' }
];

console.table(failureModes);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
