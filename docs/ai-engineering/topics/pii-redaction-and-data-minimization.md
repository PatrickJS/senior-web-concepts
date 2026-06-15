# PII redaction and data minimization

**Domain:** AI Engineering
**Group:** Safety, security, and data handling
**Example environment:** node

## Summary

PII redaction and data minimization reduce sensitive data exposure in prompts, logs, traces, evals, and vendor calls. The safest token is the one never sent, logged, or retained unnecessarily.

## Why it matters

Use this group to reduce prompt injection, unsafe output, privacy leakage, and unclear escalation behavior in AI-backed systems.

## Related concepts

- System Design: Secret and configuration boundaries
- Backend: Log aggregation with sampling

## JavaScript example

```js
const redactPii = (text) => text
  .replace(/[\w.+-]+@[\w.-]+/g, '[email]')
  .replace(/\b\d{3}-\d{2}-\d{4}\b/g, '[ssn]');

console.log(redactPii('contact pat@example.com'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
