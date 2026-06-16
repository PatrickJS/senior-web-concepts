# Backend requirements

**Role tag:** backend
**Topics:** 101

Requirements for APIs, services, databases, distributed systems, runtime behavior, and production backend ownership.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Backend: 72
- Data & Storage Engineering: 20
- Platform Engineering: 5
- Network Engineering: 4

## Required concepts

### Backend

#### Transport and protocol internals

- [TCP congestion control algorithms](../backend/topics/tcp-congestion-control-algorithms.md) — TCP congestion control adjusts send rate based on acknowledgements, loss, and inferred network capacity. A clear answer mentions slow start, congestion avoidance, multiplicative decrease, RTT, packet loss, and fairness.
- [TLS 1.3 handshake internals](../backend/topics/tls-1-3-handshake-internals.md) — TLS 1.3 reduces handshake round trips and encrypts more of the negotiation than TLS 1.2. Key concepts are ClientHello, key share, certificate verification, Finished messages, forward secrecy, and optional 0-RTT replay risk.
- [HTTP/2 multiplexing & HPACK](../backend/topics/http-2-multiplexing-and-hpack.md) — HTTP/2 multiplexes many streams over one TCP connection and compresses headers with HPACK dynamic tables. It removes HTTP/1.1 request queueing but can still suffer TCP-level head-of-line blocking.
- [HTTP/3 + QUIC packet loss recovery](../backend/topics/http-3-plus-quic-packet-loss-recovery.md) — HTTP/3 uses QUIC over UDP, combining TLS 1.3, multiplexed streams, connection migration, and per-stream loss recovery. Packet loss no longer blocks unrelated streams the same way HTTP/2 over TCP can.
- [Connection pooling pitfalls](../backend/topics/connection-pooling-pitfalls.md) — Connection pools reduce setup cost but can fail through exhaustion, stale sockets, head-of-line blocking, uneven load, leaks, or pool sizes that exceed database/server limits. Correct sizing and timeout behavior matter.
- [gRPC streaming + flow control](../backend/topics/grpc-streaming-plus-flow-control.md) — gRPC streaming sends multiple messages over HTTP/2 streams with flow control. A good explanation covers client/server/bidirectional streams, backpressure, message framing, deadlines, cancellation, and per-stream windows.

#### Deployment and reliability patterns

- [Zero-downtime deployment strategies](../backend/topics/zero-downtime-deployment-strategies.md) — Zero-downtime deployment keeps traffic served while replacing code. Common techniques include readiness probes, draining, blue-green, canary, backward-compatible schemas, feature flags, and fast rollback.
- [Circuit breaker + bulkhead patterns](../backend/topics/circuit-breaker-plus-bulkhead-patterns.md) — Circuit breakers stop calling failing dependencies temporarily; bulkheads isolate resource pools so one failing area does not exhaust the entire service. Together they prevent cascading failures.
- [Database failover & split-brain prevention](../backend/topics/database-failover-and-split-brain-prevention.md) — Failover promotes a standby when primary fails; split-brain occurs when multiple primaries accept writes. Prevention uses quorum, fencing tokens, leases, STONITH-style isolation, and conservative promotion rules.
- [Blue-green vs canary deployments](../backend/topics/blue-green-vs-canary-deployments.md) — Blue-green switches traffic between two full environments; canary gradually shifts a small percentage to a new version. Blue-green is simpler rollback, while canary gives safer progressive exposure.
- [Feature flags with rollout strategies](../backend/topics/feature-flags-with-rollout-strategies.md) — Feature flags decouple deploy from release and allow targeting, gradual rollout, kill switches, and experiments. Good systems need stable bucketing, auditability, cleanup, and dependency management.

#### Databases, storage, and transactions

