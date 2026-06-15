# Local development environments

**Domain:** Platform Engineering
**Group:** Developer experience and platform product
**Role tags:** mid, platform, dx
**Example environment:** node

## Summary

Local development environments should make common workflows fast and realistic without requiring production credentials. The design balances fidelity, startup time, dependency weight, and reproducibility.

## Why it matters

Use this group to build internal platforms, templates, local environments, and APIs that make good engineering paths easy to follow.

## JavaScript example

```js
const localServices = ['api', 'database', 'queue'];
const required = new Set(['api', 'database']);

console.log(localServices.filter((service) => required.has(service)));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
