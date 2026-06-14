const db = {
  orders: [],
  outbox: [],
  async transaction(work) { return work(this); }
};

const createOrder = async (order) => db.transaction(async (tx) => {
  tx.orders.push(order);
  tx.outbox.push({ id: crypto.randomUUID(), type: 'order.created', orderId: order.id });
});

await createOrder({ id: 'order-1' });
console.log(db);
