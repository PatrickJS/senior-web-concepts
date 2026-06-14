import { createHash } from 'node:crypto';

class BloomFilter {
  constructor(size = 1024) {
    this.bits = new Uint8Array(size);
  }

  hash(value, seed) {
    return createHash('sha256').update(`${seed}:${value}`).digest().readUInt32BE(0) % this.bits.length;
  }

  add(value) {
    this.bits[this.hash(value, 1)] = 1;
    this.bits[this.hash(value, 2)] = 1;
  }

  mightContain(value) {
    return this.bits[this.hash(value, 1)] === 1 && this.bits[this.hash(value, 2)] === 1;
  }
}

const filter = new BloomFilter();
filter.add('patrickjs');
console.log('patrickjs:', filter.mightContain('patrickjs'));
console.log('someone-else:', filter.mightContain('someone-else'));
