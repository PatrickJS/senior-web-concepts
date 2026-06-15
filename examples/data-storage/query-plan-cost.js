const estimatePlanCost = ({ rows, selectivity, randomIoCost, sortCost }) => {
  const sequentialScan = rows;
  const indexScan = rows * selectivity * randomIoCost;
  const indexScanWithSort = indexScan + sortCost;

  return {
    sequentialScan,
    indexScan,
    indexScanWithSort,
    chosen: Math.min(sequentialScan, indexScanWithSort) === sequentialScan
      ? 'sequential-scan'
      : 'index-scan'
  };
};

console.log(estimatePlanCost({
  rows: 1_500_000,
  selectivity: 0.002,
  randomIoCost: 4,
  sortCost: 500
}));
