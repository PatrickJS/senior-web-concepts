const runSaga = async (steps) => {
  const completed = [];

  try {
    for (const step of steps) {
      console.log('do', step.name);
      await step.do();
      completed.push(step);
    }
  } catch (error) {
    console.log('failed:', error.message);
    for (const step of completed.reverse()) {
      console.log('undo', step.name);
      await step.undo?.();
    }
  }
};

await runSaga([
  { name: 'reserve-inventory', do: async () => {}, undo: async () => {} },
  { name: 'charge-card', do: async () => { throw new Error('card declined'); }, undo: async () => {} }
]);
