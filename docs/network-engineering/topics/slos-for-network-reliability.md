# SLOs for network reliability

**Domain:** Network Engineering
**Group:** Observability and troubleshooting
**Role tags:** sr, network, platform
**Example environment:** node

## Summary

Network reliability SLOs define measurable expectations for availability, latency, loss, DNS success, TLS success, and regional reachability. They connect lower-level signals to user-visible service behavior.

## Why it matters

Use this group to diagnose network behavior with captures, traces, probes, SLOs, and incident triage routines.

## JavaScript example

```js
const availability = ({ successfulProbes, totalProbes }) => successfulProbes / totalProbes;
const sloMet = availability({ successfulProbes: 99_950, totalProbes: 100_000 }) >= 0.999;

console.log({ sloMet });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
