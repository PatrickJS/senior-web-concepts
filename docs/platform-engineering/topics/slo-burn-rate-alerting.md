# SLO burn-rate alerting

**Domain:** Platform Engineering
**Group:** Observability, incidents, and operations
**Role tags:** sr, platform
**Example environment:** node

## Summary

SLO burn-rate alerting pages when a service consumes its error budget too quickly across short and long windows. It connects alert urgency to user-visible reliability targets.

## Why it matters

Use this group to make production ownership measurable, alertable, recoverable, and improvable after incidents.

## JavaScript example

```js
const burnRate = ({ errors, requests, budgetRatio }) => {
  return (errors / requests) / budgetRatio;
};

console.log(burnRate({ errors: 50, requests: 10_000, budgetRatio: 0.001 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
