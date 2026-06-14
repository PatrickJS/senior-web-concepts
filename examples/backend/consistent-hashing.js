import { createHash } from 'node:crypto';

const hashInt = (value) => createHash('sha256').update(value).digest().readUInt32BE(0);
const createRing = (nodes) => nodes
  .map((node) => ({ node, point: hashInt(node) }))
  .sort((a, b) => a.point - b.point);

const pickNode = (ring, key) => {
  const point = hashInt(key);
  return ring.find((entry) => entry.point >= point)?.node ?? ring[0].node;
};

const ring = createRing(['cache-a', 'cache-b', 'cache-c']);
for (const key of ['user:1', 'user:2', 'user:3']) {
  console.log(key, '=>', pickNode(ring, key));
}
