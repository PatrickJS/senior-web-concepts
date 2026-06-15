# DDoS protection and traffic scrubbing

**Domain:** Network Engineering
**Group:** Security and access control
**Role tags:** sr, network, security
**Example environment:** node

## Summary

DDoS protection and traffic scrubbing absorb or filter malicious floods before they exhaust application, network, or origin capacity. Useful defenses combine edge capacity, rate limits, challenge flows, filtering, and runbooks.

## Why it matters

Use this group to make network access explicit through firewalls, private links, zero-trust policy, and traffic protection.

## JavaScript example

```js
const shouldScrub = ({ requestsPerSecond, baselineRps }) => {
  return requestsPerSecond > baselineRps * 5;
};

console.log(shouldScrub({ requestsPerSecond: 60_000, baselineRps: 8_000 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
