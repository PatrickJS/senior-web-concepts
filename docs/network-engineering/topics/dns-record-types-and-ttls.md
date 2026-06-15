# DNS record types and TTLs

**Domain:** Network Engineering
**Group:** DNS, TLS, and edge delivery
**Role tags:** jr, network, platform
**Example environment:** node

## Summary

DNS record types and TTLs control how names resolve and how quickly changes propagate. Practical fluency includes A, AAAA, CNAME, MX, TXT, NS, CAA, apex constraints, and cache duration trade-offs.

## Why it matters

Use this group to connect names, certificates, proxies, CDNs, caches, and edge routing to real production reachability.

## JavaScript example

```js
const record = {
  name: 'api.example.com',
  type: 'A',
  values: ['203.0.113.20'],
  ttlSeconds: 60
};

console.log(record);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
