export default [
  {
    "title": "Functional vs non-functional requirements",
    "group": "Design process and trade-offs",
    "summary": "Functional requirements describe what the system must do, while non-functional requirements describe qualities such as latency, availability, privacy, durability, scale, and cost. Senior design work makes both explicit before choosing components.",
    "example": "system-requirements",
    "diagram": `flowchart LR
  Goal["Product goal"] --> Functional["Functional requirements"]
  Goal --> Quality["Non-functional requirements"]
  Functional --> Workflows["User and system workflows"]
  Quality --> Constraints["Latency, availability, privacy, cost"]
  Workflows --> Architecture["Architecture choices"]
  Constraints --> Architecture`,
    "related": [
      "Backend: API contract testing",
      "Frontend: Deterministic rendering"
    ]
  },
  {
    "title": "SLOs and error budgets",
    "group": "Design process and trade-offs",
    "summary": "SLOs define target reliability for user-visible behavior, while error budgets quantify how much unreliability the system can spend. They turn vague reliability goals into decisions about release pace, alerting, redundancy, and degradation.",
    "example": "system-slo-budget",
    "diagram": `flowchart LR
  UserJourney["User journey"] --> SLI["SLI measurement"]
  SLI --> SLO["SLO target"]
  SLO --> Budget["Error budget"]
  Budget --> Release["Release pace"]
  Budget --> Alerts["Alert policy"]`,
    "related": [
      "Backend: Microservices observability",
      "Backend: Zero-downtime deployment strategies"
    ]
  },
  {
    "title": "Capacity estimation",
    "group": "Scale, capacity, and latency",
    "summary": "Capacity estimation turns traffic, payload size, storage retention, fanout, and peak multipliers into concrete throughput and storage numbers. The goal is not perfect prediction; it is making bottlenecks and scaling assumptions visible.",
    "example": "system-capacity-estimate",
    "diagram": `flowchart LR
  Users["Active users"] --> RPS["Requests per second"]
  RPS --> Services["Service capacity"]
  RPS --> Storage["Storage growth"]
  RPS --> Queue["Queue throughput"]
  Peak["Peak multiplier"] --> RPS`,
    "related": [
      "Backend: Database connection pool exhaustion",
      "Backend: Data pipeline backpressure handling"
    ]
  },
  {
    "title": "Latency budget decomposition",
    "group": "Scale, capacity, and latency",
    "summary": "A latency budget splits an end-to-end target across client work, network hops, edge logic, services, databases, queues, and third-party calls. It helps identify where parallelism, caching, streaming, or simplification is required.",
    "example": "system-latency-budget",
    "diagram": `flowchart LR
  Browser["Browser"] --> Edge["Edge"]
  Edge --> API["API"]
  API --> DB["Database"]
  API --> Vendor["Third party"]
  Browser --> Paint["Next paint"]
  DB --> API
  Vendor --> API`,
    "related": [
      "Frontend: Interaction to Next Paint",
      "Backend: Connection pooling pitfalls"
    ]
  },
  {
    "title": "Client-edge-service boundaries",
    "group": "Boundaries and topology",
    "summary": "Client, edge, and service boundaries decide where validation, personalization, caching, rendering, authorization, and aggregation live. Good boundaries reduce latency and coupling without leaking trusted responsibilities to untrusted environments.",
    "example": "system-boundary-map",
    "diagram": `flowchart LR
  Client["Client"] --> Edge["Edge runtime/CDN"]
  Edge --> API["API service"]
  API --> Data["Data stores"]
  Edge --> Cache["Edge cache"]
  Client -. untrusted .-> Edge
  API -. trusted .-> Data`,
    "related": [
      "Frontend: Edge rendering",
      "Backend: API gateway throttling and caching layers"
    ]
  },
  {
    "title": "API gateway and BFF boundaries",
    "group": "Boundaries and topology",
    "summary": "An API gateway applies cross-cutting concerns such as auth, rate limits, caching, and routing, while a backend-for-frontend shapes APIs around a specific client experience. Mixing them carelessly can create a slow, overloaded coordination layer.",
    "example": "system-api-gateway-bff",
    "diagram": `flowchart LR
  Web["Web app"] --> BFF["BFF"]
  Mobile["Mobile app"] --> MobileBFF["Mobile BFF"]
  BFF --> Gateway["Gateway"]
  MobileBFF --> Gateway
  Gateway --> Catalog["Catalog service"]
  Gateway --> Billing["Billing service"]`,
    "related": [
      "Backend: API gateway throttling and caching layers",
      "Frontend: Micro-frontend orchestration"
    ]
  },
  {
    "title": "Read path vs write path design",
    "group": "Boundaries and topology",
    "summary": "Read paths and write paths often need different guarantees, storage models, caches, and scaling strategies. Separating them clarifies which flows require immediate correctness and which can tolerate projection lag or denormalized views.",
    "example": "system-read-write-paths",
    "diagram": `flowchart LR
  User["User"] --> Command["Write command"]
  Command --> Primary["Primary store"]
  Primary --> Events["Events"]
  Events --> Projection["Read projection"]
  User --> Query["Read query"]
  Query --> Projection`,
    "related": [
      "Backend: CQRS + Event Sourcing projections",
      "Backend: Read replicas lag monitoring"
    ]
  },
  {
    "title": "Control plane vs data plane",
    "group": "Boundaries and topology",
    "summary": "The control plane configures policy and desired state, while the data plane handles the high-volume request or data path. Separating them keeps runtime traffic fast and resilient even when management workflows are slower or partially unavailable.",
    "example": "system-control-data-plane",
    "diagram": `flowchart TB
  Admin["Admin/API config"] --> Control["Control plane"]
  Control --> Config["Versioned config"]
  Config --> DataPlane["Data plane"]
  Client["Client traffic"] --> DataPlane
  DataPlane --> Service["Service response"]`,
    "related": [
      "Backend: Service mesh traffic shifting",
      "Backend: Feature flags with rollout strategies"
    ]
  },
  {
    "title": "Data modeling from access patterns",
    "group": "Data, consistency, and workflows",
    "summary": "Access-pattern-first data modeling starts with queries, writes, cardinality, ordering, and consistency needs before choosing tables, documents, indexes, or streams. It prevents elegant schemas that cannot serve real traffic.",
    "example": "system-access-pattern-modeling",
    "diagram": `flowchart LR
  Access["Access patterns"] --> Entities["Entities"]
  Access --> Indexes["Indexes"]
  Access --> Denormalized["Denormalized views"]
  Entities --> Store["Storage model"]
  Indexes --> Store
  Denormalized --> Store`,
    "related": [
      "Backend: Query planner and cost-based optimization",
      "Backend: B-tree vs LSM-tree index internals"
    ]
  },
  {
    "title": "Cache placement and invalidation",
    "group": "Data, consistency, and workflows",
    "summary": "Cache placement decides whether data is cached in the browser, edge, gateway, service, database layer, or client state. Invalidation must match freshness requirements, user specificity, mutation flow, and failure behavior.",
    "example": "system-cache-placement",
    "diagram": `flowchart LR
  Browser["Browser cache"] --> Edge["Edge cache"]
  Edge --> Gateway["Gateway cache"]
  Gateway --> Service["Service cache"]
  Service --> Database["Database"]
  Mutations["Writes"] --> Invalidation["Invalidation events"]
  Invalidation --> Edge
  Invalidation --> Service`,
    "related": [
      "Frontend: Cache invalidation strategies",
      "Backend: Distributed cache invalidation"
    ]
  },
  {
    "title": "Partitioning and tenant isolation",
    "group": "Data, consistency, and workflows",
    "summary": "Partitioning splits data and traffic across shards, tenants, regions, or cells. Tenant isolation adds blast-radius control so one large or unhealthy tenant does not degrade unrelated customers.",
    "example": "system-partitioning-tenancy",
    "diagram": `flowchart LR
  Router["Tenant router"] --> CellA["Cell A"]
  Router --> CellB["Cell B"]
  CellA --> DbA["Shard A"]
  CellB --> DbB["Shard B"]
  Tenant1["Tenant 1"] --> Router
  Tenant2["Tenant 2"] --> Router`,
    "related": [
      "Backend: Sharding strategies",
      "Backend: Consistent hashing for load balancing"
    ]
  },
  {
    "title": "Read freshness routing",
    "group": "Data, consistency, and workflows",
    "summary": "Read freshness routing chooses between replicas, caches, primaries, or quorum reads based on how fresh a response must be. It is the system-level version of making read-your-writes and stale-data rules explicit.",
    "example": "system-freshness-routing",
    "diagram": `flowchart LR
  Request["Read request"] --> Policy["Freshness policy"]
  Policy -->|stale ok| Cache["Cache/replica"]
  Policy -->|fresh required| Primary["Primary/quorum"]
  Cache --> Response["Response"]
  Primary --> Response`,
    "related": [
      "Backend: Read replicas lag monitoring",
      "Backend: Eventual consistency anti-patterns"
    ]
  },
  {
    "title": "Async workflow design",
    "group": "Data, consistency, and workflows",
    "summary": "Async workflow design coordinates durable state changes across queues, jobs, events, retries, and compensations. The design must define ownership, idempotency, retry semantics, visibility, and recovery after partial progress.",
    "example": "system-async-workflow",
    "diagram": `flowchart LR
  API["API command"] --> DB["State transition"]
  DB --> Outbox["Outbox event"]
  Outbox --> Queue["Queue"]
  Queue --> Worker["Worker"]
  Worker --> Projection["Projection/status"]
  Worker --> Retry["Retry or compensation"]`,
    "related": [
      "Backend: Outbox pattern for reliable events",
      "Backend: Background job queues retry semantics"
    ]
  },
  {
    "title": "Failure mode analysis",
    "group": "Reliability and operations",
    "summary": "Failure mode analysis lists what can break, how the system detects it, what user impact it creates, and which mitigation applies. It converts architecture diagrams from happy-path pictures into operable designs.",
    "example": "system-failure-modes",
    "diagram": `flowchart LR
  Component["Component"] --> Failure["Failure mode"]
  Failure --> Detection["Detection"]
  Detection --> Mitigation["Mitigation"]
  Mitigation --> UserImpact["User impact"]
  UserImpact --> Priority["Priority"]`,
    "related": [
      "Backend: Chaos engineering principles",
      "Backend: Circuit breaker + bulkhead patterns"
    ]
  },
  {
    "title": "Backpressure and load shedding",
    "group": "Reliability and operations",
    "summary": "Backpressure slows producers when downstream systems are saturated, while load shedding rejects or drops work deliberately to preserve critical paths. A design should define queue limits, priorities, retry rules, and user-visible errors.",
    "example": "system-load-shedding",
    "diagram": `flowchart LR
  Producer["Producer"] --> Queue["Bounded queue"]
  Queue --> Worker["Workers"]
  Worker --> Dependency["Dependency"]
  Queue -->|full| Shed["Reject or degrade"]
  Shed --> Client["Fast failure"]`,
    "related": [
      "Frontend: Backpressure in streams API",
      "Backend: Data pipeline backpressure handling"
    ]
  },
  {
    "title": "Degradation and fallback design",
    "group": "Reliability and operations",
    "summary": "Degradation and fallback design decides which features can be disabled, simplified, cached, or delayed when dependencies fail. Good fallbacks are intentional product states, not accidental error handling.",
    "example": "system-degradation-fallback",
    "diagram": `flowchart LR
  Request["Request"] --> Feature["Primary feature"]
  Feature -->|ok| Full["Full response"]
  Feature -->|fails| Fallback["Fallback path"]
  Fallback --> Cache["Cached/simple response"]
  Fallback --> Notice["User-visible status"]`,
    "related": [
      "Backend: Circuit breaker + bulkhead patterns",
      "Frontend: Optimistic UI rollback strategy"
    ]
  },
  {
    "title": "Disaster recovery objectives (RTO/RPO)",
    "group": "Reliability and operations",
    "summary": "RTO is how long recovery may take, and RPO is how much data loss is acceptable. These objectives drive backup frequency, replication, failover automation, drills, and whether the design needs active-active or active-passive recovery.",
    "example": "system-disaster-recovery",
    "diagram": `flowchart LR
  Primary["Primary region"] --> Backup["Backups"]
  Primary --> Replica["Replica region"]
  Incident["Incident"] --> Failover["Failover plan"]
  Backup --> Restore["Restore point"]
  Replica --> Failover`,
    "related": [
      "Backend: Database failover and split-brain prevention",
      "Backend: Read replicas lag monitoring"
    ]
  },
  {
    "title": "Operational readiness review",
    "group": "Reliability and operations",
    "summary": "Operational readiness checks whether a system can be deployed, observed, rolled back, debugged, scaled, secured, and supported before it handles real traffic. It is the practical bridge between design and production ownership.",
    "example": "system-operational-readiness",
    "diagram": `flowchart LR
  Service["Service"] --> Deploy["Deploy and rollback"]
  Service --> Observe["Metrics/logs/traces"]
  Service --> Runbook["Runbook"]
  Service --> Capacity["Capacity limits"]
  Service --> Security["Access controls"]`,
    "related": [
      "Backend: Observability tracing propagation",
      "Backend: Zero-downtime deployment strategies"
    ]
  },
  {
    "title": "Tracing across async workflows",
    "group": "Reliability and operations",
    "summary": "Tracing across async workflows carries correlation through requests, events, jobs, retries, and projections. Without it, the system can appear healthy while individual user workflows disappear between components.",
    "example": "system-async-tracing",
    "diagram": `flowchart LR
  Request["HTTP request"] --> API["API span"]
  API --> Event["Event with trace context"]
  Event --> Worker["Worker span"]
  Worker --> Projection["Projection span"]
  Projection --> Logs["Correlated logs"]`,
    "related": [
      "Backend: OpenTelemetry tracing propagation",
      "Backend: Log aggregation with sampling"
    ]
  },
  {
    "title": "Runbook and alert design",
    "group": "Reliability and operations",
    "summary": "Runbook and alert design connects symptoms to ownership, impact, first checks, mitigation, and escalation. Alerts should be tied to user impact or fast-burn risk, not every noisy internal metric.",
    "example": "system-alert-design",
    "diagram": `flowchart LR
  SLI["SLI breach"] --> Alert["Alert"]
  Alert --> Triage["Runbook triage"]
  Triage --> Mitigate["Mitigation"]
  Triage --> Escalate["Escalation"]
  Mitigate --> Review["Post-incident review"]`,
    "related": [
      "Backend: Prometheus metric cardinality explosion",
      "Backend: Chaos engineering principles"
    ]
  },
  {
    "title": "Release strategy selection",
    "group": "Reliability and operations",
    "summary": "Release strategy selection chooses between rolling, blue-green, canary, feature flags, shadow traffic, and migrations based on blast radius, reversibility, data compatibility, and confidence signals.",
    "example": "system-release-strategy",
    "diagram": `flowchart LR
  Change["Change"] --> Risk["Risk level"]
  Risk --> Strategy["Release strategy"]
  Strategy --> Signals["Health signals"]
  Signals --> Promote["Promote"]
  Signals --> Rollback["Rollback"]`,
    "related": [
      "Backend: Blue-green vs canary deployments",
      "Backend: Feature flags with rollout strategies"
    ]
  },
  {
    "title": "Threat modeling at system boundaries",
    "group": "Security, abuse, and governance",
    "summary": "Threat modeling at system boundaries identifies trust zones, entry points, assets, attackers, and mitigations. It keeps security connected to architecture instead of treating it as a checklist after implementation.",
    "example": "system-threat-boundaries",
    "diagram": `flowchart LR
  Internet["Internet"] --> Edge["Edge trust boundary"]
  Edge --> API["API trust boundary"]
  API --> Data["Data trust boundary"]
  Attacker["Attacker"] -. probes .-> Edge
  Assets["Assets"] --> Data`,
    "related": [
      "Frontend: Content Security Policy",
      "Backend: OAuth2 token introspection vs JWT validation"
    ]
  },
  {
    "title": "Abuse and quota controls",
    "group": "Security, abuse, and governance",
    "summary": "Abuse and quota controls protect systems from spam, scraping, brute force, runaway automation, and unfair resource use. Effective designs combine identity, rate limits, quotas, anomaly detection, and appeal paths.",
    "example": "system-abuse-quotas",
    "diagram": `flowchart LR
  Request["Request"] --> Identity["Identity/IP/device"]
  Identity --> Quota["Quota policy"]
  Quota -->|allowed| Service["Service"]
  Quota -->|limited| Challenge["Throttle/challenge/block"]
  Challenge --> Audit["Audit trail"]`,
    "related": [
      "Backend: Rate limiting algorithms",
      "Backend: API gateway throttling and caching layers"
    ]
  },
  {
    "title": "Secret and configuration boundaries",
    "group": "Security, abuse, and governance",
    "summary": "Secret and configuration boundaries define where credentials, feature flags, tenant settings, and runtime policy may live. A safe design prevents secrets from leaking to clients, logs, traces, build artifacts, or untrusted plugins.",
    "example": "system-secret-boundaries",
    "diagram": `flowchart LR
  Vault["Secret store"] --> Runtime["Server runtime"]
  Config["Config service"] --> Runtime
  Runtime --> Client["Client-safe config only"]
  Runtime --> Logs["Redacted logs"]
  Client -. no secrets .-> Vault`,
    "related": [
      "Backend: Container runtime security",
      "Frontend: Trusted Types"
    ]
  },
  {
    "title": "Cost-aware architecture",
    "group": "Cost, evolution, and decision records",
    "summary": "Cost-aware architecture models the cost drivers of traffic, storage, compute, egress, third-party APIs, observability, and operational effort. It does not mean choosing the cheapest path; it means making cost part of the design trade-off.",
    "example": "system-cost-model",
    "diagram": `flowchart LR
  Traffic["Traffic"] --> Compute["Compute cost"]
  Storage["Retention"] --> StorageCost["Storage cost"]
  Regions["Regions"] --> Egress["Egress cost"]
  Logs["Telemetry"] --> Observe["Observability cost"]
  Compute --> Total["Total cost model"]
  StorageCost --> Total
  Egress --> Total
  Observe --> Total`,
    "related": [
      "Backend: Log aggregation with sampling",
      "Backend: Serverless cold-start mitigation"
    ]
  },
  {
    "title": "Build vs buy evaluation",
    "group": "Cost, evolution, and decision records",
    "summary": "Build vs buy evaluation compares capability fit, integration risk, lock-in, security, operations, support, cost curves, and strategic differentiation. The useful answer is often a staged decision, not a permanent ideology.",
    "example": "system-build-vs-buy",
    "diagram": `flowchart LR
  Need["Capability need"] --> Build["Build option"]
  Need --> Buy["Buy option"]
  Build --> Criteria["Fit, cost, risk, ownership"]
  Buy --> Criteria
  Criteria --> Decision["Decision and revisit date"]`,
    "related": [
      "Backend: Service discovery",
      "Frontend: Module federation"
    ]
  },
  {
    "title": "Migration and strangler patterns",
    "group": "Cost, evolution, and decision records",
    "summary": "Migration and strangler patterns replace systems incrementally by routing slices of traffic or capability to the new path while the old path keeps running. The design must include parity checks, rollback, data sync, and ownership boundaries.",
    "example": "system-strangler-migration",
    "diagram": `flowchart LR
  Client["Client"] --> Router["Migration router"]
  Router --> Old["Old system"]
  Router --> New["New system"]
  Old --> Compare["Parity checks"]
  New --> Compare
  Compare --> Cutover["Gradual cutover"]`,
    "related": [
      "Backend: Blue-green vs canary deployments",
      "Backend: Backward-compatible schema evolution"
    ]
  },
  {
    "title": "Architecture decision records",
    "group": "Cost, evolution, and decision records",
    "summary": "Architecture decision records capture context, decision, alternatives, consequences, and revisit triggers. They preserve the reasoning behind trade-offs so future engineers can change direction without rediscovering old constraints.",
    "example": "system-adr",
    "diagram": `flowchart LR
  Context["Context"] --> Options["Options"]
  Options --> Decision["Decision"]
  Decision --> Consequences["Consequences"]
  Consequences --> Revisit["Revisit trigger"]`,
    "related": [
      "Backend: Zero-downtime deployment strategies",
      "Frontend: Frontend architecture and rendering models"
    ]
  }
];
