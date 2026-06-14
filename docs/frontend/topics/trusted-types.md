# Trusted Types

**Domain:** Frontend
**Group:** Security, networking, and caching
**Example environment:** browser

## Summary

Trusted Types is a browser defense that restricts dangerous DOM sinks such as innerHTML to values created by approved policies. It is especially useful for reducing DOM XSS in large applications.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
const policy = trustedTypes.createPolicy('app-html', {
  createHTML(value) {
    return value.replaceAll('<script', '&lt;script');
  }
});

const target = document.querySelector('#preview');
target.innerHTML = policy.createHTML('<p>safe preview</p>');
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
