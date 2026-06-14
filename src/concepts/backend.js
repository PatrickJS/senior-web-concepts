export default [
  {
    "title": "TCP congestion control algorithms",
    "group": "Transport and protocol internals",
    "summary": "TCP congestion control adjusts send rate based on acknowledgements, loss, and inferred network capacity. A clear answer mentions slow start, congestion avoidance, multiplicative decrease, RTT, packet loss, and fairness.",
    "example": "tcp-aimd"
  },
  {
    "title": "TLS 1.3 handshake internals",
    "group": "Transport and protocol internals",
    "summary": "TLS 1.3 reduces handshake round trips and encrypts more of the negotiation than TLS 1.2. Key concepts are ClientHello, key share, certificate verification, Finished messages, forward secrecy, and optional 0-RTT replay risk.",
    "example": "tls-handshake"
  },
  {
    "title": "HTTP/2 multiplexing & HPACK",
    "group": "Transport and protocol internals",
    "summary": "HTTP/2 multiplexes many streams over one TCP connection and compresses headers with HPACK dynamic tables. It removes HTTP/1.1 request queueing but can still suffer TCP-level head-of-line blocking.",
    "example": "http2"
  },
  {
    "title": "HTTP/3 + QUIC packet loss recovery",
    "group": "Transport and protocol internals",
    "summary": "HTTP/3 uses QUIC over UDP, combining TLS 1.3, multiplexed streams, connection migration, and per-stream loss recovery. Packet loss no longer blocks unrelated streams the same way HTTP/2 over TCP can.",
    "example": "quic-loss"
  },
  {
    "title": "Connection pooling pitfalls",
    "group": "Transport and protocol internals",
    "summary": "Connection pools reduce setup cost but can fail through exhaustion, stale sockets, head-of-line blocking, uneven load, leaks, or pool sizes that exceed database/server limits. Correct sizing and timeout behavior matter.",
    "example": "connection-pool"
  },
  {
    "title": "Zero-downtime deployment strategies",
    "group": "Deployment and reliability patterns",
    "summary": "Zero-downtime deployment keeps traffic served while replacing code. Common techniques include readiness probes, draining, blue-green, canary, backward-compatible schemas, feature flags, and fast rollback.",
    "example": "zero-downtime"
  },
  {
    "title": "Database transaction isolation levels (serializable vs snapshot)",
    "group": "Databases, storage, and transactions",
    "summary": "Isolation levels define which concurrent transaction anomalies are possible. Snapshot isolation gives each transaction a consistent view but can allow write skew; serializable aims to behave as if transactions ran one at a time.",
    "example": "tx-isolation"
  },
  {
    "title": "B-tree vs LSM-tree index internals",
    "group": "Databases, storage, and transactions",
    "summary": "B-trees maintain ordered pages for efficient point and range reads, while LSM-trees buffer writes and compact sorted files later. The trade-off is read amplification versus write throughput and compaction cost.",
    "example": "btree-lsm"
  },
  {
    "title": "Query planner & cost-based optimization",
    "group": "Databases, storage, and transactions",
    "summary": "A cost-based query planner estimates alternative execution plans using statistics, selectivity, join order, index availability, and I/O/CPU costs. Bad stats or parameter skew can produce poor plans.",
    "example": "query-planner"
  },
  {
    "title": "Deadlock detection & prevention",
    "group": "Databases, storage, and transactions",
    "summary": "Deadlocks occur when transactions wait on each other in a cycle. Databases detect cycles in wait-for graphs or prevent them with lock ordering, timeouts, smaller transactions, and consistent access patterns.",
    "example": "deadlock"
  },
  {
    "title": "ACID vs BASE trade-offs",
    "group": "Databases, storage, and transactions",
    "summary": "ACID emphasizes atomicity, consistency, isolation, and durability; BASE accepts softer consistency for availability and scalability. The real decision is which invariants must be immediately correct versus eventually reconciled.",
    "example": "acid-base"
  },
  {
    "title": "Two-phase commit vs Saga pattern",
    "group": "Distributed systems and consistency",
    "summary": "Two-phase commit coordinates participants for atomic commit but can block and depends on a coordinator. Sagas split work into local transactions with compensating actions, trading atomicity for availability and explicit recovery.",
    "example": "saga"
  },
  {
    "title": "Distributed locking (Redlock pitfalls)",
    "group": "Distributed systems and consistency",
    "summary": "Distributed locks are hard because clocks, partitions, pauses, and delayed clients can violate mutual exclusion. Redlock-style leases need careful TTL assumptions and often require fencing tokens to protect downstream resources.",
    "example": "redlock"
  },
  {
    "title": "CAP theorem in practice",
    "group": "Distributed systems and consistency",
    "summary": "CAP says that during a network partition a distributed system must choose between consistency and availability. In practice, systems make per-operation trade-offs with leader routing, quorum reads/writes, retries, and degraded modes.",
    "example": "cap"
  },
  {
    "title": "CRDTs & conflict-free replicated data types",
    "group": "Distributed systems and consistency",
    "summary": "CRDTs let replicas update independently and merge deterministically without coordination. Backend use cases include counters, sets, presence, collaborative state, and eventually consistent multi-region writes.",
    "example": "gcounter"
  },
  {
    "title": "Eventual consistency anti-patterns",
    "group": "Distributed systems and consistency",
    "summary": "Eventual consistency becomes an anti-pattern when product flows require immediate guarantees but the system hides lag. Examples include stale permission reads, double spends, missing read-your-writes, and silent conflict overwrites.",
    "example": "read-your-writes"
  },
  {
    "title": "Kafka partition rebalancing & exactly-once semantics",
    "group": "Messaging, streams, and event-driven systems",
    "summary": "Kafka rebalancing moves partitions across consumers when group membership changes, causing pauses and offset coordination. Exactly-once semantics rely on idempotent producers, transactions, committed offsets, and careful sink behavior.",
    "example": "kafka-rebalance"
  },
  {
    "title": "RabbitMQ dead-letter queues & message ordering",
    "group": "Messaging, streams, and event-driven systems",
    "summary": "RabbitMQ dead-letter queues capture rejected, expired, or failed messages for later handling. Ordering can be broken by retries, multiple consumers, requeueing, priorities, and dead-letter routing.",
    "example": "rabbitmq-dlq"
  },
  {
    "title": "gRPC streaming + flow control",
    "group": "Transport and protocol internals",
    "summary": "gRPC streaming sends multiple messages over HTTP/2 streams with flow control. A good explanation covers client/server/bidirectional streams, backpressure, message framing, deadlines, cancellation, and per-stream windows.",
    "example": "grpc-flow"
  },
  {
    "title": "GraphQL resolver batching & N+1 problem",
    "group": "API design, auth, and edge controls",
    "summary": "The GraphQL N+1 problem happens when nested resolvers issue one backend query per parent object. Batching and caching loaders group keys per tick or request to reduce queries while preserving resolver composition.",
    "example": "n-plus-one"
  },
  {
    "title": "OAuth2 token introspection vs JWT validation",
    "group": "API design, auth, and edge controls",
    "summary": "JWT validation checks signed claims locally, while token introspection asks the authorization server whether a token is active. JWTs reduce latency but are harder to revoke instantly; introspection centralizes truth but adds network dependency.",
    "example": "oauth"
  },
  {
    "title": "Rate limiting algorithms (token bucket vs leaky bucket)",
    "group": "API design, auth, and edge controls",
    "summary": "Token bucket allows bursts up to bucket capacity while refilling over time; leaky bucket smooths output at a fixed rate. The right choice depends on burst tolerance, fairness, and user experience.",
    "example": "rate-limit"
  },
  {
    "title": "Circuit breaker + bulkhead patterns",
    "group": "Deployment and reliability patterns",
    "summary": "Circuit breakers stop calling failing dependencies temporarily; bulkheads isolate resource pools so one failing area does not exhaust the entire service. Together they prevent cascading failures.",
    "example": "circuit-breaker"
  },
  {
    "title": "Observability: OpenTelemetry tracing propagation",
    "group": "Observability and operations",
    "summary": "Tracing propagation carries trace and span context across service boundaries. OpenTelemetry standardizes context extraction/injection so logs, metrics, and spans can be correlated across distributed requests.",
    "example": "otel"
  },
  {
    "title": "Prometheus metric cardinality explosion",
    "group": "Observability and operations",
    "summary": "Cardinality explosion happens when labels create too many unique time series. User IDs, raw URLs, emails, request IDs, and high-cardinality dimensions can make Prometheus expensive or unusable.",
    "example": "prometheus-cardinality"
  },
  {
    "title": "Log aggregation with sampling",
    "group": "Observability and operations",
    "summary": "Log sampling reduces volume while preserving important signals. Good policies keep all errors/security events, sample noisy success paths, and attach trace IDs so sampled logs still join a request story.",
    "example": "log-sampling"
  },
  {
    "title": "Memory-mapped files vs traditional I/O",
    "group": "Runtime, OS, and performance engineering",
    "summary": "Memory-mapped files map file pages into process address space, letting the OS page data in lazily. Traditional I/O copies through explicit buffers. Node does not expose mmap directly, so streams and buffers are the usual tools.",
    "example": "io"
  },
  {
    "title": "Garbage collection tuning (G1 vs ZGC)",
    "group": "Runtime, OS, and performance engineering",
    "summary": "G1 and ZGC are JVM collectors with different pause/throughput trade-offs; in Node the analogous topic is V8 heap sizing and GC behavior. Strong explanations separate allocation rate, live set, pause time, and throughput.",
    "example": "gc-node"
  },
  {
    "title": "Thread pools vs virtual threads (Project Loom)",
    "group": "Runtime, OS, and performance engineering",
    "summary": "Thread pools bound scarce OS threads; virtual threads multiplex many blocking-style tasks onto fewer carrier threads in the JVM. In Node, the closest contrast is async I/O plus worker threads for CPU-bound work.",
    "example": "thread-pool"
  },
  {
    "title": "Actor model vs shared-memory concurrency",
    "group": "Runtime, OS, and performance engineering",
    "summary": "The actor model isolates state behind message queues, while shared-memory concurrency shares mutable state with locks or atomics. Actors simplify reasoning but require backpressure and message ordering design.",
    "example": "actor"
  },
  {
    "title": "Message-driven architecture (Akka / Orleans)",
    "group": "Messaging, streams, and event-driven systems",
    "summary": "Message-driven architecture structures systems around asynchronous messages and handlers. It improves decoupling and resilience but introduces delivery guarantees, ordering, retries, idempotency, and observability requirements.",
    "example": "message-driven"
  },
  {
    "title": "CQRS + Event Sourcing projections",
    "group": "Messaging, streams, and event-driven systems",
    "summary": "CQRS separates command writes from query reads, and event sourcing records state changes as events. Projections build read models from those events and must handle replay, lag, schema changes, and idempotency.",
    "example": "cqrs"
  },
  {
    "title": "Outbox pattern for reliable events",
    "group": "Messaging, streams, and event-driven systems",
    "summary": "The outbox pattern writes domain data and an event record in the same database transaction, then a relay publishes the event. It avoids losing events between DB commit and broker publish.",
    "example": "outbox"
  },
  {
    "title": "Sharding strategies & hot partition avoidance",
    "group": "Databases, storage, and transactions",
    "summary": "Sharding splits data across partitions by key, range, hash, tenant, or geography. Hot partitions happen when too much traffic targets one shard and are mitigated with better keys, salting, splitting, and load-aware routing.",
    "example": "sharding"
  },
  {
    "title": "Read replicas lag monitoring",
    "group": "Databases, storage, and transactions",
    "summary": "Read replica lag is the delay between primary writes and replica visibility. Monitoring should track replication position/time lag and route read-your-writes or critical reads to fresh sources when needed.",
    "example": "replica-lag"
  },
  {
    "title": "Database connection pool exhaustion",
    "group": "Databases, storage, and transactions",
    "summary": "Pool exhaustion occurs when all DB connections are busy or leaked. Symptoms include request pileups, timeouts, and cascading latency; fixes include smaller transactions, timeouts, queue limits, and right-sized pools.",
    "example": "db-pool-exhaustion"
  },
  {
    "title": "Prepared statement caching",
    "group": "Databases, storage, and transactions",
    "summary": "Prepared statement caching reuses parsed/planned SQL statements to reduce overhead and improve safety. Pitfalls include unbounded caches, schema changes, connection-specific state, and bad generic plans.",
    "example": "prepared-cache"
  },
  {
    "title": "Index bloat & vacuum strategies",
    "group": "Databases, storage, and transactions",
    "summary": "Index bloat is wasted index space from dead or outdated entries, common in MVCC systems. Vacuuming, autovacuum tuning, fillfactor choices, and periodic reindexing control space and planner quality.",
    "example": "vacuum"
  },
  {
    "title": "Kubernetes pod disruption budgets",
    "group": "Cloud, containers, and service topology",
    "summary": "Pod disruption budgets limit voluntary disruptions so enough replicas remain available during drains, upgrades, or maintenance. They are useful only when paired with enough replicas, readiness probes, and capacity.",
    "example": "pdb"
  },
  {
    "title": "Service mesh traffic shifting",
    "group": "Cloud, containers, and service topology",
    "summary": "Service mesh traffic shifting routes percentages of traffic between versions or services using proxy control planes. It supports canary, blue-green, retries, and mTLS, but adds latency, complexity, and debugging surface.",
    "example": "mesh-shift"
  },
  {
    "title": "Serverless cold-start mitigation",
    "group": "Cloud, containers, and service topology",
    "summary": "Cold starts happen when a serverless runtime initializes before handling a request. Mitigation includes smaller bundles, hoisted clients, lazy initialization, provisioned concurrency, and avoiding heavy startup work.",
    "example": "cold-start"
  },
  {
    "title": "API gateway throttling & caching layers",
    "group": "API design, auth, and edge controls",
    "summary": "API gateways enforce cross-cutting policies such as auth, rate limits, request validation, caching, and routing. Caching must vary on identity, authorization, headers, and query shape to avoid data leaks.",
    "example": "gateway"
  },
  {
    "title": "Background job queues (Celery / BullMQ) retry semantics",
    "group": "Messaging, streams, and event-driven systems",
    "summary": "Job queues need explicit retry, backoff, dead-letter, timeout, and idempotency semantics. Without them, jobs can duplicate side effects, poison queues, or hide permanent failures behind endless retries.",
    "example": "job-retry"
  },
  {
    "title": "Distributed cache invalidation (cache-aside vs write-through)",
    "group": "Caching, hashing, and approximate data structures",
    "summary": "Cache-aside loads on miss and invalidates after writes; write-through writes cache and database together. Distributed invalidation must handle races, partial failures, versioning, and cross-node propagation delay.",
    "example": "cache-patterns"
  },
  {
    "title": "Eventual consistency in cache",
    "group": "Caching, hashing, and approximate data structures",
    "summary": "Eventually consistent caches can serve stale data after writes, invalidations, or replication delays. Safe design scopes staleness, uses versions, routes critical reads to truth, and avoids caching irreversible authorization decisions incorrectly.",
    "example": "cache-patterns"
  },
  {
    "title": "Idempotency keys in API design",
    "group": "Distributed systems and consistency",
    "summary": "Idempotency keys let clients safely retry state-changing requests without creating duplicate side effects. The server stores the key, request fingerprint, status, and response for a defined retention window.",
    "example": "idempotency-key"
  },
  {
    "title": "Optimistic locking with version vectors",
    "group": "Distributed systems and consistency",
    "summary": "Optimistic locking detects conflicts by comparing a version or vector before write commit. Version vectors track causal progress across replicas and can distinguish stale writes from concurrent writes.",
    "example": "version-vector"
  },
  {
    "title": "Paxos / Raft consensus internals",
    "group": "Distributed systems and consistency",
    "summary": "Consensus protocols let distributed nodes agree on ordered state despite failures. Raft explains this through leader election, terms, logs, majorities, commit indexes, and safety rules.",
    "example": "raft"
  },
  {
    "title": "Byzantine fault tolerance basics",
    "group": "Distributed systems and consistency",
    "summary": "Byzantine fault tolerance handles nodes that can lie, collude, or behave arbitrarily. Classic BFT requires more replicas than crash fault tolerance, commonly 3f+1 replicas to tolerate f Byzantine faults.",
    "example": "bft"
  },
  {
    "title": "Chaos engineering principles",
    "group": "Observability and operations",
    "summary": "Chaos engineering tests resilience by injecting controlled failures into production-like systems. It should start with hypotheses, blast-radius limits, rollback, observability, and learning from the result.",
    "example": "chaos"
  },
  {
    "title": "Database failover & split-brain prevention",
    "group": "Deployment and reliability patterns",
    "summary": "Failover promotes a standby when primary fails; split-brain occurs when multiple primaries accept writes. Prevention uses quorum, fencing tokens, leases, STONITH-style isolation, and conservative promotion rules.",
    "example": "split-brain"
  },
  {
    "title": "Microservices observability (distributed tracing)",
    "group": "Observability and operations",
    "summary": "Distributed tracing follows one request across services, queues, and databases. It requires context propagation, span naming discipline, sampling, baggage caution, and correlation with logs and metrics.",
    "example": "otel"
  },
  {
    "title": "API contract testing (Pact / Spring Cloud Contract)",
    "group": "API design, auth, and edge controls",
    "summary": "Contract testing verifies that providers and consumers agree on request/response behavior. It catches breaking changes earlier than full integration tests and supports independent service deployment.",
    "example": "contract-test"
  },
  {
    "title": "Backward-compatible schema evolution",
    "group": "API design, auth, and edge controls",
    "summary": "Backward-compatible schema evolution changes APIs or events without breaking old consumers. Common moves are additive fields, default values, tolerant readers, deprecation windows, and dual-read/write migrations.",
    "example": "schema-evolution"
  },
  {
    "title": "Protobuf vs JSON performance trade-offs",
    "group": "API design, auth, and edge controls",
    "summary": "Protobuf is compact, typed, and schema-driven; JSON is human-readable and ubiquitous. Trade-offs include payload size, CPU parse cost, compatibility rules, introspection, tooling, and browser/debug ergonomics.",
    "example": "protobuf-json"
  },
  {
    "title": "Binary protocol parsing",
    "group": "Runtime, OS, and performance engineering",
    "summary": "Binary protocol parsing reads structured fields from byte buffers using offsets, endianness, lengths, and framing rules. Correct parsers defend against partial frames, oversized lengths, and malicious input.",
    "example": "binary-protocol"
  },
  {
    "title": "Zero-copy networking (sendfile)",
    "group": "Runtime, OS, and performance engineering",
    "summary": "Zero-copy networking avoids copying file data through user-space buffers, often with sendfile-like kernel paths. Node typically approximates this with efficient streams, though true sendfile exposure depends on runtime/platform.",
    "example": "zero-copy"
  },
  {
    "title": "epoll / kqueue internals",
    "group": "Runtime, OS, and performance engineering",
    "summary": "epoll and kqueue are OS event notification mechanisms for scalable nonblocking I/O. Node relies on libuv abstractions over these primitives to drive sockets, timers, and file events.",
    "example": "epoll-kqueue"
  },
  {
    "title": "Syscall overhead & context switching",
    "group": "Runtime, OS, and performance engineering",
    "summary": "System calls and context switches cross boundaries between user space, kernel space, and runnable tasks. Batching, buffering, async I/O, and fewer tiny writes reduce overhead.",
    "example": "syscall-batching"
  },
  {
    "title": "Memory barriers & CPU cache coherence",
    "group": "Runtime, OS, and performance engineering",
    "summary": "Memory barriers constrain how CPU cores reorder reads/writes so shared-memory programs observe safe ordering. In JavaScript, Atomics operations on SharedArrayBuffer provide the relevant synchronization primitives.",
    "example": "atomics"
  },
  {
    "title": "Lock-free data structures",
    "group": "Runtime, OS, and performance engineering",
    "summary": "Lock-free data structures use atomic operations instead of mutexes so system-wide progress continues even if one thread stalls. They are hard to design because of ABA, memory ordering, and contention.",
    "example": "lock-free"
  },
  {
    "title": "Bloom filters & HyperLogLog in practice",
    "group": "Caching, hashing, and approximate data structures",
    "summary": "Bloom filters answer maybe-present/definitely-not-present with false positives; HyperLogLog estimates cardinality with small memory. Both trade exactness for speed and memory efficiency.",
    "example": "bloom"
  },
  {
    "title": "Consistent hashing for load balancing",
    "group": "Caching, hashing, and approximate data structures",
    "summary": "Consistent hashing maps keys to nodes so adding or removing nodes moves only a fraction of keys. It is useful for caches, shards, and load balancing with reduced remapping churn.",
    "example": "consistent-hashing"
  },
  {
    "title": "Virtual memory & page faults impact",
    "group": "Runtime, OS, and performance engineering",
    "summary": "Virtual memory lets processes use address spaces backed by physical memory and disk. Page faults occur when needed pages are not resident, causing latency from allocation, disk, or OS bookkeeping.",
    "example": "virtual-memory"
  },
  {
    "title": "Container runtime security (seccomp, AppArmor)",
    "group": "Cloud, containers, and service topology",
    "summary": "Container runtime security restricts what a process can do despite sharing the host kernel. seccomp filters syscalls, AppArmor/SELinux constrain access, and least-privilege settings reduce blast radius.",
    "example": "seccomp"
  },
  {
    "title": "Sidecar pattern limitations",
    "group": "Cloud, containers, and service topology",
    "summary": "Sidecars add colocated helper processes for proxying, logging, security, or config. Limitations include extra hops, resource overhead, lifecycle coupling, harder debugging, and duplicated functionality per pod.",
    "example": "sidecar"
  },
  {
    "title": "Service discovery (Consul vs DNS)",
    "group": "Cloud, containers, and service topology",
    "summary": "Service discovery maps logical service names to healthy instances. DNS is simple and ubiquitous; Consul-style systems can add health checks, metadata, watches, and stronger service catalog semantics.",
    "example": "service-discovery"
  },
  {
    "title": "Blue-green vs canary deployments",
    "group": "Deployment and reliability patterns",
    "summary": "Blue-green switches traffic between two full environments; canary gradually shifts a small percentage to a new version. Blue-green is simpler rollback, while canary gives safer progressive exposure.",
    "example": "rollout"
  },
  {
    "title": "Feature flags with rollout strategies",
    "group": "Deployment and reliability patterns",
    "summary": "Feature flags decouple deploy from release and allow targeting, gradual rollout, kill switches, and experiments. Good systems need stable bucketing, auditability, cleanup, and dependency management.",
    "example": "feature-flags"
  },
  {
    "title": "Data pipeline backpressure handling",
    "group": "Messaging, streams, and event-driven systems",
    "summary": "Pipeline backpressure prevents upstream producers from overwhelming downstream consumers. It is implemented with bounded queues, credits, pull-based reads, pause/resume, rate limits, and load shedding.",
    "example": "pipeline-backpressure"
  },
  {
    "title": "Exactly-once processing guarantees",
    "group": "Distributed systems and consistency",
    "summary": "Exactly-once usually means effects are applied once through idempotency and transactions, not that messages are delivered once. Strong answers distinguish delivery, processing, side effects, offsets, and sink commits.",
    "example": "exactly-once"
  },
  {
    "title": "Idempotent consumers in event streams",
    "group": "Messaging, streams, and event-driven systems",
    "summary": "Idempotent consumers handle duplicate events safely by recording processed IDs, using natural keys, checking versions, or making writes commutative. This is required because retries and rebalances can redeliver messages.",
    "example": "idempotent-consumer"
  }
];
