# Packet capture fundamentals

**Domain:** Network Engineering
**Group:** Observability and troubleshooting
**Role tags:** mid, network
**Example environment:** node

## Summary

Packet capture fundamentals help engineers inspect actual traffic rather than inferred application behavior. Good captures choose the right interface, filters, time window, and privacy boundaries.

## Why it matters

Use this group to diagnose network behavior with captures, traces, probes, SLOs, and incident triage routines.

## JavaScript example

```js
const captureFilter = {
  interface: 'eth0',
  expression: 'tcp port 443 and host 203.0.113.10',
  seconds: 30
};

console.log(captureFilter);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
