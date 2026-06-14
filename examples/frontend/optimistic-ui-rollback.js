let state = { items: [] };

const render = () => console.log(JSON.stringify(state));

const addItemOptimistically = async (item, save) => {
  const previous = state;
  state = { items: [...state.items, { ...item, pending: true }] };
  render();

  try {
    const saved = await save(item);
    state = { items: state.items.map((value) => value.id === item.id ? saved : value) };
  } catch {
    state = previous;
  }

  render();
};

await addItemOptimistically({ id: 'tmp-1', text: 'Ship repo' }, async () => {
  throw new Error('server rejected');
});
