# Dependency direction

**Domain:** Software Engineering
**Group:** Code structure and modularity
**Role tags:** sr, software
**Example environment:** node

## Summary

Dependency direction decides which modules know about which other modules. Stable business rules should not depend on volatile delivery details such as HTTP, CLIs, files, framework adapters, or UI shells.

## Why it matters

Use this group to reason about module shape, dependency direction, abstraction, information hiding, and how local code structure affects future change.

## JavaScript example

```js
const registerUser = ({ saveUser, sendWelcome }) => async (input) => {
  const user = { id: crypto.randomUUID(), email: input.email.toLowerCase() };
  await saveUser(user);
  await sendWelcome(user.email);
  return user;
};

console.log(typeof registerUser);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
