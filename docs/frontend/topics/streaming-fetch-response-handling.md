# Streaming fetch response handling

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Streaming fetch handling reads response chunks as they arrive instead of waiting for the full body. It enables progressive rendering, lower memory usage, server-sent protocols, and earlier cancellation.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
/* global fetch */
const response = await fetch('/events');
const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  console.log(decoder.decode(value, { stream: true }));
}
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
