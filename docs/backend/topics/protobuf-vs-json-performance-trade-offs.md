# Protobuf vs JSON performance trade-offs

**Domain:** Backend
**Group:** API design, auth, and edge controls
**Role tags:** sr, backend
**Example environment:** node

## Summary

Protobuf is compact, typed, and schema-driven; JSON is human-readable and ubiquitous. Trade-offs include payload size, CPU parse cost, compatibility rules, introspection, tooling, and browser/debug ergonomics.

## Why it matters

Use this group to make APIs safe, compatible, observable, throttled, cacheable, and resilient under N+1, auth, schema, or gateway pressure.

## JavaScript example

```js
const json = Buffer.from(JSON.stringify({ id: 1, active: true }));
const binary = Buffer.from([8, 1, 16, 1]);

console.log({ jsonBytes: json.byteLength, binaryBytes: binary.byteLength });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
