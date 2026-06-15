# CDN caching and edge routing

**Domain:** Network Engineering
**Group:** DNS, TLS, and edge delivery
**Role tags:** sr, network, platform
**Example environment:** node

## Summary

CDN caching and edge routing move responses closer to users while respecting cache keys, freshness, purge behavior, origin shielding, and request routing policy. The edge becomes part of the production system, not just a static asset layer.

## Why it matters

Use this group to connect names, certificates, proxies, CDNs, caches, and edge routing to real production reachability.

## JavaScript example

```js
const cacheKey = ({ host, path, acceptEncoding }) => {
  return [host, path, acceptEncoding.includes('br') ? 'br' : 'identity'].join('|');
};

console.log(cacheKey({ host: 'www.example.com', path: '/app.js', acceptEncoding: 'gzip, br' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
