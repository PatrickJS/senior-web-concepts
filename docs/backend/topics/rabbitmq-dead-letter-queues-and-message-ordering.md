# RabbitMQ dead-letter queues & message ordering

**Domain:** Backend
**Group:** Messaging, streams, and event-driven systems
**Example environment:** node

## Summary

RabbitMQ dead-letter queues capture rejected, expired, or failed messages for later handling. Ordering can be broken by retries, multiple consumers, requeueing, priorities, and dead-letter routing.

## Why it matters

Use this group to design event pipelines that survive retries, reordering, backpressure, projection lag, and consumer failures.

## JavaScript example

```js
const handleMessage = async (message, channel) => {
  try {
    await processMessage(message);
    channel.ack(message);
  } catch (error) {
    if (message.attempts >= 3) channel.sendToQueue('orders.dlq', message.body);
    else channel.nack(message, false, false);
  }
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
