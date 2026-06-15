# CSRF vs XSS mitigation

**Domain:** Frontend
**Group:** Security, networking, and caching
**Role tags:** sr, frontend
**Example environment:** node

## Summary

CSRF tricks an authenticated browser into sending unwanted state-changing requests; XSS executes attacker script in the trusted origin. CSRF is mitigated with SameSite, tokens, and origin checks; XSS is mitigated with output encoding, CSP, sanitization, and Trusted Types.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

export const renderComment = (comment) => `<p>${escapeHtml(comment)}</p>`;
export const verifyCsrf = (session, token) => session.csrfToken === token;
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
