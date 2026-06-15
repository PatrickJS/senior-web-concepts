# Backend concepts

72 topics mapped into summaries and JavaScript/Node.js examples.

## Transport and protocol internals

Use this group to reason about how bytes move over the network, what happens under packet loss, and where protocol-level latency or head-of-line blocking comes from.

- [TCP congestion control algorithms](topics/tcp-congestion-control-algorithms.md) — sr, backend
- [TLS 1.3 handshake internals](topics/tls-1-3-handshake-internals.md) — sr, backend
- [HTTP/2 multiplexing & HPACK](topics/http-2-multiplexing-and-hpack.md) — sr, backend
- [HTTP/3 + QUIC packet loss recovery](topics/http-3-plus-quic-packet-loss-recovery.md) — sr, backend
- [Connection pooling pitfalls](topics/connection-pooling-pitfalls.md) — sr, backend
- [gRPC streaming + flow control](topics/grpc-streaming-plus-flow-control.md) — sr, backend

## Deployment and reliability patterns

Use this group to keep systems available while code, traffic, dependencies, and failure modes change.

- [Zero-downtime deployment strategies](topics/zero-downtime-deployment-strategies.md) — sr, backend
- [Circuit breaker + bulkhead patterns](topics/circuit-breaker-plus-bulkhead-patterns.md) — sr, backend
- [Database failover & split-brain prevention](topics/database-failover-and-split-brain-prevention.md) — sr, backend
- [Blue-green vs canary deployments](topics/blue-green-vs-canary-deployments.md) — sr, backend
- [Feature flags with rollout strategies](topics/feature-flags-with-rollout-strategies.md) — sr, backend

## Databases, storage, and transactions

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

- [Database transaction isolation levels (serializable vs snapshot)](topics/database-transaction-isolation-levels-serializable-vs-snapshot.md) — sr, backend
- [B-tree vs LSM-tree index internals](topics/b-tree-vs-lsm-tree-index-internals.md) — sr, backend
- [Query planner & cost-based optimization](topics/query-planner-and-cost-based-optimization.md) — sr, backend
- [Deadlock detection & prevention](topics/deadlock-detection-and-prevention.md) — sr, backend
- [ACID vs BASE trade-offs](topics/acid-vs-base-trade-offs.md) — sr, backend
- [Sharding strategies & hot partition avoidance](topics/sharding-strategies-and-hot-partition-avoidance.md) — sr, backend
- [Read replicas lag monitoring](topics/read-replicas-lag-monitoring.md) — sr, backend
- [Database connection pool exhaustion](topics/database-connection-pool-exhaustion.md) — sr, backend
- [Prepared statement caching](topics/prepared-statement-caching.md) — sr, backend
- [Index bloat & vacuum strategies](topics/index-bloat-and-vacuum-strategies.md) — sr, backend

## Distributed systems and consistency

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

- [Two-phase commit vs Saga pattern](topics/two-phase-commit-vs-saga-pattern.md) — sr, backend
- [Distributed locking (Redlock pitfalls)](topics/distributed-locking-redlock-pitfalls.md) — sr, backend
- [CAP theorem in practice](topics/cap-theorem-in-practice.md) — sr, backend
- [CRDTs & conflict-free replicated data types](topics/crdts-and-conflict-free-replicated-data-types.md) — sr, backend
- [Eventual consistency anti-patterns](topics/eventual-consistency-anti-patterns.md) — sr, backend
- [Idempotency keys in API design](topics/idempotency-keys-in-api-design.md) — sr, backend
- [Optimistic locking with version vectors](topics/optimistic-locking-with-version-vectors.md) — sr, backend
- [Paxos / Raft consensus internals](topics/paxos-raft-consensus-internals.md) — sr, backend
- [Byzantine fault tolerance basics](topics/byzantine-fault-tolerance-basics.md) — sr, backend
- [Exactly-once processing guarantees](topics/exactly-once-processing-guarantees.md) — sr, backend

## Messaging, streams, and event-driven systems

Use this group to design event pipelines that survive retries, reordering, backpressure, projection lag, and consumer failures.

- [Kafka partition rebalancing & exactly-once semantics](topics/kafka-partition-rebalancing-and-exactly-once-semantics.md) — sr, backend
- [RabbitMQ dead-letter queues & message ordering](topics/rabbitmq-dead-letter-queues-and-message-ordering.md) — sr, backend
- [Message-driven architecture (Akka / Orleans)](topics/message-driven-architecture-akka-orleans.md) — sr, backend
- [CQRS + Event Sourcing projections](topics/cqrs-plus-event-sourcing-projections.md) — sr, backend
- [Outbox pattern for reliable events](topics/outbox-pattern-for-reliable-events.md) — sr, backend
- [Background job queues (Celery / BullMQ) retry semantics](topics/background-job-queues-celery-bullmq-retry-semantics.md) — sr, backend
- [Data pipeline backpressure handling](topics/data-pipeline-backpressure-handling.md) — sr, backend
- [Idempotent consumers in event streams](topics/idempotent-consumers-in-event-streams.md) — sr, backend