- [Database transaction isolation levels (serializable vs snapshot)](../backend/topics/database-transaction-isolation-levels-serializable-vs-snapshot.md) — Isolation levels define which concurrent transaction anomalies are possible. Snapshot isolation gives each transaction a consistent view but can allow write skew; serializable aims to behave as if transactions ran one at a time.
- [B-tree vs LSM-tree index internals](../backend/topics/b-tree-vs-lsm-tree-index-internals.md) — B-trees maintain ordered pages for efficient point and range reads, while LSM-trees buffer writes and compact sorted files later. The trade-off is read amplification versus write throughput and compaction cost.
- [Query planner & cost-based optimization](../backend/topics/query-planner-and-cost-based-optimization.md) — A cost-based query planner estimates alternative execution plans using statistics, selectivity, join order, index availability, and I/O/CPU costs. Bad stats or parameter skew can produce poor plans.
- [Deadlock detection & prevention](../backend/topics/deadlock-detection-and-prevention.md) — Deadlocks occur when transactions wait on each other in a cycle. Databases detect cycles in wait-for graphs or prevent them with lock ordering, timeouts, smaller transactions, and consistent access patterns.
- [ACID vs BASE trade-offs](../backend/topics/acid-vs-base-trade-offs.md) — ACID emphasizes atomicity, consistency, isolation, and durability; BASE accepts softer consistency for availability and scalability. The real decision is which invariants must be immediately correct versus eventually reconciled.
- [Sharding strategies & hot partition avoidance](../backend/topics/sharding-strategies-and-hot-partition-avoidance.md) — Sharding splits data across partitions by key, range, hash, tenant, or geography. Hot partitions happen when too much traffic targets one shard and are mitigated with better keys, salting, splitting, and load-aware routing.
- [Read replicas lag monitoring](../backend/topics/read-replicas-lag-monitoring.md) — Read replica lag is the delay between primary writes and replica visibility. Monitoring should track replication position/time lag and route read-your-writes or critical reads to fresh sources when needed.
- [Database connection pool exhaustion](../backend/topics/database-connection-pool-exhaustion.md) — Pool exhaustion occurs when all DB connections are busy or leaked. Symptoms include request pileups, timeouts, and cascading latency; fixes include smaller transactions, timeouts, queue limits, and right-sized pools.
- [Prepared statement caching](../backend/topics/prepared-statement-caching.md) — Prepared statement caching reuses parsed/planned SQL statements to reduce overhead and improve safety. Pitfalls include unbounded caches, schema changes, connection-specific state, and bad generic plans.
- [Index bloat & vacuum strategies](../backend/topics/index-bloat-and-vacuum-strategies.md) — Index bloat is wasted index space from dead or outdated entries, common in MVCC systems. Vacuuming, autovacuum tuning, fillfactor choices, and periodic reindexing control space and planner quality.

#### Distributed systems and consistency

- [Two-phase commit vs Saga pattern](../backend/topics/two-phase-commit-vs-saga-pattern.md) — Two-phase commit coordinates participants for atomic commit but can block and depends on a coordinator. Sagas split work into local transactions with compensating actions, trading atomicity for availability and explicit recovery.
- [Distributed locking (Redlock pitfalls)](../backend/topics/distributed-locking-redlock-pitfalls.md) — Distributed locks are hard because clocks, partitions, pauses, and delayed clients can violate mutual exclusion. Redlock-style leases need careful TTL assumptions and often require fencing tokens to protect downstream resources.
- [CAP theorem in practice](../backend/topics/cap-theorem-in-practice.md) — CAP says that during a network partition a distributed system must choose between consistency and availability. In practice, systems make per-operation trade-offs with leader routing, quorum reads/writes, retries, and degraded modes.
- [CRDTs & conflict-free replicated data types](../backend/topics/crdts-and-conflict-free-replicated-data-types.md) — CRDTs let replicas update independently and merge deterministically without coordination. Backend use cases include counters, sets, presence, collaborative state, and eventually consistent multi-region writes.
- [Eventual consistency anti-patterns](../backend/topics/eventual-consistency-anti-patterns.md) — Eventual consistency becomes an anti-pattern when product flows require immediate guarantees but the system hides lag. Examples include stale permission reads, double spends, missing read-your-writes, and silent conflict overwrites.
- [Idempotency keys in API design](../backend/topics/idempotency-keys-in-api-design.md) — Idempotency keys let clients safely retry state-changing requests without creating duplicate side effects. The server stores the key, request fingerprint, status, and response for a defined retention window.
- [Optimistic locking with version vectors](../backend/topics/optimistic-locking-with-version-vectors.md) — Optimistic locking detects conflicts by comparing a version or vector before write commit. Version vectors track causal progress across replicas and can distinguish stale writes from concurrent writes.
- [Paxos / Raft consensus internals](../backend/topics/paxos-raft-consensus-internals.md) — Consensus protocols let distributed nodes agree on ordered state despite failures. Raft explains this through leader election, terms, logs, majorities, commit indexes, and safety rules.
- [Byzantine fault tolerance basics](../backend/topics/byzantine-fault-tolerance-basics.md) — Byzantine fault tolerance handles nodes that can lie, collude, or behave arbitrarily. Classic BFT requires more replicas than crash fault tolerance, commonly 3f+1 replicas to tolerate f Byzantine faults.
- [Exactly-once processing guarantees](../backend/topics/exactly-once-processing-guarantees.md) — Exactly-once usually means effects are applied once through idempotency and transactions, not that messages are delivered once. Strong answers distinguish delivery, processing, side effects, offsets, and sink commits.

