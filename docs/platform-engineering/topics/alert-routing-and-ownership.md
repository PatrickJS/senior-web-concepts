# Alert routing and ownership

**Domain:** Platform Engineering
**Group:** Observability, incidents, and operations
**Role tags:** sr, platform
**Example environment:** node

## Summary

Alert routing and ownership connect symptoms to responsible teams, escalation policies, runbooks, and user impact. Alerts without owners become noise; owners without context burn out.

## Why it matters

Use this group to make production ownership measurable, alertable, recoverable, and improvable after incidents.

## JavaScript example

```js
const routeAlert = ({ service, severity }) => {
  if (severity === 'page') return service.ownerOnCall;
  return service.teamChannel;
};

console.log(routeAlert({ service: { ownerOnCall: 'payments-primary', teamChannel: '#payments' }, severity: 'page' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
