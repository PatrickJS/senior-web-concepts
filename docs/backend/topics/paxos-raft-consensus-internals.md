# Paxos / Raft consensus internals

**Domain:** Backend
**Group:** Distributed systems and consistency
**Example environment:** node

## Summary

Consensus protocols let distributed nodes agree on ordered state despite failures. Raft explains this through leader election, terms, logs, majorities, commit indexes, and safety rules.

## Why it matters

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

## JavaScript example

```js
const requestVote = (candidate, voter) => {
  if (candidate.term < voter.term) return { voteGranted: false, term: voter.term };
  if (voter.votedFor && voter.votedFor !== candidate.id) return { voteGranted: false, term: voter.term };
  return { voteGranted: true, term: candidate.term };
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
