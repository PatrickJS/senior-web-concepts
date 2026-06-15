# Preload vs Prefetch vs Preconnect

**Domain:** Frontend
**Group:** Security, networking, and caching
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Preload fetches a needed resource for the current navigation, prefetch gets likely future resources at lower priority, and preconnect warms DNS/TCP/TLS connections to an origin. Misuse can waste bandwidth or hurt priority scheduling.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
const addHint = (rel, href, as) => {
  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;
  if (as) link.as = as;
  document.head.append(link);
};

addHint('preconnect', 'https://cdn.example.com');
addHint('preload', '/fonts/app.woff2', 'font');
addHint('prefetch', '/next-route.js', 'script');
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
