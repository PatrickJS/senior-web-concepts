# System design requirements

**Role tag:** system
**Topics:** 29

Requirements for architecture trade-offs, capacity, reliability, boundaries, cost, security, and operational design.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- System Design: 28
- Network Engineering: 1

## Required concepts

### System Design

#### Design process and trade-offs

- [Functional vs non-functional requirements](../system-design/topics/functional-vs-non-functional-requirements.md) — Functional requirements describe what the system must do, while non-functional requirements describe qualities such as latency, availability, privacy, durability, scale, and cost. Senior design work makes both explicit before choosing components.
- [SLOs and error budgets](../system-design/topics/slos-and-error-budgets.md) — SLOs define target reliability for user-visible behavior, while error budgets quantify how much unreliability the system can spend. They turn vague reliability goals into decisions about release pace, alerting, redundancy, and degradation.

#### Scale, capacity, and latency

- [Capacity estimation](../system-design/topics/capacity-estimation.md) — Capacity estimation turns traffic, payload size, storage retention, fanout, and peak multipliers into concrete throughput and storage numbers. The goal is not perfect prediction; it is making bottlenecks and scaling assumptions visible.
- [Latency budget decomposition](../system-design/topics/latency-budget-decomposition.md) — A latency budget splits an end-to-end target across client work, network hops, edge logic, services, databases, queues, and third-party calls. It helps identify where parallelism, caching, streaming, or simplification is required.

#### Boundaries and topology

- [Client-edge-service boundaries](../system-design/topics/client-edge-service-boundaries.md) — Client, edge, and service boundaries decide where validation, personalization, caching, rendering, authorization, and aggregation live. Good boundaries reduce latency and coupling without leaking trusted responsibilities to untrusted environments.
- [API gateway and BFF boundaries](../system-design/topics/api-gateway-and-bff-boundaries.md) — An API gateway applies cross-cutting concerns such as auth, rate limits, caching, and routing, while a backend-for-frontend shapes APIs around a specific client experience. Mixing them carelessly can create a slow, overloaded coordination layer.
- [Read path vs write path design](../system-design/topics/read-path-vs-write-path-design.md) — Read paths and write paths often need different guarantees, storage models, caches, and scaling strategies. Separating them clarifies which flows require immediate correctness and which can tolerate projection lag or denormalized views.
- [Control plane vs data plane](../system-design/topics/control-plane-vs-data-plane.md) — The control plane configures policy and desired state, while the data plane handles the high-volume request or data path. Separating them keeps runtime traffic fast and resilient even when management workflows are slower or partially unavailable.

#### Data, consistency, and workflows

- [Data modeling from access patterns](../system-design/topics/data-modeling-from-access-patterns.md) — Access-pattern-first data modeling starts with queries, writes, cardinality, ordering, and consistency needs before choosing tables, documents, indexes, or streams. It prevents elegant schemas that cannot serve real traffic.
- [Cache placement and invalidation](../system-design/topics/cache-placement-and-invalidation.md) — Cache placement decides whether data is cached in the browser, edge, gateway, service, database layer, or client state. Invalidation must match freshness requirements, user specificity, mutation flow, and failure behavior.
- [Partitioning and tenant isolation](../system-design/topics/partitioning-and-tenant-isolation.md) — Partitioning splits data and traffic across shards, tenants, regions, or cells. Tenant isolation adds blast-radius control so one large or unhealthy tenant does not degrade unrelated customers.
- [Read freshness routing](../system-design/topics/read-freshness-routing.md) — Read freshness routing chooses between replicas, caches, primaries, or quorum reads based on how fresh a response must be. It is the system-level version of making read-your-writes and stale-data rules explicit.
- [Async workflow design](../system-design/topics/async-workflow-design.md) — Async workflow design coordinates durable state changes across queues, jobs, events, retries, and compensations. The design must define ownership, idempotency, retry semantics, visibility, and recovery after partial progress.

#### Reliability and operations

