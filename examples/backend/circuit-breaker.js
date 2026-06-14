const breaker = { failures: 0, openedUntil: 0 };

const callWithBreaker = async (task) => {
  if (Date.now() < breaker.openedUntil) throw new Error('circuit open');

  try {
    const result = await task();
    breaker.failures = 0;
    return result;
  } catch (error) {
    breaker.failures++;
    if (breaker.failures >= 2) breaker.openedUntil = Date.now() + 1000;
    throw error;
  }
};

for (let index = 0; index < 3; index++) {
  try {
    await callWithBreaker(async () => { throw new Error('downstream failed'); });
  } catch (error) {
    console.log(error.message);
  }
}
