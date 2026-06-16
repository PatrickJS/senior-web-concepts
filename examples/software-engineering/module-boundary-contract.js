import assert from 'node:assert/strict';

const createRegistrationService = ({ saveUser, sendWelcomeEmail, createId }) => {
  return {
    async register(input) {
      const email = String(input.email ?? '').trim().toLowerCase();
      if (!email.includes('@')) {
        return { ok: false, error: { code: 'invalid_email' } };
      }

      const user = { id: createId(), email };
      await saveUser(user);
      await sendWelcomeEmail(user.email);
      return { ok: true, value: user };
    }
  };
};

const savedUsers = [];
const sentEmails = [];

const service = createRegistrationService({
  createId: () => 'user-1',
  saveUser: async (user) => savedUsers.push(user),
  sendWelcomeEmail: async (email) => sentEmails.push(email)
});

const result = await service.register({ email: ' ADA@EXAMPLE.COM ' });

assert.deepEqual(result, { ok: true, value: { id: 'user-1', email: 'ada@example.com' } });
assert.deepEqual(savedUsers, [{ id: 'user-1', email: 'ada@example.com' }]);
assert.deepEqual(sentEmails, ['ada@example.com']);

console.log({
  boundary: 'registration-service',
  result,
  savedUsers,
  sentEmails
});
