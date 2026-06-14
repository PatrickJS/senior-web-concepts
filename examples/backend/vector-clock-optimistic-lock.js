const dominates = (a, b) => Object.keys({ ...a, ...b }).every((node) => (a[node] ?? 0) >= (b[node] ?? 0));
const concurrent = (a, b) => !dominates(a, b) && !dominates(b, a);

const local = { browserA: 2, browserB: 0 };
const remote = { browserA: 1, browserB: 1 };

console.log({ concurrent: concurrent(local, remote) });
