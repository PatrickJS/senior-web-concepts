# Golden paths and service templates

**Domain:** Platform Engineering
**Group:** Developer experience and platform product
**Role tags:** sr, platform, dx
**Example environment:** node

## Summary

Golden paths and templates encode recommended architecture, CI, deployment, observability, security, and ownership defaults. They reduce repeated decisions without blocking teams that need justified exceptions.

## Why it matters

Use this group to build internal platforms, templates, local environments, and APIs that make good engineering paths easy to follow.

## JavaScript example

```js
const serviceTemplate = {
  ci: ['syntax', 'test', 'generate'],
  observability: ['logs', 'metrics', 'traces'],
  ownership: ['team', 'runbook']
};

console.log(serviceTemplate);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
