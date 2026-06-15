# Load balancing and health checks

**Domain:** Platform Engineering
**Group:** Infrastructure, environments, and cloud networking
**Role tags:** mid, platform, backend
**Example environment:** node

## Summary

Load balancing distributes traffic across healthy targets, while health checks decide whether a target should receive traffic. Bad checks can amplify incidents by sending traffic to broken or warming instances.

## Why it matters

Use this group to model infrastructure state, environment promotion, DNS, certificates, load balancing, and network reachability.

## JavaScript example

```js
const health = ({ dbReady, acceptingTraffic }) => ({
  liveness: true,
  readiness: dbReady && acceptingTraffic
});

console.log(health({ dbReady: true, acceptingTraffic: false }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
