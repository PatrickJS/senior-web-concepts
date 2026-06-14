# OAuth2 token introspection vs JWT validation

**Domain:** Backend
**Group:** API design, auth, and edge controls
**Example environment:** node

## Summary

JWT validation checks signed claims locally, while token introspection asks the authorization server whether a token is active. JWTs reduce latency but are harder to revoke instantly; introspection centralizes truth but adds network dependency.

## Why it matters

Use this group to make APIs safe, compatible, observable, throttled, cacheable, and resilient under N+1, auth, schema, or gateway pressure.

## JavaScript example

```js
const validateAccessToken = async (token, mode, authServer) => {
  if (mode === 'jwt') return verifyJwtLocally(token);
  if (mode === 'introspection') return authServer.introspect(token);
  throw new Error('unknown validation mode');
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