## API design, auth, and edge controls

Use this group to make APIs safe, compatible, observable, throttled, cacheable, and resilient under N+1, auth, schema, or gateway pressure.

- [GraphQL resolver batching & N+1 problem](topics/graphql-resolver-batching-and-n-plus-1-problem.md) — sr, backend
- [OAuth2 token introspection vs JWT validation](topics/oauth2-token-introspection-vs-jwt-validation.md) — sr, backend
- [Rate limiting algorithms (token bucket vs leaky bucket)](topics/rate-limiting-algorithms-token-bucket-vs-leaky-bucket.md) — sr, backend
- [API gateway throttling & caching layers](topics/api-gateway-throttling-and-caching-layers.md) — sr, backend
- [API contract testing (Pact / Spring Cloud Contract)](topics/api-contract-testing-pact-spring-cloud-contract.md) — sr, backend
- [Backward-compatible schema evolution](topics/backward-compatible-schema-evolution.md) — sr, backend
- [Protobuf vs JSON performance trade-offs](topics/protobuf-vs-json-performance-trade-offs.md) — sr, backend

## Observability and operations

Use this group to make production behavior debuggable with traces, logs, metrics, cardinality control, sampling, and chaos experiments.

- [Observability: OpenTelemetry tracing propagation](topics/observability-opentelemetry-tracing-propagation.md) — sr, backend
- [Prometheus metric cardinality explosion](topics/prometheus-metric-cardinality-explosion.md) — sr, backend
- [Log aggregation with sampling](topics/log-aggregation-with-sampling.md) — sr, backend
- [Chaos engineering principles](topics/chaos-engineering-principles.md) — sr, backend
- [Microservices observability (distributed tracing)](topics/microservices-observability-distributed-tracing.md) — sr, backend

## Runtime, OS, and performance engineering

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

- [Memory-mapped files vs traditional I/O](topics/memory-mapped-files-vs-traditional-i-o.md) — sr, backend
- [Garbage collection tuning (G1 vs ZGC)](topics/garbage-collection-tuning-g1-vs-zgc.md) — sr, backend
- [Thread pools vs virtual threads (Project Loom)](topics/thread-pools-vs-virtual-threads-project-loom.md) — sr, backend
- [Actor model vs shared-memory concurrency](topics/actor-model-vs-shared-memory-concurrency.md) — sr, backend
- [Binary protocol parsing](topics/binary-protocol-parsing.md) — sr, backend
- [Zero-copy networking (sendfile)](topics/zero-copy-networking-sendfile.md) — sr, backend
- [epoll / kqueue internals](topics/epoll-kqueue-internals.md) — sr, backend
- [Syscall overhead & context switching](topics/syscall-overhead-and-context-switching.md) — sr, backend
- [Memory barriers & CPU cache coherence](topics/memory-barriers-and-cpu-cache-coherence.md) — sr, backend
- [Lock-free data structures](topics/lock-free-data-structures.md) — sr, backend
- [Virtual memory & page faults impact](topics/virtual-memory-and-page-faults-impact.md) — sr, backend

## Cloud, containers, and service topology

Use this group to model platform primitives like service meshes, discovery, sidecars, serverless, Kubernetes disruption controls, and container hardening.

- [Kubernetes pod disruption budgets](topics/kubernetes-pod-disruption-budgets.md) — sr, backend
- [Service mesh traffic shifting](topics/service-mesh-traffic-shifting.md) — sr, backend
- [Serverless cold-start mitigation](topics/serverless-cold-start-mitigation.md) — sr, backend
- [Container runtime security (seccomp, AppArmor)](topics/container-runtime-security-seccomp-apparmor.md) — sr, backend
- [Sidecar pattern limitations](topics/sidecar-pattern-limitations.md) — sr, backend
- [Service discovery (Consul vs DNS)](topics/service-discovery-consul-vs-dns.md) — sr, backend

## Caching, hashing, and approximate data structures

Use this group to design fast paths that remain correct enough under invalidation, shard movement, cardinality estimation, and hot-key pressure.

- [Distributed cache invalidation (cache-aside vs write-through)](topics/distributed-cache-invalidation-cache-aside-vs-write-through.md) — sr, backend
- [Eventual consistency in cache](topics/eventual-consistency-in-cache.md) — sr, backend
- [Bloom filters & HyperLogLog in practice](topics/bloom-filters-and-hyperloglog-in-practice.md) — sr, backend
- [Consistent hashing for load balancing](topics/consistent-hashing-for-load-balancing.md) — sr, backend
