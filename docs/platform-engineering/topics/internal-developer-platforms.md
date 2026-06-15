# Internal developer platforms

**Domain:** Platform Engineering
**Group:** Developer experience and platform product
**Role tags:** staff, platform, dx
**Example environment:** node

## Summary

Internal developer platforms provide paved paths for teams to build, deploy, observe, and operate software. They should be treated as products with users, adoption metrics, support, and feedback loops.

## Why it matters

Use this group to build internal platforms, templates, local environments, and APIs that make good engineering paths easy to follow.

## JavaScript example

```js
const adoptionScore = ({ servicesOnPlatform, totalServices }) => {
  return servicesOnPlatform / totalServices;
};

console.log(adoptionScore({ servicesOnPlatform: 42, totalServices: 60 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
