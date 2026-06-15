# Platform API ergonomics

**Domain:** Platform Engineering
**Group:** Developer experience and platform product
**Role tags:** staff, platform, dx
**Example environment:** node

## Summary

Platform API ergonomics determine how easily product teams can use internal capabilities without learning every underlying system. Good APIs expose safe defaults, clear errors, stable contracts, and escape hatches.

## Why it matters

Use this group to build internal platforms, templates, local environments, and APIs that make good engineering paths easy to follow.

## JavaScript example

```js
const platformResponse = ({ ok, value, error }) => ({
  ok,
  value,
  error: error && { code: error.code, message: error.message }
});

console.log(platformResponse({ ok: false, error: { code: 'quota_exceeded', message: 'quota exceeded' } }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
