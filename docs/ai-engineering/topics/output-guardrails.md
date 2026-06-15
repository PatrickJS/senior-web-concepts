# Output guardrails

**Domain:** AI Engineering
**Group:** Safety, security, and data handling
**Role tags:** sr, ai
**Example environment:** node

## Summary

Output guardrails validate model responses before display, execution, storage, or sending. They can enforce schema, policy, unsafe-content checks, citation requirements, numeric bounds, or human review.

## Why it matters

Use this group to reduce prompt injection, unsafe output, privacy leakage, and unclear escalation behavior in AI-backed systems.

## Related concepts

- Backend: API contract testing
- Frontend: Content Security Policy

## JavaScript example

```js
const validateAnswer = (answer) => {
  if (!answer.citations?.length) return { ok: false, reason: 'missing citations' };
  if (answer.confidence < 0.5) return { ok: false, reason: 'low confidence' };
  return { ok: true };
};

console.log(validateAnswer({ citations: [], confidence: 0.9 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
