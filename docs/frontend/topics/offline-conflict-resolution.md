# Offline conflict resolution

**Domain:** Frontend
**Group:** Offline, collaboration, and data modeling
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Offline conflict resolution decides what happens when local changes meet remote changes after reconnect. Strategies include last-write-wins, field-level merge, operational transforms, CRDTs, manual conflict UI, and version vectors.

## Why it matters

Use this group to model state transitions, conflicts, merges, rollback, and event histories explicitly instead of treating the frontend as throwaway state.

## JavaScript example

```js
const mergeField = (local, remote) => {
  if (local.version > remote.version) return local;
  if (remote.version > local.version) return remote;
  return { ...remote, value: local.value, conflict: local.value !== remote.value };
};

console.log(mergeField(
  { value: 'dark', version: 3 },
  { value: 'light', version: 2 }
));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
