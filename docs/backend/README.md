# Backend concepts

72 topics mapped into summaries and JavaScript/Node.js examples.

## Transport and protocol internals

Use this group to reason about how bytes move over the network, what happens under packet loss, and where protocol-level latency or head-of-line blocking comes from.

- [TCP congestion control algorithms](topics/tcp-congestion-control-algorithms.md)
- [TLS 1.3 handshake internals](topics/tls-1-3-handshake-internals.md)
- [HTTP/2 multiplexing & HPACK](topics/http-2-multiplexing-and-hpack.md)
- [HTTP/3 + QUIC packet loss recovery](topics/http-3-plus-quic-packet-loss-recovery.md)
- [Connection pooling pitfalls](topics/connection-pooling-pitfalls.md)
- [gRPC streaming + flow control](topics/grpc-streaming-plus-flow-control.md)

## Deployment and reliability patterns

Use this group to keep systems available while code, traffic, dependencies, and failure modes change.

- [Zero-downtime deployment strategies](topics/zero-downtime-deployment-strategies.md)
- [Circuit breaker + bulkhead patterns](topics/circuit-breaker-plus-bulkhead-patterns.md)
- [Database failover & split-brain prevention](topics/database-failover-and-split-brain-prevention.md)
- [Blue-green vs canary deployments](topics/blue-green-vs-canary-deployments.md)
- [Feature flags with rollout strategies](topics/feature-flags-with-rollout-strategies.md)

## Databases, storage, and transactions

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

- [Database transaction isolation levels (serializable vs snapshot)](topics/database-transaction-isolation-levels-serializable-vs-snapshot.md)
- [B-tree vs LSM-tree index internals](topics/b-tree-vs-lsm-tree-index-internals.md)
- [Query planner & cost-based optimization](topics/query-planner-and-cost-based-optimization.md)
- [Deadlock detection & prevention](topics/deadlock-detection-and-prevention.md)
- [ACID vs BASE trade-offs](topics/acid-vs-base-trade-offs.md)
- [Sharding strategies & hot partition avoidance](topics/sharding-strategies-and-hot-partition-avoidance.md)
- [Read replicas lag monitoring](topics/read-replicas-lag-monitoring.md)
- [Database connection pool exhaustion](topics/database-connection-pool-exhaustion.md)
- [Prepared statement caching](topics/prepared-statement-caching.md)
- [Index bloat & vacuum strategies](topics/index-bloat-and-vacuum-strategies.md)

## Distributed systems and consistency

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

- [Two-phase commit vs Saga pattern](topics/two-phase-commit-vs-saga-pattern.md)
- [Distributed locking (Redlock pitfalls)](topics/distributed-locking-redlock-pitfalls.md)
- [CAP theorem in practice](topics/cap-theorem-in-practice.md)
- [CRDTs & conflict-free replicated data types](topics/crdts-and-conflict-free-replicated-data-types.md)
- [Eventual consistency anti-patterns](topics/eventual-consistency-anti-patterns.md)
- [Idempotency keys in API design](topics/idempotency-keys-in-api-design.md)
- [Optimistic locking with version vectors](topics/optimistic-locking-with-version-vectors.md)
- [Paxos / Raft consensus internals](topics/paxos-raft-consensus-internals.md)
- [Byzantine fault tolerance basics](topics/byzantine-fault-tolerance-basics.md)
- [Exactly-once processing guarantees](topics/exactly-once-processing-guarantees.md)

## Messaging, streams, and event-driven systems

Use this group to design event pipelines that survive retries, reordering, backpressure, projection lag, and consumer failures.

- [Kafka partition rebalancing & exactly-once semantics](topics/kafka-partition-rebalancing-and-exactly-once-semantics.md)
- [RabbitMQ dead-letter queues & message ordering](topics/rabbitmq-dead-letter-queues-and-message-ordering.md)
- [Message-driven architecture (Akka / Orleans)](topics/message-driven-architecture-akka-orleans.md)
- [CQRS + Event Sourcing projections](topics/cqrs-plus-event-sourcing-projections.md)
- [Outbox pattern for reliable events](topics/outbox-pattern-for-reliable-events.md)
- [Background job queues (Celery / BullMQ) retry semantics](topics/background-job-queues-celery-bullmq-retry-semantics.md)
- [Data pipeline backpressure handling](topics/data-pipeline-backpressure-handling.md)
- [Idempotent consumers in event streams](topics/idempotent-consumers-in-event-streams.md)

