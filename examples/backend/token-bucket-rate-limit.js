class TokenBucket {
  constructor({ capacity, refillPerSecond }) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillPerSecond = refillPerSecond;
    this.updatedAt = Date.now();
  }

  take() {
    const now = Date.now();
    const elapsed = (now - this.updatedAt) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + elapsed * this.refillPerSecond);
    this.updatedAt = now;

    if (this.tokens < 1) return false;
    this.tokens -= 1;
    return true;
  }
}

const bucket = new TokenBucket({ capacity: 3, refillPerSecond: 1 });
for (let index = 0; index < 5; index++) {
  console.log(`request ${index + 1}:`, bucket.take() ? 'allowed' : 'limited');
}
