# Data & storage requirements

**Role tag:** data
**Topics:** 30

Requirements for relational data, storage topology, query performance, pipelines, analytics, and data governance.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Data & Storage Engineering: 30

## Required concepts

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
- [Backup, restore, and point-in-time recovery](../data-storage/topics/backup-restore-and-point-in-time-recovery.md) — Backups only matter if restores are tested. Point-in-time recovery combines base backups and logs to restore to a chosen moment, bounded by RPO, RTO, retention, and access controls.
- [Search indexing and relevance](../data-storage/topics/search-indexing-and-relevance.md) — Search indexing transforms source records into searchable documents with tokenization, ranking signals, filters, facets, and freshness rules. Search is a derived data system that needs sync and repair paths.
- [Time-series data modeling](../data-storage/topics/time-series-data-modeling.md) — Time-series modeling optimizes append-heavy measurements with timestamps, tags, retention, rollups, downsampling, and query windows. It is common in observability, IoT, billing, and analytics.

#### Analytics, pipelines, and governance

- [OLTP vs OLAP system choice](../data-storage/topics/oltp-vs-olap-system-choice.md) — OLTP systems optimize transactional correctness and low-latency writes, while OLAP systems optimize analytical scans and aggregations. Mixing them without boundaries can hurt both product behavior and reporting.
- [CDC and event streams](../data-storage/topics/cdc-and-event-streams.md) — Change data capture turns database changes into ordered event streams for replication, search indexing, analytics, or integration. It must handle ordering, deletes, schema evolution, backfills, and replay.
- [ETL vs ELT pipelines](../data-storage/topics/etl-vs-elt-pipelines.md) — ETL transforms before loading into the target system, while ELT loads raw data first and transforms inside the analytical store. The decision changes cost, lineage, debugging, privacy, and ownership.
- [Warehouse modeling and fact tables](../data-storage/topics/warehouse-modeling-and-fact-tables.md) — Warehouse modeling organizes analytical data around facts, dimensions, grain, slowly changing dimensions, and business definitions. It keeps reporting consistent across teams and tools.
- [Semantic metrics layer](../data-storage/topics/semantic-metrics-layer.md) — A semantic metrics layer defines measures, dimensions, filters, windows, and ownership once so dashboards and product analysis agree. It prevents each report from inventing a different version of revenue or active users.
- [Data quality checks](../data-storage/topics/data-quality-checks.md) — Data quality checks assert freshness, completeness, uniqueness, value ranges, referential integrity, and volume expectations. They catch broken ingestion or product instrumentation before decisions depend on bad data.
- [Deduplication and late-arriving data](../data-storage/topics/deduplication-and-late-arriving-data.md) — Deduplication and late-arriving data handling keep analytical results correct when events are retried, delayed, reordered, or replayed. Designs need stable IDs, watermarks, correction windows, and recomputation paths.
- [Data retention and archival policy](../data-storage/topics/data-retention-and-archival-policy.md) — Retention and archival policy define how long data stays hot, warm, cold, anonymized, or deleted. It balances product needs, cost, legal obligations, privacy, and restore expectations.
- [Data lineage and observability](../data-storage/topics/data-lineage-and-observability.md) — Data lineage and observability show where data came from, how it changed, when it refreshed, and what downstream assets depend on it. They are the operational controls for trusted analytical systems.
- [Vector storage and retrieval](../data-storage/topics/vector-storage-and-retrieval.md) — Vector storage supports similarity search over embeddings with indexes, metadata filters, refresh policies, and recall-latency trade-offs. It is useful for AI retrieval, recommendations, duplicate detection, and semantic search.
