export default [
  {
    "title": "Relational schema design",
    "group": "Relational modeling and SQL",
    "summary": "Relational schema design maps domain entities, relationships, constraints, and access patterns into tables that can preserve integrity over time. Good design uses keys, constraints, naming, cardinality, and ownership boundaries deliberately.",
    "example": "data-relational-schema",
    "roleTags": ["jr", "backend", "data"]
  },
  {
    "title": "SQL joins and query shape",
    "group": "Relational modeling and SQL",
    "summary": "SQL joins combine rows across tables, but query shape determines cardinality, duplicate rows, filter placement, and whether the database can use indexes. Engineers should explain inner, outer, semi, and anti joins from result semantics first.",
    "example": "data-sql-joins",
    "roleTags": ["jr", "backend", "data"]
  },
  {
    "title": "Normalization vs denormalization",
    "group": "Relational modeling and SQL",
    "summary": "Normalization reduces duplication and update anomalies, while denormalization duplicates data to speed reads or simplify access. The trade-off is correctness and write complexity versus query performance and product latency.",
    "example": "data-normalization",
    "roleTags": ["mid", "backend", "data"]
  },
  {
    "title": "Data integrity constraints",
    "group": "Relational modeling and SQL",
    "summary": "Data integrity constraints make correctness durable inside the database through primary keys, foreign keys, unique constraints, checks, not-null rules, and exclusion constraints. They protect invariants even when application code has bugs.",
    "example": "data-constraints",
    "roleTags": ["jr", "backend", "data"]
  },
  {
    "title": "Temporal data modeling",
    "group": "Relational modeling and SQL",
    "summary": "Temporal modeling captures when facts are valid, when the system learned them, and how history changes. It matters for auditability, pricing, entitlement windows, late-arriving updates, and reproducible analytics.",
    "example": "data-temporal-modeling",
    "roleTags": ["sr", "backend", "data"]
  },
  {
    "title": "Index selection and covering indexes",
    "group": "Indexing and query performance",
    "summary": "Index selection matches workload filters, joins, ordering, uniqueness, and projection columns. Covering indexes can serve a query without visiting base rows, but they increase write cost and storage.",
    "example": "data-covering-index",
    "roleTags": ["sr", "backend", "data"]
  },
  {
    "title": "Query execution plan reading",
    "group": "Indexing and query performance",
    "summary": "Query plans show how the database intends to scan, join, sort, aggregate, and estimate row counts. Reading plans helps diagnose missing indexes, stale statistics, bad join order, and memory-heavy operations.",
    "example": "data-query-plan",
    "roleTags": ["sr", "backend", "data"]
  },
  {
    "title": "Statistics and cardinality estimation",
    "group": "Indexing and query performance",
    "summary": "Statistics and cardinality estimates let a planner compare possible execution paths. Bad estimates from skew, correlation, stale stats, or parameter sensitivity can make reasonable SQL run poorly.",
    "example": "data-cardinality-estimate",
    "roleTags": ["sr", "backend", "data"]
  },
  {
    "title": "Connection pool sizing",
    "group": "Indexing and query performance",
    "summary": "Connection pool sizing balances application concurrency against database capacity. Too few connections bottleneck callers; too many cause queueing, memory pressure, lock contention, and database overload.",
    "example": "data-pool-sizing",
    "roleTags": ["mid", "backend", "data", "platform"]
  },
  {
    "title": "Hot query and slow query triage",
    "group": "Indexing and query performance",
    "summary": "Hot query triage identifies the queries that dominate database load by frequency, latency, rows scanned, lock wait, and memory use. Fixes can include index changes, query rewrites, caching, pagination, or product flow changes.",
    "example": "data-slow-query-rank",
    "roleTags": ["sr", "backend", "data", "platform"]
  },
  {
    "title": "Transaction boundary design",
    "group": "Transactions, migrations, and integrity",
    "summary": "Transaction boundary design decides which reads and writes must commit atomically, how long locks are held, and what invariants need isolation. Boundaries that are too wide hurt concurrency; too narrow leak partial state.",
    "example": "data-transaction-boundary",
    "roleTags": ["sr", "backend", "data"]
  },
  {
    "title": "Schema migration expand-contract",
    "group": "Transactions, migrations, and integrity",
    "summary": "Expand-contract migrations introduce schema changes in backward-compatible phases: expand, dual-read/write or backfill, cut over, then contract. This keeps old and new code safe during rolling deploys.",
    "example": "data-expand-contract",
    "roleTags": ["sr", "backend", "data", "platform"]
  },
  {
    "title": "Online backfills",
    "group": "Transactions, migrations, and integrity",
    "summary": "Online backfills update existing data while production traffic continues. Safe backfills use batches, checkpoints, idempotency, throttling, observability, and rollback or pause behavior.",
    "example": "data-online-backfill",
    "roleTags": ["sr", "backend", "data", "platform"]
  },
  {
    "title": "Optimistic concurrency control",
    "group": "Transactions, migrations, and integrity",
    "summary": "Optimistic concurrency control detects conflicting writes with versions, timestamps, compare-and-swap, or conditional updates. It works well when conflicts are rare and retry behavior is explicit.",
    "example": "data-optimistic-concurrency",
    "roleTags": ["mid", "backend", "data"]
  },
  {
    "title": "Idempotent data writes",
    "group": "Transactions, migrations, and integrity",
    "summary": "Idempotent writes make retries safe by using stable operation IDs, uniqueness constraints, upserts, or processed-event tables. They are essential when clients, workers, or queues can repeat work.",
    "example": "data-idempotent-write",
    "roleTags": ["sr", "backend", "data"]
  },
  {
    "title": "Partitioning and sharding strategy",
    "group": "Storage topology and replication",
    "summary": "Partitioning and sharding split data by tenant, key, hash, range, geography, or workload. A good strategy minimizes hot partitions, cross-shard joins, rebalancing pain, and tenant blast radius.",
    "example": "data-shard-strategy",
    "roleTags": ["sr", "backend", "data", "platform"]
  },
  {
    "title": "Replication lag and read scaling",
    "group": "Storage topology and replication",
    "summary": "Read replicas increase read capacity but introduce freshness lag and failover complexity. Designs must define which reads can be stale, how lag is measured, and when to route to the primary.",
    "example": "data-replica-routing",
    "roleTags": ["sr", "backend", "data", "platform"]
  },
  {
    "title": "Backup, restore, and point-in-time recovery",
    "group": "Storage topology and replication",
    "summary": "Backups only matter if restores are tested. Point-in-time recovery combines base backups and logs to restore to a chosen moment, bounded by RPO, RTO, retention, and access controls.",
    "example": "data-pitr-window",
    "roleTags": ["sr", "data", "platform"]
  },
  {
    "title": "Search indexing and relevance",
    "group": "Storage topology and replication",
    "summary": "Search indexing transforms source records into searchable documents with tokenization, ranking signals, filters, facets, and freshness rules. Search is a derived data system that needs sync and repair paths.",
    "example": "data-search-index",
    "roleTags": ["mid", "backend", "data"]
  },
  {
    "title": "Time-series data modeling",
    "group": "Storage topology and replication",
    "summary": "Time-series modeling optimizes append-heavy measurements with timestamps, tags, retention, rollups, downsampling, and query windows. It is common in observability, IoT, billing, and analytics.",
    "example": "data-time-series-rollup",
    "roleTags": ["sr", "data", "platform"]
  },
  {
    "title": "OLTP vs OLAP system choice",
    "group": "Analytics, pipelines, and governance",
    "summary": "OLTP systems optimize transactional correctness and low-latency writes, while OLAP systems optimize analytical scans and aggregations. Mixing them without boundaries can hurt both product behavior and reporting.",
    "example": "data-oltp-olap",
    "roleTags": ["mid", "backend", "data"]
  },
  {
    "title": "CDC and event streams",
    "group": "Analytics, pipelines, and governance",
    "summary": "Change data capture turns database changes into ordered event streams for replication, search indexing, analytics, or integration. It must handle ordering, deletes, schema evolution, backfills, and replay.",
    "example": "data-cdc-event",
    "roleTags": ["sr", "backend", "data"]
  },
  {
    "title": "ETL vs ELT pipelines",
    "group": "Analytics, pipelines, and governance",
    "summary": "ETL transforms before loading into the target system, while ELT loads raw data first and transforms inside the analytical store. The decision changes cost, lineage, debugging, privacy, and ownership.",
    "example": "data-etl-elt",
    "roleTags": ["mid", "data"]
  },
  {
    "title": "Warehouse modeling and fact tables",
    "group": "Analytics, pipelines, and governance",
    "summary": "Warehouse modeling organizes analytical data around facts, dimensions, grain, slowly changing dimensions, and business definitions. It keeps reporting consistent across teams and tools.",
    "example": "data-warehouse-fact",
    "roleTags": ["sr", "data"]
  },
  {
    "title": "Semantic metrics layer",
    "group": "Analytics, pipelines, and governance",
    "summary": "A semantic metrics layer defines measures, dimensions, filters, windows, and ownership once so dashboards and product analysis agree. It prevents each report from inventing a different version of revenue or active users.",
    "example": "data-semantic-metric",
    "roleTags": ["sr", "data", "product"]
  },
  {
    "title": "Data quality checks",
    "group": "Analytics, pipelines, and governance",
    "summary": "Data quality checks assert freshness, completeness, uniqueness, value ranges, referential integrity, and volume expectations. They catch broken ingestion or product instrumentation before decisions depend on bad data.",
    "example": "data-quality-check",
    "roleTags": ["mid", "data"]
  },
  {
    "title": "Deduplication and late-arriving data",
    "group": "Analytics, pipelines, and governance",
    "summary": "Deduplication and late-arriving data handling keep analytical results correct when events are retried, delayed, reordered, or replayed. Designs need stable IDs, watermarks, correction windows, and recomputation paths.",
    "example": "data-late-events",
    "roleTags": ["sr", "data"]
  },
  {
    "title": "Data retention and archival policy",
    "group": "Analytics, pipelines, and governance",
    "summary": "Retention and archival policy define how long data stays hot, warm, cold, anonymized, or deleted. It balances product needs, cost, legal obligations, privacy, and restore expectations.",
    "example": "data-retention-policy",
    "roleTags": ["sr", "data", "security"]
  },
  {
    "title": "Data lineage and observability",
    "group": "Analytics, pipelines, and governance",
    "summary": "Data lineage and observability show where data came from, how it changed, when it refreshed, and what downstream assets depend on it. They are the operational controls for trusted analytical systems.",
    "example": "data-lineage",
    "roleTags": ["staff", "data", "platform"]
  },
  {
    "title": "Vector storage and retrieval",
    "group": "Analytics, pipelines, and governance",
    "summary": "Vector storage supports similarity search over embeddings with indexes, metadata filters, refresh policies, and recall-latency trade-offs. It is useful for AI retrieval, recommendations, duplicate detection, and semantic search.",
    "example": "data-vector-retrieval",
    "roleTags": ["sr", "data", "ai"]
  }
];
