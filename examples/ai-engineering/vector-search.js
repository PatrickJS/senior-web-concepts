const documents = [
  { id: 'doc-1', title: 'Refund policy', embedding: [0.9, 0.1, 0.2] },
  { id: 'doc-2', title: 'Deployment checklist', embedding: [0.1, 0.8, 0.3] },
  { id: 'doc-3', title: 'Billing support escalation', embedding: [0.7, 0.2, 0.6] }
];

const dot = (left, right) => left.reduce((sum, value, index) => sum + value * right[index], 0);
const magnitude = (vector) => Math.sqrt(dot(vector, vector));
const cosine = (left, right) => dot(left, right) / (magnitude(left) * magnitude(right));

const search = (queryEmbedding, limit = 2) => documents
  .map((document) => ({
    ...document,
    score: cosine(queryEmbedding, document.embedding)
  }))
  .toSorted((a, b) => b.score - a.score)
  .slice(0, limit)
  .map(({ id, title, score }) => ({ id, title, score: Number(score.toFixed(3)) }));

console.log(search([0.8, 0.1, 0.5]));