- [Failure mode analysis](../system-design/topics/failure-mode-analysis.md) — Failure mode analysis lists what can break, how the system detects it, what user impact it creates, and which mitigation applies. It converts architecture diagrams from happy-path pictures into operable designs.
- [Backpressure and load shedding](../system-design/topics/backpressure-and-load-shedding.md) — Backpressure slows producers when downstream systems are saturated, while load shedding rejects or drops work deliberately to preserve critical paths. A design should define queue limits, priorities, retry rules, and user-visible errors.
- [Degradation and fallback design](../system-design/topics/degradation-and-fallback-design.md) — Degradation and fallback design decides which features can be disabled, simplified, cached, or delayed when dependencies fail. Good fallbacks are intentional product states, not accidental error handling.
- [Disaster recovery objectives (RTO/RPO)](../system-design/topics/disaster-recovery-objectives-rto-rpo.md) — RTO is how long recovery may take, and RPO is how much data loss is acceptable. These objectives drive backup frequency, replication, failover automation, drills, and whether the design needs active-active or active-passive recovery.
- [Operational readiness review](../system-design/topics/operational-readiness-review.md) — Operational readiness checks whether a system can be deployed, observed, rolled back, debugged, scaled, secured, and supported before it handles real traffic. It is the practical bridge between design and production ownership.
- [Tracing across async workflows](../system-design/topics/tracing-across-async-workflows.md) — Tracing across async workflows carries correlation through requests, events, jobs, retries, and projections. Without it, the system can appear healthy while individual user workflows disappear between components.
- [Runbook and alert design](../system-design/topics/runbook-and-alert-design.md) — Runbook and alert design connects symptoms to ownership, impact, first checks, mitigation, and escalation. Alerts should be tied to user impact or fast-burn risk, not every noisy internal metric.
- [Release strategy selection](../system-design/topics/release-strategy-selection.md) — Release strategy selection chooses between rolling, blue-green, canary, feature flags, shadow traffic, and migrations based on blast radius, reversibility, data compatibility, and confidence signals.

#### Security, abuse, and governance

- [Threat modeling at system boundaries](../system-design/topics/threat-modeling-at-system-boundaries.md) — Threat modeling at system boundaries identifies trust zones, entry points, assets, attackers, and mitigations. It keeps security connected to architecture instead of treating it as a checklist after implementation.
- [Abuse and quota controls](../system-design/topics/abuse-and-quota-controls.md) — Abuse and quota controls protect systems from spam, scraping, brute force, runaway automation, and unfair resource use. Effective designs combine identity, rate limits, quotas, anomaly detection, and appeal paths.
- [Secret and configuration boundaries](../system-design/topics/secret-and-configuration-boundaries.md) — Secret and configuration boundaries define where credentials, feature flags, tenant settings, and runtime policy may live. A safe design prevents secrets from leaking to clients, logs, traces, build artifacts, or untrusted plugins.

#### Cost, evolution, and decision records

- [Cost-aware architecture](../system-design/topics/cost-aware-architecture.md) — Cost-aware architecture models the cost drivers of traffic, storage, compute, egress, third-party APIs, observability, and operational effort. It does not mean choosing the cheapest path; it means making cost part of the design trade-off.
- [Build vs buy evaluation](../system-design/topics/build-vs-buy-evaluation.md) — Build vs buy evaluation compares capability fit, integration risk, lock-in, security, operations, support, cost curves, and strategic differentiation. The useful answer is often a staged decision, not a permanent ideology.
- [Migration and strangler patterns](../system-design/topics/migration-and-strangler-patterns.md) — Migration and strangler patterns replace systems incrementally by routing slices of traffic or capability to the new path while the old path keeps running. The design must include parity checks, rollback, data sync, and ownership boundaries.
- [Architecture decision records](../system-design/topics/architecture-decision-records.md) — Architecture decision records capture context, decision, alternatives, consequences, and revisit triggers. They preserve the reasoning behind trade-offs so future engineers can change direction without rediscovering old constraints.

### Network Engineering

#### Service networking and cloud topology

- [Multi-region failover routing](../network-engineering/topics/multi-region-failover-routing.md) — Multi-region failover routing directs users away from unhealthy regions while balancing recovery time, data consistency, DNS or edge cache behavior, and traffic-drain safety. It must be tested before an incident.