#### Messaging, streams, and event-driven systems

- [Kafka partition rebalancing & exactly-once semantics](../backend/topics/kafka-partition-rebalancing-and-exactly-once-semantics.md) — Kafka rebalancing moves partitions across consumers when group membership changes, causing pauses and offset coordination. Exactly-once semantics rely on idempotent producers, transactions, committed offsets, and careful sink behavior.
- [RabbitMQ dead-letter queues & message ordering](../backend/topics/rabbitmq-dead-letter-queues-and-message-ordering.md) — RabbitMQ dead-letter queues capture rejected, expired, or failed messages for later handling. Ordering can be broken by retries, multiple consumers, requeueing, priorities, and dead-letter routing.
- [Message-driven architecture (Akka / Orleans)](../backend/topics/message-driven-architecture-akka-orleans.md) — Message-driven architecture structures systems around asynchronous messages and handlers. It improves decoupling and resilience but introduces delivery guarantees, ordering, retries, idempotency, and observability requirements.
- [CQRS + Event Sourcing projections](../backend/topics/cqrs-plus-event-sourcing-projections.md) — CQRS separates command writes from query reads, and event sourcing records state changes as events. Projections build read models from those events and must handle replay, lag, schema changes, and idempotency.
- [Outbox pattern for reliable events](../backend/topics/outbox-pattern-for-reliable-events.md) — The outbox pattern writes domain data and an event record in the same database transaction, then a relay publishes the event. It avoids losing events between DB commit and broker publish.
- [Background job queues (Celery / BullMQ) retry semantics](../backend/topics/background-job-queues-celery-bullmq-retry-semantics.md) — Job queues need explicit retry, backoff, dead-letter, timeout, and idempotency semantics. Without them, jobs can duplicate side effects, poison queues, or hide permanent failures behind endless retries.
- [Data pipeline backpressure handling](../backend/topics/data-pipeline-backpressure-handling.md) — Pipeline backpressure prevents upstream producers from overwhelming downstream consumers. It is implemented with bounded queues, credits, pull-based reads, pause/resume, rate limits, and load shedding.
- [Idempotent consumers in event streams](../backend/topics/idempotent-consumers-in-event-streams.md) — Idempotent consumers handle duplicate events safely by recording processed IDs, using natural keys, checking versions, or making writes commutative. This is required because retries and rebalances can redeliver messages.

#### API design, auth, and edge controls

