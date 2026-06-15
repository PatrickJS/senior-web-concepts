# Code splitting strategies

**Domain:** Frontend
**Group:** Bundling, modules, and delivery
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Code splitting decides which code ships together and which code loads later. Useful strategies include route splitting, component splitting, vendor splitting, permission-based loading, and interaction-triggered loading.

## Why it matters

Use this group to explain how JavaScript reaches the browser, how chunks are split, and what makes code removable or render-blocking.

## JavaScript example

```js
const loadAdminTools = async (user) => {
  if (!user.roles.includes('admin')) return null;
  return import('./admin-tools.js');
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
