# Serverless cold-start mitigation

**Domain:** Backend
**Group:** Cloud, containers, and service topology
**Example environment:** node

## Summary

Cold starts happen when a serverless runtime initializes before handling a request. Mitigation includes smaller bundles, hoisted clients, lazy initialization, provisioned concurrency, and avoiding heavy startup work.

## Why it matters

Use this group to model platform primitives like service meshes, discovery, sidecars, serverless, Kubernetes disruption controls, and container hardening.

## JavaScript example

```js
// Hoisted outside the handler so warm invocations reuse it.
const expensiveClient = await createClient();

export const handler = async (event) => {
  return expensiveClient.query(event.query);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