- [GraphQL resolver batching & N+1 problem](../backend/topics/graphql-resolver-batching-and-n-plus-1-problem.md) — The GraphQL N+1 problem happens when nested resolvers issue one backend query per parent object. Batching and caching loaders group keys per tick or request to reduce queries while preserving resolver composition.
- [OAuth2 token introspection vs JWT validation](../backend/topics/oauth2-token-introspection-vs-jwt-validation.md) — JWT validation checks signed claims locally, while token introspection asks the authorization server whether a token is active. JWTs reduce latency but are harder to revoke instantly; introspection centralizes truth but adds network dependency.
- [Rate limiting algorithms (token bucket vs leaky bucket)](../backend/topics/rate-limiting-algorithms-token-bucket-vs-leaky-bucket.md) — Token bucket allows bursts up to bucket capacity while refilling over time; leaky bucket smooths output at a fixed rate. The right choice depends on burst tolerance, fairness, and user experience.
- [API gateway throttling & caching layers](../backend/topics/api-gateway-throttling-and-caching-layers.md) — API gateways enforce cross-cutting policies such as auth, rate limits, request validation, caching, and routing. Caching must vary on identity, authorization, headers, and query shape to avoid data leaks.
- [API contract testing (Pact / Spring Cloud Contract)](../backend/topics/api-contract-testing-pact-spring-cloud-contract.md) — Contract testing verifies that providers and consumers agree on request/response behavior. It catches breaking changes earlier than full integration tests and supports independent service deployment.
- [Backward-compatible schema evolution](../backend/topics/backward-compatible-schema-evolution.md) — Backward-compatible schema evolution changes APIs or events without breaking old consumers. Common moves are additive fields, default values, tolerant readers, deprecation windows, and dual-read/write migrations.
- [Protobuf vs JSON performance trade-offs](../backend/topics/protobuf-vs-json-performance-trade-offs.md) — Protobuf is compact, typed, and schema-driven; JSON is human-readable and ubiquitous. Trade-offs include payload size, CPU parse cost, compatibility rules, introspection, tooling, and browser/debug ergonomics.

#### Observability and operations

- [Observability: OpenTelemetry tracing propagation](../backend/topics/observability-opentelemetry-tracing-propagation.md) — Tracing propagation carries trace and span context across service boundaries. OpenTelemetry standardizes context extraction/injection so logs, metrics, and spans can be correlated across distributed requests.
- [Prometheus metric cardinality explosion](../backend/topics/prometheus-metric-cardinality-explosion.md) — Cardinality explosion happens when labels create too many unique time series. User IDs, raw URLs, emails, request IDs, and high-cardinality dimensions can make Prometheus expensive or unusable.
- [Log aggregation with sampling](../backend/topics/log-aggregation-with-sampling.md) — Log sampling reduces volume while preserving important signals. Good policies keep all errors/security events, sample noisy success paths, and attach trace IDs so sampled logs still join a request story.
- [Chaos engineering principles](../backend/topics/chaos-engineering-principles.md) — Chaos engineering tests resilience by injecting controlled failures into production-like systems. It should start with hypotheses, blast-radius limits, rollback, observability, and learning from the result.
- [Microservices observability (distributed tracing)](../backend/topics/microservices-observability-distributed-tracing.md) — Distributed tracing follows one request across services, queues, and databases. It requires context propagation, span naming discipline, sampling, baggage caution, and correlation with logs and metrics.

#### Runtime, OS, and performance engineering

- [Memory-mapped files vs traditional I/O](../backend/topics/memory-mapped-files-vs-traditional-i-o.md) — Memory-mapped files map file pages into process address space, letting the OS page data in lazily. Traditional I/O copies through explicit buffers. Node does not expose mmap directly, so streams and buffers are the usual tools.
- [Garbage collection tuning (G1 vs ZGC)](../backend/topics/garbage-collection-tuning-g1-vs-zgc.md) — G1 and ZGC are JVM collectors with different pause/throughput trade-offs; in Node the analogous topic is V8 heap sizing and GC behavior. Strong explanations separate allocation rate, live set, pause time, and throughput.
- [Thread pools vs virtual threads (Project Loom)](../backend/topics/thread-pools-vs-virtual-threads-project-loom.md) — Thread pools bound scarce OS threads; virtual threads multiplex many blocking-style tasks onto fewer carrier threads in the JVM. In Node, the closest contrast is async I/O plus worker threads for CPU-bound work.
- [Actor model vs shared-memory concurrency](../backend/topics/actor-model-vs-shared-memory-concurrency.md) — The actor model isolates state behind message queues, while shared-memory concurrency shares mutable state with locks or atomics. Actors simplify reasoning but require backpressure and message ordering design.
- [Binary protocol parsing](../backend/topics/binary-protocol-parsing.md) — Binary protocol parsing reads structured fields from byte buffers using offsets, endianness, lengths, and framing rules. Correct parsers defend against partial frames, oversized lengths, and malicious input.
- [Zero-copy networking (sendfile)](../backend/topics/zero-copy-networking-sendfile.md) — Zero-copy networking avoids copying file data through user-space buffers, often with sendfile-like kernel paths. Node typically approximates this with efficient streams, though true sendfile exposure depends on runtime/platform.
- [epoll / kqueue internals](../backend/topics/epoll-kqueue-internals.md) — epoll and kqueue are OS event notification mechanisms for scalable nonblocking I/O. Node relies on libuv abstractions over these primitives to drive sockets, timers, and file events.
- [Syscall overhead & context switching](../backend/topics/syscall-overhead-and-context-switching.md) — System calls and context switches cross boundaries between user space, kernel space, and runnable tasks. Batching, buffering, async I/O, and fewer tiny writes reduce overhead.
- [Memory barriers & CPU cache coherence](../backend/topics/memory-barriers-and-cpu-cache-coherence.md) — Memory barriers constrain how CPU cores reorder reads/writes so shared-memory programs observe safe ordering. In JavaScript, Atomics operations on SharedArrayBuffer provide the relevant synchronization primitives.
- [Lock-free data structures](../backend/topics/lock-free-data-structures.md) — Lock-free data structures use atomic operations instead of mutexes so system-wide progress continues even if one thread stalls. They are hard to design because of ABA, memory ordering, and contention.
- [Virtual memory & page faults impact](../backend/topics/virtual-memory-and-page-faults-impact.md) — Virtual memory lets processes use address spaces backed by physical memory and disk. Page faults occur when needed pages are not resident, causing latency from allocation, disk, or OS bookkeeping.

