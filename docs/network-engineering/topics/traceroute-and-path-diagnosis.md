# Traceroute and path diagnosis

**Domain:** Network Engineering
**Group:** Observability and troubleshooting
**Role tags:** jr, network
**Example environment:** node

## Summary

Traceroute and path diagnosis reveal likely network hops, latency jumps, and routing asymmetry. Results require interpretation because rate limits, firewalls, tunnels, and ICMP policy can hide or distort hops.

## Why it matters

Use this group to diagnose network behavior with captures, traces, probes, SLOs, and incident triage routines.

## JavaScript example

```js
const hops = [
  { ttl: 1, rttMs: 2 },
  { ttl: 2, rttMs: 4 },
  { ttl: 3, rttMs: 85 }
];

console.log(hops.find((hop, index) => index > 0 && hop.rttMs - hops[index - 1].rttMs > 50));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
