const estimateCapacity = ({
  monthlyActiveUsers,
  actionsPerUserPerDay,
  peakMultiplier,
  bytesWrittenPerAction,
  averageLatencyMs
}) => {
  const averageRps = monthlyActiveUsers * actionsPerUserPerDay / 86_400;
  const peakRps = averageRps * peakMultiplier;
  const dailyWriteGb = monthlyActiveUsers * actionsPerUserPerDay * bytesWrittenPerAction / 1_000_000_000;
  const concurrentRequests = peakRps * averageLatencyMs / 1000;

  return {
    averageRps: Number(averageRps.toFixed(2)),
    peakRps: Number(peakRps.toFixed(2)),
    dailyWriteGb: Number(dailyWriteGb.toFixed(2)),
    concurrentRequests: Math.ceil(concurrentRequests)
  };
};

console.log(estimateCapacity({
  monthlyActiveUsers: 750_000,
  actionsPerUserPerDay: 18,
  peakMultiplier: 7,
  bytesWrittenPerAction: 1400,
  averageLatencyMs: 180
}));
