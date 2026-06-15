# Service Worker lifecycle traps

**Domain:** Frontend
**Group:** Security, networking, and caching
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Service Workers have install, waiting, activate, fetch, and update states that can keep old code alive. Traps include stale caches, uncontrolled clients, skipWaiting misuse, update races, and broken offline fallbacks.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('v1').then((cache) => cache.addAll(['/'])));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