#### Cloud, containers, and service topology

- [Kubernetes pod disruption budgets](../backend/topics/kubernetes-pod-disruption-budgets.md) — Pod disruption budgets limit voluntary disruptions so enough replicas remain available during drains, upgrades, or maintenance. They are useful only when paired with enough replicas, readiness probes, and capacity.
- [Service mesh traffic shifting](../backend/topics/service-mesh-traffic-shifting.md) — Service mesh traffic shifting routes percentages of traffic between versions or services using proxy control planes. It supports canary, blue-green, retries, and mTLS, but adds latency, complexity, and debugging surface.
- [Serverless cold-start mitigation](../backend/topics/serverless-cold-start-mitigation.md) — Cold starts happen when a serverless runtime initializes before handling a request. Mitigation includes smaller bundles, hoisted clients, lazy initialization, provisioned concurrency, and avoiding heavy startup work.
- [Container runtime security (seccomp, AppArmor)](../backend/topics/container-runtime-security-seccomp-apparmor.md) — Container runtime security restricts what a process can do despite sharing the host kernel. seccomp filters syscalls, AppArmor/SELinux constrain access, and least-privilege settings reduce blast radius.
- [Sidecar pattern limitations](../backend/topics/sidecar-pattern-limitations.md) — Sidecars add colocated helper processes for proxying, logging, security, or config. Limitations include extra hops, resource overhead, lifecycle coupling, harder debugging, and duplicated functionality per pod.
- [Service discovery (Consul vs DNS)](../backend/topics/service-discovery-consul-vs-dns.md) — Service discovery maps logical service names to healthy instances. DNS is simple and ubiquitous; Consul-style systems can add health checks, metadata, watches, and stronger service catalog semantics.

#### Caching, hashing, and approximate data structures

- [Distributed cache invalidation (cache-aside vs write-through)](../backend/topics/distributed-cache-invalidation-cache-aside-vs-write-through.md) — Cache-aside loads on miss and invalidates after writes; write-through writes cache and database together. Distributed invalidation must handle races, partial failures, versioning, and cross-node propagation delay.
- [Eventual consistency in cache](../backend/topics/eventual-consistency-in-cache.md) — Eventually consistent caches can serve stale data after writes, invalidations, or replication delays. Safe design scopes staleness, uses versions, routes critical reads to truth, and avoids caching irreversible authorization decisions incorrectly.
- [Bloom filters & HyperLogLog in practice](../backend/topics/bloom-filters-and-hyperloglog-in-practice.md) — Bloom filters answer maybe-present/definitely-not-present with false positives; HyperLogLog estimates cardinality with small memory. Both trade exactness for speed and memory efficiency.
- [Consistent hashing for load balancing](../backend/topics/consistent-hashing-for-load-balancing.md) — Consistent hashing maps keys to nodes so adding or removing nodes moves only a fraction of keys. It is useful for caches, shards, and load balancing with reduced remapping churn.

