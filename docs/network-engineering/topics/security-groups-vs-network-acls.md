# Security groups vs network ACLs

**Domain:** Network Engineering
**Group:** Security and access control
**Role tags:** mid, network, security
**Example environment:** node

## Summary

Security groups and network ACLs apply network policy at different scopes and with different state behavior. Engineers should understand instance, subnet, stateful, stateless, inbound, and outbound rule implications.

## Why it matters

Use this group to make network access explicit through firewalls, private links, zero-trust policy, and traffic protection.

## JavaScript example

```js
const controls = {
  securityGroup: { stateful: true, scope: 'workload' },
  networkAcl: { stateful: false, scope: 'subnet' }
};

console.log(controls);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
