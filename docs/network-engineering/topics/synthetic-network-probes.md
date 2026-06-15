# Synthetic network probes

**Domain:** Network Engineering
**Group:** Observability and troubleshooting
**Role tags:** mid, network, platform
**Example environment:** node

## Summary

Synthetic network probes continuously test reachability, DNS, TLS, latency, packet loss, and regional routing from controlled vantage points. They catch network-path problems before users or services report them.

## Why it matters

Use this group to diagnose network behavior with captures, traces, probes, SLOs, and incident triage routines.

## JavaScript example

```js
const probeResult = {
  region: 'sfo',
  dnsMs: 18,
  tlsMs: 42,
  firstByteMs: 96,
  ok: true
};

console.log(probeResult.ok && probeResult.firstByteMs < 200);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
