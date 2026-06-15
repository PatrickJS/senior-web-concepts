# Reranking and hybrid search

**Domain:** AI Engineering
**Group:** Retrieval and knowledge grounding
**Example environment:** node

## Summary

Reranking reorders retrieved candidates using a stronger relevance signal, while hybrid search combines lexical and vector retrieval. These techniques improve grounding when semantic search alone misses exact terms, IDs, or rare phrases.

## Why it matters

Use this group to connect embeddings, chunking, metadata, retrieval, reranking, and source-of-truth rules into grounded answers.

## Related concepts

- Backend: Query planner and cost-based optimization

## JavaScript example

```js
const rerank = (query, docs) => docs
  .map((doc) => ({ ...doc, score: doc.title.includes(query) ? doc.score + 2 : doc.score }))
  .toSorted((a, b) => b.score - a.score);

console.log(rerank('refund', [{ title: 'refund policy', score: 0.6 }, { title: 'billing', score: 0.8 }]));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
