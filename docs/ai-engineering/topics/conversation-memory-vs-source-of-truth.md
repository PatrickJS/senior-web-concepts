# Conversation memory vs source of truth

**Domain:** AI Engineering
**Group:** Retrieval and knowledge grounding
**Role tags:** sr, ai
**Example environment:** node

## Summary

Conversation memory is the model-facing summary of interaction state, while the source of truth is the durable system record. Designs should avoid letting generated summaries silently overwrite authoritative data.

## Why it matters

Use this group to connect embeddings, chunking, metadata, retrieval, reranking, and source-of-truth rules into grounded answers.

## Related concepts

- System Design: Read path vs write path design
- Frontend: Event sourcing in frontend

## JavaScript example

```js
const applyMemory = ({ summary, databaseRecord }) => ({
  visibleContext: summary,
  authoritativeState: databaseRecord
});

console.log(applyMemory({ summary: 'user prefers email', databaseRecord: { contact: 'sms' } }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
