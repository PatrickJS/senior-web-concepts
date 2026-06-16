# Integration test boundaries

**Domain:** Software Engineering
**Group:** Testing and quality signals
**Role tags:** mid, software
**Example environment:** node

## Summary

Integration tests verify that real collaborators work together across module, process, storage, or protocol boundaries. They should cover risky contracts that unit tests cannot prove.

## Why it matters

Use this group to choose tests that prove useful behavior instead of only executing implementation details.

## JavaScript example

```js
const createService = ({ store }) => ({
  async create(input) {
    await store.save(input);
    return store.find(input.id);
  }
});

console.log(typeof createService);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
