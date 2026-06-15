# DOM clobbering

**Domain:** Frontend
**Group:** Security, networking, and caching
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

DOM clobbering abuses named elements or IDs that become properties on document, forms, or windows. Safe code avoids trusting global property lookup and reads explicit attributes from selected elements instead.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
const form = document.querySelector('form[data-login-form]');
const action = form.getAttribute('action');

// Avoid reading document.loginForm or form.action when attacker-controlled
// names/ids can shadow properties.
console.log(new URL(action, location.origin).href);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
