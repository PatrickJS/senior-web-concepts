# System Design concepts

28 topics mapped into summaries and JavaScript/Node.js examples.

## Career-level progression

- [Senior](../roles/sr.md) — 28 topics

## Design process and trade-offs

Use this group to turn product goals into explicit requirements, constraints, trade-offs, and decisions that can be revisited later.

- [Functional vs non-functional requirements](topics/functional-vs-non-functional-requirements.md) — sr, system
- [SLOs and error budgets](topics/slos-and-error-budgets.md) — sr, system

## Scale, capacity, and latency

Use this group to size traffic, storage, throughput, latency budgets, queues, caches, and concurrency before selecting technology.

- [Capacity estimation](topics/capacity-estimation.md) — sr, system
- [Latency budget decomposition](topics/latency-budget-decomposition.md) — sr, system

## Boundaries and topology

Use this group to place client, edge, API, service, data, control-plane, and data-plane responsibilities deliberately.

- [Client-edge-service boundaries](topics/client-edge-service-boundaries.md) — sr, system
- [API gateway and BFF boundaries](topics/api-gateway-and-bff-boundaries.md) — sr, system
- [Read path vs write path design](topics/read-path-vs-write-path-design.md) — sr, system
- [Control plane vs data plane](topics/control-plane-vs-data-plane.md) — sr, system

## Data, consistency, and workflows

Use this group to connect access patterns, consistency needs, partitions, freshness, events, and workflow recovery into one design.

- [Data modeling from access patterns](topics/data-modeling-from-access-patterns.md) — sr, system
- [Cache placement and invalidation](topics/cache-placement-and-invalidation.md) — sr, system
- [Partitioning and tenant isolation](topics/partitioning-and-tenant-isolation.md) — sr, system
- [Read freshness routing](topics/read-freshness-routing.md) — sr, system
- [Async workflow design](topics/async-workflow-design.md) — sr, system

## Reliability and operations

Use this group to reason about failure modes, overload behavior, fallback, disaster recovery, observability, alerts, and releases.

- [Failure mode analysis](topics/failure-mode-analysis.md) — sr, system
- [Backpressure and load shedding](topics/backpressure-and-load-shedding.md) — sr, system
- [Degradation and fallback design](topics/degradation-and-fallback-design.md) — sr, system
- [Disaster recovery objectives (RTO/RPO)](topics/disaster-recovery-objectives-rto-rpo.md) — sr, system
- [Operational readiness review](topics/operational-readiness-review.md) — sr, system
- [Tracing across async workflows](topics/tracing-across-async-workflows.md) — sr, system
- [Runbook and alert design](topics/runbook-and-alert-design.md) — sr, system
- [Release strategy selection](topics/release-strategy-selection.md) — sr, system

## Security, abuse, and governance

Use this group to protect system boundaries, secrets, tenants, quotas, abuse paths, and operational policy surfaces.

- [Threat modeling at system boundaries](topics/threat-modeling-at-system-boundaries.md) — sr, system
- [Abuse and quota controls](topics/abuse-and-quota-controls.md) — sr, system
- [Secret and configuration boundaries](topics/secret-and-configuration-boundaries.md) — sr, system

## Cost, evolution, and decision records

Use this group to keep architecture economically grounded and evolvable through buy/build calls, migrations, and recorded decisions.

- [Cost-aware architecture](topics/cost-aware-architecture.md) — sr, system
- [Build vs buy evaluation](topics/build-vs-buy-evaluation.md) — sr, system
- [Migration and strangler patterns](topics/migration-and-strangler-patterns.md) — sr, system
- [Architecture decision records](topics/architecture-decision-records.md) — sr, system
