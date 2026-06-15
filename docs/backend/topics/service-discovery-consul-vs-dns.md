# Service discovery (Consul vs DNS)

**Domain:** Backend
**Group:** Cloud, containers, and service topology
**Role tags:** sr, backend
**Example environment:** node

## Summary

Service discovery maps logical service names to healthy instances. DNS is simple and ubiquitous; Consul-style systems can add health checks, metadata, watches, and stronger service catalog semantics.

## Why it matters

Use this group to model platform primitives like service meshes, discovery, sidecars, serverless, Kubernetes disruption controls, and container hardening.

## JavaScript example

```js
import { Resolver } from 'node:dns/promises';

const resolver = new Resolver();
export const discover = async (service) => resolver.resolveSrv(`_${service}._tcp.example.com`);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