### Data & Storage Engineering

#### Relational modeling and SQL

- [Relational schema design](../data-storage/topics/relational-schema-design.md) — Relational schema design maps domain entities, relationships, constraints, and access patterns into tables that can preserve integrity over time. Good design uses keys, constraints, naming, cardinality, and ownership boundaries deliberately.
- [SQL joins and query shape](../data-storage/topics/sql-joins-and-query-shape.md) — SQL joins combine rows across tables, but query shape determines cardinality, duplicate rows, filter placement, and whether the database can use indexes. Engineers should explain inner, outer, semi, and anti joins from result semantics first.
- [Normalization vs denormalization](../data-storage/topics/normalization-vs-denormalization.md) — Normalization reduces duplication and update anomalies, while denormalization duplicates data to speed reads or simplify access. The trade-off is correctness and write complexity versus query performance and product latency.
- [Data integrity constraints](../data-storage/topics/data-integrity-constraints.md) — Data integrity constraints make correctness durable inside the database through primary keys, foreign keys, unique constraints, checks, not-null rules, and exclusion constraints. They protect invariants even when application code has bugs.
- [Temporal data modeling](../data-storage/topics/temporal-data-modeling.md) — Temporal modeling captures when facts are valid, when the system learned them, and how history changes. It matters for auditability, pricing, entitlement windows, late-arriving updates, and reproducible analytics.

#### Indexing and query performance

- [Index selection and covering indexes](../data-storage/topics/index-selection-and-covering-indexes.md) — Index selection matches workload filters, joins, ordering, uniqueness, and projection columns. Covering indexes can serve a query without visiting base rows, but they increase write cost and storage.
- [Query execution plan reading](../data-storage/topics/query-execution-plan-reading.md) — Query plans show how the database intends to scan, join, sort, aggregate, and estimate row counts. Reading plans helps diagnose missing indexes, stale statistics, bad join order, and memory-heavy operations.
- [Statistics and cardinality estimation](../data-storage/topics/statistics-and-cardinality-estimation.md) — Statistics and cardinality estimates let a planner compare possible execution paths. Bad estimates from skew, correlation, stale stats, or parameter sensitivity can make reasonable SQL run poorly.
- [Connection pool sizing](../data-storage/topics/connection-pool-sizing.md) — Connection pool sizing balances application concurrency against database capacity. Too few connections bottleneck callers; too many cause queueing, memory pressure, lock contention, and database overload.
- [Hot query and slow query triage](../data-storage/topics/hot-query-and-slow-query-triage.md) — Hot query triage identifies the queries that dominate database load by frequency, latency, rows scanned, lock wait, and memory use. Fixes can include index changes, query rewrites, caching, pagination, or product flow changes.

#### Transactions, migrations, and integrity

- [Transaction boundary design](../data-storage/topics/transaction-boundary-design.md) — Transaction boundary design decides which reads and writes must commit atomically, how long locks are held, and what invariants need isolation. Boundaries that are too wide hurt concurrency; too narrow leak partial state.
- [Schema migration expand-contract](../data-storage/topics/schema-migration-expand-contract.md) — Expand-contract migrations introduce schema changes in backward-compatible phases: expand, dual-read/write or backfill, cut over, then contract. This keeps old and new code safe during rolling deploys.
- [Online backfills](../data-storage/topics/online-backfills.md) — Online backfills update existing data while production traffic continues. Safe backfills use batches, checkpoints, idempotency, throttling, observability, and rollback or pause behavior.
- [Optimistic concurrency control](../data-storage/topics/optimistic-concurrency-control.md) — Optimistic concurrency control detects conflicting writes with versions, timestamps, compare-and-swap, or conditional updates. It works well when conflicts are rare and retry behavior is explicit.
- [Idempotent data writes](../data-storage/topics/idempotent-data-writes.md) — Idempotent writes make retries safe by using stable operation IDs, uniqueness constraints, upserts, or processed-event tables. They are essential when clients, workers, or queues can repeat work.