## API design, auth, and edge controls

Use this group to make APIs safe, compatible, observable, throttled, cacheable, and resilient under N+1, auth, schema, or gateway pressure.

- [GraphQL resolver batching & N+1 problem](topics/graphql-resolver-batching-and-n-plus-1-problem.md)
- [OAuth2 token introspection vs JWT validation](topics/oauth2-token-introspection-vs-jwt-validation.md)
- [Rate limiting algorithms (token bucket vs leaky bucket)](topics/rate-limiting-algorithms-token-bucket-vs-leaky-bucket.md)
- [API gateway throttling & caching layers](topics/api-gateway-throttling-and-caching-layers.md)
- [API contract testing (Pact / Spring Cloud Contract)](topics/api-contract-testing-pact-spring-cloud-contract.md)
- [Backward-compatible schema evolution](topics/backward-compatible-schema-evolution.md)
- [Protobuf vs JSON performance trade-offs](topics/protobuf-vs-json-performance-trade-offs.md)

## Observability and operations

Use this group to make production behavior debuggable with traces, logs, metrics, cardinality control, sampling, and chaos experiments.

- [Observability: OpenTelemetry tracing propagation](topics/observability-opentelemetry-tracing-propagation.md)
- [Prometheus metric cardinality explosion](topics/prometheus-metric-cardinality-explosion.md)
- [Log aggregation with sampling](topics/log-aggregation-with-sampling.md)
- [Chaos engineering principles](topics/chaos-engineering-principles.md)
- [Microservices observability (distributed tracing)](topics/microservices-observability-distributed-tracing.md)

## Runtime, OS, and performance engineering

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

- [Memory-mapped files vs traditional I/O](topics/memory-mapped-files-vs-traditional-i-o.md)
- [Garbage collection tuning (G1 vs ZGC)](topics/garbage-collection-tuning-g1-vs-zgc.md)
- [Thread pools vs virtual threads (Project Loom)](topics/thread-pools-vs-virtual-threads-project-loom.md)
- [Actor model vs shared-memory concurrency](topics/actor-model-vs-shared-memory-concurrency.md)
- [Binary protocol parsing](topics/binary-protocol-parsing.md)
- [Zero-copy networking (sendfile)](topics/zero-copy-networking-sendfile.md)
- [epoll / kqueue internals](topics/epoll-kqueue-internals.md)
- [Syscall overhead & context switching](topics/syscall-overhead-and-context-switching.md)
- [Memory barriers & CPU cache coherence](topics/memory-barriers-and-cpu-cache-coherence.md)
- [Lock-free data structures](topics/lock-free-data-structures.md)
- [Virtual memory & page faults impact](topics/virtual-memory-and-page-faults-impact.md)

## Cloud, containers, and service topology

Use this group to model platform primitives like service meshes, discovery, sidecars, serverless, Kubernetes disruption controls, and container hardening.

- [Kubernetes pod disruption budgets](topics/kubernetes-pod-disruption-budgets.md)
- [Service mesh traffic shifting](topics/service-mesh-traffic-shifting.md)
- [Serverless cold-start mitigation](topics/serverless-cold-start-mitigation.md)
- [Container runtime security (seccomp, AppArmor)](topics/container-runtime-security-seccomp-apparmor.md)
- [Sidecar pattern limitations](topics/sidecar-pattern-limitations.md)
- [Service discovery (Consul vs DNS)](topics/service-discovery-consul-vs-dns.md)

## Caching, hashing, and approximate data structures

Use this group to design fast paths that remain correct enough under invalidation, shard movement, cardinality estimation, and hot-key pressure.

- [Distributed cache invalidation (cache-aside vs write-through)](topics/distributed-cache-invalidation-cache-aside-vs-write-through.md)
- [Eventual consistency in cache](topics/eventual-consistency-in-cache.md)
- [Bloom filters & HyperLogLog in practice](topics/bloom-filters-and-hyperloglog-in-practice.md)
- [Consistent hashing for load balancing](topics/consistent-hashing-for-load-balancing.md)
