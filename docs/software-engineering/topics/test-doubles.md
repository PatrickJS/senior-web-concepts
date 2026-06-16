# Test doubles

**Domain:** Software Engineering
**Group:** Testing and quality signals
**Role tags:** jr, software
**Example environment:** node

## Summary

Test doubles replace real collaborators with fakes, stubs, spies, or mocks. They are useful when the double preserves the contract being tested, but harmful when they only mirror implementation details.

## Why it matters

Use this group to choose tests that prove useful behavior instead of only executing implementation details.

## JavaScript example

```js
const calls = [];
const mailer = { send(message) { calls.push(message); } };

mailer.send({ to: 'ada@example.com', template: 'welcome' });
console.log(calls.length);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
