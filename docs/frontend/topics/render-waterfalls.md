# Render waterfalls

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Render waterfalls happen when rendering discovers async dependencies sequentially instead of in parallel. They commonly occur in nested components, route loaders, dynamic imports, and suspense trees that fetch too late.

## Why it matters

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

## JavaScript example

```js
const loadPageBad = async () => {
  const user = await loadUser();
  const posts = await loadPosts(user.id);
  return { user, posts };
};

const loadPageBetter = async (id) => {
  const [user, posts] = await Promise.all([loadUser(id), loadPosts(id)]);
  return { user, posts };
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
