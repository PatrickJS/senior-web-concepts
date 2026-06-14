# IndexedDB

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Example environment:** browser

## Summary

IndexedDB is the browser's transactional object store for larger structured data. Good explanations mention version upgrades, object stores, indexes, transactions, async request APIs, quota, and offline-first storage.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
const openRequest = indexedDB.open('app', 1);

openRequest.onupgradeneeded = () => {
  openRequest.result.createObjectStore('events', { keyPath: 'id' });
};

const db = await new Promise((resolve, reject) => {
  openRequest.onsuccess = () => resolve(openRequest.result);
  openRequest.onerror = () => reject(openRequest.error);
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
