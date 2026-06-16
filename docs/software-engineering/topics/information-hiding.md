# Information hiding

**Domain:** Software Engineering
**Group:** Code structure and modularity
**Role tags:** jr, software
**Example environment:** node

## Summary

Information hiding keeps decisions that are likely to change inside one module instead of leaking them into every caller. It protects code from ripple effects when storage, parsing, algorithms, or vendor behavior changes.

## Why it matters

Use this group to reason about module shape, dependency direction, abstraction, information hiding, and how local code structure affects future change.

## JavaScript example

```js
const createUserStore = () => {
  const users = new Map();
  return {
    save(user) { users.set(user.id, { ...user }); },
    find(id) { return users.get(id) ?? null; }
  };
};

const store = createUserStore();
store.save({ id: 'u1', name: 'Ada' });
console.log(store.find('u1'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
