# Firewall rule ordering

**Domain:** Network Engineering
**Group:** Security and access control
**Role tags:** mid, network, security
**Example environment:** node

## Summary

Firewall rule ordering determines which allow or deny rule applies first. Specificity, default deny, explicit egress, logging, and rule shadowing are essential for both security and debugging.

## Why it matters

Use this group to make network access explicit through firewalls, private links, zero-trust policy, and traffic protection.

## JavaScript example

```js
const rules = [
  { action: 'allow', source: '10.0.0.0/8', port: 443 },
  { action: 'deny', source: '0.0.0.0/0', port: 443 }
];

console.log(rules.find((rule) => rule.port === 443).action);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
