# Incident command and postmortems

**Domain:** Platform Engineering
**Group:** Observability, incidents, and operations
**Role tags:** sr, platform
**Example environment:** node

## Summary

Incident command coordinates roles, communication, mitigation, timeline, and follow-up during production incidents. Postmortems turn incidents into system improvements without blame.

## Why it matters

Use this group to make production ownership measurable, alertable, recoverable, and improvable after incidents.

## JavaScript example

```js
const timeline = [];
const record = (event) => timeline.push({ at: new Date().toISOString(), event });

record('declared incident');
console.log(timeline);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
