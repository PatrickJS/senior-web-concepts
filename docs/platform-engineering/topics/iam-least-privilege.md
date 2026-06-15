# IAM least privilege

**Domain:** Platform Engineering
**Group:** Security, identity, and supply chain
**Role tags:** sr, platform, security
**Example environment:** node

## Summary

IAM least privilege grants only the actions and resources needed for a role. It requires scoping by identity, environment, action, resource, condition, and operational break-glass paths.

## Why it matters

Use this group to control secrets, permissions, artifact trust, policy, and blast radius across the platform.

## JavaScript example

```js
const policy = {
  action: ['s3:GetObject'],
  resource: ['arn:aws:s3:::app-prod-readonly/*'],
  condition: { environment: 'prod' }
};

console.log(policy);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
