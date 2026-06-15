# Zero trust network access

**Domain:** Network Engineering
**Group:** Security and access control
**Role tags:** sr, network, security
**Example environment:** node

## Summary

Zero trust network access grants service access based on identity, device posture, context, and policy rather than broad network location. It shrinks implicit trust but requires strong identity, logging, and exception handling.

## Why it matters

Use this group to make network access explicit through firewalls, private links, zero-trust policy, and traffic protection.

## JavaScript example

```js
const allowAccess = ({ user, deviceHealthy, service }) => {
  return user.groups.includes(service.requiredGroup) && deviceHealthy;
};

console.log(allowAccess({ user: { groups: ['prod-read'] }, deviceHealthy: true, service: { requiredGroup: 'prod-read' } }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
