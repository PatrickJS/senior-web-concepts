# Property-based testing

**Domain:** Software Engineering
**Group:** Testing and quality signals
**Role tags:** sr, software
**Example environment:** node

## Summary

Property-based testing checks general rules across many generated inputs instead of only named examples. It is useful for parsers, formatters, reducers, validators, and algorithms with durable invariants.

## Why it matters

Use this group to choose tests that prove useful behavior instead of only executing implementation details.

## JavaScript example

```js
const reverse = (value) => [...value].reverse().join('');
const samples = ['abc', '', 'racecar', 'software'];

console.log(samples.every((sample) => reverse(reverse(sample)) === sample));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