#### Storage topology and replication

- [Partitioning and sharding strategy](../data-storage/topics/partitioning-and-sharding-strategy.md) — Partitioning and sharding split data by tenant, key, hash, range, geography, or workload. A good strategy minimizes hot partitions, cross-shard joins, rebalancing pain, and tenant blast radius.
- [Replication lag and read scaling](../data-storage/topics/replication-lag-and-read-scaling.md) — Read replicas increase read capacity but introduce freshness lag and failover complexity. Designs must define which reads can be stale, how lag is measured, and when to route to the primary.
- [Search indexing and relevance](../data-storage/topics/search-indexing-and-relevance.md) — Search indexing transforms source records into searchable documents with tokenization, ranking signals, filters, facets, and freshness rules. Search is a derived data system that needs sync and repair paths.

#### Analytics, pipelines, and governance

- [OLTP vs OLAP system choice](../data-storage/topics/oltp-vs-olap-system-choice.md) — OLTP systems optimize transactional correctness and low-latency writes, while OLAP systems optimize analytical scans and aggregations. Mixing them without boundaries can hurt both product behavior and reporting.
- [CDC and event streams](../data-storage/topics/cdc-and-event-streams.md) — Change data capture turns database changes into ordered event streams for replication, search indexing, analytics, or integration. It must handle ordering, deletes, schema evolution, backfills, and replay.

### Platform Engineering

#### Source control, CI, and release automation

- [Git workflow and branch protection](../platform-engineering/topics/git-workflow-and-branch-protection.md) — Git workflow and branch protection define how changes move from local work to reviewed, tested, mergeable history. Useful controls include required checks, protected branches, signed commits or tags, and review ownership.

#### Infrastructure, environments, and cloud networking

- [Load balancing and health checks](../platform-engineering/topics/load-balancing-and-health-checks.md) — Load balancing distributes traffic across healthy targets, while health checks decide whether a target should receive traffic. Bad checks can amplify incidents by sending traffic to broken or warming instances.

#### Containers, orchestration, and runtime platforms

- [Serverless operational constraints](../platform-engineering/topics/serverless-operational-constraints.md) — Serverless platforms remove server management but introduce limits around cold starts, execution duration, concurrency, packaging, network access, and observability. The runtime shape must fit the workload.

#### Observability, incidents, and operations

- [Observability baseline](../platform-engineering/topics/observability-baseline.md) — An observability baseline defines the minimum logs, metrics, traces, dashboards, and service metadata every production service should expose. It lets responders compare systems quickly during incidents.

#### Developer experience and platform product

- [Feature flag operations](../platform-engineering/topics/feature-flag-operations.md) — Feature flag operations manage targeting, ownership, cleanup, defaults, audit logs, and failure behavior. Without lifecycle discipline, flags become hidden production configuration debt.

### Network Engineering

#### DNS, TLS, and edge delivery

- [HTTP proxy and reverse proxy behavior](../network-engineering/topics/http-proxy-and-reverse-proxy-behavior.md) — HTTP proxies and reverse proxies terminate, forward, rewrite, buffer, retry, and observe traffic between clients and services. Headers such as Host, X-Forwarded-For, and Forwarded become trust boundaries.

#### Transport protocols and performance

- [TCP handshake and connection lifecycle](../network-engineering/topics/tcp-handshake-and-connection-lifecycle.md) — The TCP handshake and connection lifecycle establish reliable ordered byte streams, then tear them down with FIN or RST behavior. Connection setup, reuse, idle timeouts, and keepalives affect latency and failure handling.
- [TCP congestion and packet loss](../network-engineering/topics/tcp-congestion-and-packet-loss.md) — TCP congestion control adjusts sending rate based on acknowledgements, loss, delay, and congestion window behavior. Packet loss and retransmits can turn a healthy service into a slow one before application metrics show errors.
- [UDP, QUIC, and connection migration](../network-engineering/topics/udp-quic-and-connection-migration.md) — UDP gives applications datagrams without TCP's built-in reliability, while QUIC builds encrypted streams, loss recovery, and connection migration over UDP. This changes how latency, packet loss, and client network changes are handled.
