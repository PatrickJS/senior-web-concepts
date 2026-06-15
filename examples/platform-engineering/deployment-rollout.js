const rolloutDecision = ({ errorRate, p95LatencyMs, currentPercent }) => {
  if (errorRate > 0.01 || p95LatencyMs > 400) {
    return { action: 'rollback', nextPercent: 0 };
  }

  if (currentPercent < 100) {
    return { action: 'promote', nextPercent: Math.min(100, currentPercent * 2) };
  }

  return { action: 'complete', nextPercent: 100 };
};

console.log(rolloutDecision({
  errorRate: 0.002,
  p95LatencyMs: 180,
  currentPercent: 25
}));
