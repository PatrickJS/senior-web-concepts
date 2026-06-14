const transitions = {
  idle: { SUBMIT: 'saving' },
  saving: { RESOLVE: 'saved', REJECT: 'error', CANCEL: 'idle' },
  error: { RETRY: 'saving', EDIT: 'idle' },
  saved: { EDIT: 'idle' }
};

const transition = (state, event) => transitions[state]?.[event] ?? state;

let state = 'idle';
for (const event of ['SUBMIT', 'REJECT', 'RETRY', 'RESOLVE']) {
  state = transition(state, event);
  console.log(event, '=>', state);
}
