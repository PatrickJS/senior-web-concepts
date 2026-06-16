# Data & Storage Engineering concepts

30 topics mapped into summaries and JavaScript/Node.js examples.

## Career-level progression

- [Junior](../roles/jr.md) — 3 topics
- [Mid-level](../roles/mid.md) — 7 topics
- [Senior](../roles/sr.md) — 19 topics
- [Staff](../roles/staff.md) — 1 topic

## Relational modeling and SQL

Use this group to design schemas, constraints, query shapes, and relational access patterns that stay understandable as data grows.

- [Relational schema design](topics/relational-schema-design.md) — jr, backend, data
- [SQL joins and query shape](topics/sql-joins-and-query-shape.md) — jr, backend, data
- [Normalization vs denormalization](topics/normalization-vs-denormalization.md) — mid, backend, data
- [Data integrity constraints](topics/data-integrity-constraints.md) — jr, backend, data
- [Temporal data modeling](topics/temporal-data-modeling.md) — sr, backend, data

## Indexing and query performance

Use this group to connect query plans, index design, statistics, memory, and workload shape to practical performance outcomes.

- [Index selection and covering indexes](topics/index-selection-and-covering-indexes.md) — sr, backend, data
- [Query execution plan reading](topics/query-execution-plan-reading.md) — sr, backend, data
- [Statistics and cardinality estimation](topics/statistics-and-cardinality-estimation.md) — sr, backend, data
- [Connection pool sizing](topics/connection-pool-sizing.md) — mid, backend, data, platform
- [Hot query and slow query triage](topics/hot-query-and-slow-query-triage.md) — sr, backend, data, platform

## Transactions, migrations, and integrity

Use this group to protect correctness while schema, code, data volume, and concurrent writes change.

- [Transaction boundary design](topics/transaction-boundary-design.md) — sr, backend, data
- [Schema migration expand-contract](topics/schema-migration-expand-contract.md) — sr, backend, data, platform
- [Online backfills](topics/online-backfills.md) — sr, backend, data, platform
- [Optimistic concurrency control](topics/optimistic-concurrency-control.md) — mid, backend, data
- [Idempotent data writes](topics/idempotent-data-writes.md) — sr, backend, data

## Storage topology and replication

Use this group to reason about partitioning, replicas, backups, search indexes, time-series storage, and tenant boundaries.

- [Partitioning and sharding strategy](topics/partitioning-and-sharding-strategy.md) — sr, backend, data, platform
- [Replication lag and read scaling](topics/replication-lag-and-read-scaling.md) — sr, backend, data, platform
- [Backup, restore, and point-in-time recovery](topics/backup-restore-and-point-in-time-recovery.md) — sr, data, platform
- [Search indexing and relevance](topics/search-indexing-and-relevance.md) — mid, backend, data
- [Time-series data modeling](topics/time-series-data-modeling.md) — sr, data, platform

## Analytics, pipelines, and governance

Use this group to move data into analytical systems with clear semantics, quality checks, lineage, and retention rules.

- [OLTP vs OLAP system choice](topics/oltp-vs-olap-system-choice.md) — mid, backend, data
- [CDC and event streams](topics/cdc-and-event-streams.md) — sr, backend, data
- [ETL vs ELT pipelines](topics/etl-vs-elt-pipelines.md) — mid, data
- [Warehouse modeling and fact tables](topics/warehouse-modeling-and-fact-tables.md) — sr, data
- [Semantic metrics layer](topics/semantic-metrics-layer.md) — sr, data, product
- [Data quality checks](topics/data-quality-checks.md) — mid, data
- [Deduplication and late-arriving data](topics/deduplication-and-late-arriving-data.md) — sr, data
- [Data retention and archival policy](topics/data-retention-and-archival-policy.md) — sr, data, security
- [Data lineage and observability](topics/data-lineage-and-observability.md) — staff, data, platform
- [Vector storage and retrieval](topics/vector-storage-and-retrieval.md) — sr, data, ai
