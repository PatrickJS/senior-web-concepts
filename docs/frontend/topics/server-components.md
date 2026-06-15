# Server components

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Server components render parts of the component tree on the server without shipping their implementation to the client. The core trade-off is reduced client JavaScript versus stricter serialization, data access, and boundary rules.

## Why it matters

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

## JavaScript example

```js
export const ProductServerComponent = async ({ id, db }) => {
  const product = await db.products.get(id);
  return {
    type: 'ProductCard',
    props: { title: product.title, price: product.price }
  };
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
