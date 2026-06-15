# Incident triage for network partitions

**Domain:** Network Engineering
**Group:** Observability and troubleshooting
**Role tags:** sr, network, platform
**Example environment:** node

## Summary

Network partition triage separates application failure from reachability, DNS, routing, firewall, load balancer, or provider issues. Responders need a disciplined path from symptom to packet path to ownership.

## Why it matters

Use this group to diagnose network behavior with captures, traces, probes, SLOs, and incident triage routines.

## JavaScript example

```js
const triageOrder = ['dns', 'tcp-connect', 'tls-handshake', 'load-balancer-health', 'service-readiness'];
const nextCheck = triageOrder[0];

console.log(nextCheck);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
