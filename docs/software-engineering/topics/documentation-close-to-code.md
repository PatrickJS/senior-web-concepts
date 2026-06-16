# Documentation close to code

**Domain:** Software Engineering
**Group:** Collaboration and delivery discipline
**Role tags:** jr, software, dx
**Example environment:** node

## Summary

Documentation close to code keeps examples, contracts, commands, and design notes near the implementation they describe. It reduces drift when docs can be reviewed and regenerated with code changes.

## Why it matters

Use this group to make software work reviewable, explainable, sliceable, and maintainable across a team.

## JavaScript example

```js
const commandDoc = {
  command: 'npm run generate',
  verifies: ['topic docs', 'role docs'],
  source: 'src/concepts/*.js'
};

console.log(commandDoc);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
