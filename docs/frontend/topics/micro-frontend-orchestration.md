# Micro-frontend orchestration

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Micro-frontend orchestration coordinates independently built frontend applications at runtime. Strong explanations cover ownership boundaries, routing, shared dependencies, CSS isolation, versioning, event contracts, and failure containment.

## Why it matters

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

## JavaScript example

```js
const registry = new Map();

export const registerApp = (name, app) => registry.set(name, app);

export const mountApp = async (name, target) => {
  const app = registry.get(name) ?? await import(`/apps/${name}.js`);
  return app.mount(target);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
