# Recursive vs authoritative DNS

**Domain:** Network Engineering
**Group:** DNS, TLS, and edge delivery
**Role tags:** mid, network
**Example environment:** node

## Summary

Recursive resolvers answer client queries by consulting authoritative DNS servers and caching results. Knowing the difference helps diagnose stale answers, delegation mistakes, split-horizon DNS, and resolver-specific failures.

## Why it matters

Use this group to connect names, certificates, proxies, CDNs, caches, and edge routing to real production reachability.

## JavaScript example

```js
const resolutionPath = [
  'stub resolver',
  'recursive resolver',
  'root server',
  'tld server',
  'authoritative server'
];

console.log(resolutionPath.join(' -> '));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
