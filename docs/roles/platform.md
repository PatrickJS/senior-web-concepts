# Platform requirements

**Role tag:** platform
**Topics:** 62

Requirements for delivery systems, infrastructure, runtime platforms, security controls, observability, and developer experience.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Software Engineering: 1
- Design Systems: 3
- Data & Storage Engineering: 9
- Platform Engineering: 32
- Network Engineering: 17

## Required concepts

### Software Engineering

#### Debugging, configuration, and runtime behavior

- [Configuration boundaries](../software-engineering/topics/configuration-boundaries.md) — Configuration boundaries separate code from environment-specific values while keeping validation close to startup. Strong config boundaries prevent missing, misspelled, or incompatible settings from failing deep in runtime.

### Design Systems

#### Tokens and theming

- [Token versioning and migration](../design-system/topics/token-versioning-and-migration.md) — Token versioning protects consuming apps when a token is renamed, removed, or changes meaning. Migration notes, aliases, deprecation windows, and codemods keep design changes from becoming scattered UI regressions.

#### Documentation, testing, and release

- [Deprecation and migration playbooks](../design-system/topics/deprecation-and-migration-playbooks.md) — Deprecation playbooks give teams a path away from old tokens, props, variants, or components. Good migrations include timelines, warnings, codemods, examples, support windows, and removal criteria.

#### Adoption and operations

- [Package distribution and consuming apps](../design-system/topics/package-distribution-and-consuming-apps.md) — Design system packages must work for consuming apps with clear peer dependencies, build outputs, versioning, tree shaking, CSS loading, and upgrade guidance. Distribution quality determines whether teams can adopt the system safely.

### Data & Storage Engineering

#### Indexing and query performance

- [Connection pool sizing](../data-storage/topics/connection-pool-sizing.md) — Connection pool sizing balances application concurrency against database capacity. Too few connections bottleneck callers; too many cause queueing, memory pressure, lock contention, and database overload.
- [Hot query and slow query triage](../data-storage/topics/hot-query-and-slow-query-triage.md) — Hot query triage identifies the queries that dominate database load by frequency, latency, rows scanned, lock wait, and memory use. Fixes can include index changes, query rewrites, caching, pagination, or product flow changes.

#### Transactions, migrations, and integrity

- [Schema migration expand-contract](../data-storage/topics/schema-migration-expand-contract.md) — Expand-contract migrations introduce schema changes in backward-compatible phases: expand, dual-read/write or backfill, cut over, then contract. This keeps old and new code safe during rolling deploys.
- [Online backfills](../data-storage/topics/online-backfills.md) — Online backfills update existing data while production traffic continues. Safe backfills use batches, checkpoints, idempotency, throttling, observability, and rollback or pause behavior.

#### Storage topology and replication

- [Partitioning and sharding strategy](../data-storage/topics/partitioning-and-sharding-strategy.md) — Partitioning and sharding split data by tenant, key, hash, range, geography, or workload. A good strategy minimizes hot partitions, cross-shard joins, rebalancing pain, and tenant blast radius.
- [Replication lag and read scaling](../data-storage/topics/replication-lag-and-read-scaling.md) — Read replicas increase read capacity but introduce freshness lag and failover complexity. Designs must define which reads can be stale, how lag is measured, and when to route to the primary.
- [Backup, restore, and point-in-time recovery](../data-storage/topics/backup-restore-and-point-in-time-recovery.md) — Backups only matter if restores are tested. Point-in-time recovery combines base backups and logs to restore to a chosen moment, bounded by RPO, RTO, retention, and access controls.
- [Time-series data modeling](../data-storage/topics/time-series-data-modeling.md) — Time-series modeling optimizes append-heavy measurements with timestamps, tags, retention, rollups, downsampling, and query windows. It is common in observability, IoT, billing, and analytics.

#### Analytics, pipelines, and governance

- [Data lineage and observability](../data-storage/topics/data-lineage-and-observability.md) — Data lineage and observability show where data came from, how it changed, when it refreshed, and what downstream assets depend on it. They are the operational controls for trusted analytical systems.

### Platform Engineering

#### Source control, CI, and release automation

- [Git workflow and branch protection](../platform-engineering/topics/git-workflow-and-branch-protection.md) — Git workflow and branch protection define how changes move from local work to reviewed, tested, mergeable history. Useful controls include required checks, protected branches, signed commits or tags, and review ownership.
- [CI pipeline design](../platform-engineering/topics/ci-pipeline-design.md) — CI pipeline design orders checks so fast deterministic failures happen early and expensive integration work runs only when needed. Good pipelines separate install, lint, test, build, package, and artifact verification.
- [Generated artifact drift checks](../platform-engineering/topics/generated-artifact-drift-checks.md) — Generated artifact drift checks run the generator in CI and fail when committed generated output is stale. This protects source-of-truth workflows without letting CI silently rewrite reviewed code.
- [Deployment strategy selection](../platform-engineering/topics/deployment-strategy-selection.md) — Deployment strategy selection chooses rolling, blue-green, canary, shadow, or feature-flagged rollout based on reversibility, data compatibility, blast radius, and signal quality.
- [Rollback and roll-forward planning](../platform-engineering/topics/rollback-and-roll-forward-planning.md) — Rollback and roll-forward planning defines what happens when a release fails. The plan must account for code, config, data migrations, caches, messages, and external side effects.

#### Infrastructure, environments, and cloud networking

- [Infrastructure as Code state](../platform-engineering/topics/infrastructure-as-code-state.md) — Infrastructure as Code state records the known deployed resources and their desired configuration. State must be locked, backed up, reviewed, and protected because it is a control surface for production.
- [Environment promotion](../platform-engineering/topics/environment-promotion.md) — Environment promotion moves the same build artifact through development, staging, and production with environment-specific config. It prevents rebuilding different binaries for each environment.
- [Cloud networking basics](../platform-engineering/topics/cloud-networking-basics.md) — Cloud networking basics include VPCs, subnets, routing tables, NAT, firewalls, private endpoints, and service reachability. Platform engineers must reason about packets, identity, and policy together.
- [DNS and certificate operations](../platform-engineering/topics/dns-and-certificate-operations.md) — DNS and certificate operations keep names resolvable and encrypted endpoints trusted. Practical knowledge includes TTLs, CNAMEs, apex records, ACME renewals, SANs, wildcard certs, and rollout timing.
- [Load balancing and health checks](../platform-engineering/topics/load-balancing-and-health-checks.md) — Load balancing distributes traffic across healthy targets, while health checks decide whether a target should receive traffic. Bad checks can amplify incidents by sending traffic to broken or warming instances.

#### Containers, orchestration, and runtime platforms

- [Container image build hygiene](../platform-engineering/topics/container-image-build-hygiene.md) — Container image hygiene reduces build drift, size, vulnerabilities, and runtime privilege. Good images pin bases, avoid secrets, run as non-root, minimize layers, and separate build tools from runtime.
- [Kubernetes workload primitives](../platform-engineering/topics/kubernetes-workload-primitives.md) — Kubernetes workload primitives such as Deployments, StatefulSets, Jobs, Services, ConfigMaps, Secrets, and Ingresses describe desired runtime state. Engineers should know what each primitive owns and does not own.
- [Autoscaling signal selection](../platform-engineering/topics/autoscaling-signal-selection.md) — Autoscaling signal selection chooses metrics that indicate real demand, such as CPU, memory, queue depth, request concurrency, or custom service latency. Bad signals can scale too late, too far, or in the wrong direction.
- [Service mesh trade-offs](../platform-engineering/topics/service-mesh-trade-offs.md) — Service meshes add traffic policy, mTLS, retries, telemetry, and routing at the sidecar or proxy layer. They also add operational complexity, resource cost, and debugging paths that teams must be ready to own.
- [Serverless operational constraints](../platform-engineering/topics/serverless-operational-constraints.md) — Serverless platforms remove server management but introduce limits around cold starts, execution duration, concurrency, packaging, network access, and observability. The runtime shape must fit the workload.

#### Security, identity, and supply chain

- [Secrets management and rotation](../platform-engineering/topics/secrets-management-and-rotation.md) — Secrets management controls how credentials are created, stored, injected, rotated, audited, and revoked. Rotation must be designed so old and new credentials can overlap safely.
- [IAM least privilege](../platform-engineering/topics/iam-least-privilege.md) — IAM least privilege grants only the actions and resources needed for a role. It requires scoping by identity, environment, action, resource, condition, and operational break-glass paths.
- [Supply chain provenance](../platform-engineering/topics/supply-chain-provenance.md) — Supply chain provenance records where artifacts came from, how they were built, and what source revision produced them. It supports auditability, tamper detection, and safer deployment policy.
- [Policy as code](../platform-engineering/topics/policy-as-code.md) — Policy as code evaluates infrastructure, deployment, or access rules automatically before changes land. It makes governance reviewable and testable instead of relying on manual memory.
- [Dependency update automation](../platform-engineering/topics/dependency-update-automation.md) — Dependency update automation opens reviewed, testable changes for package and action updates. It reduces stale dependency risk but needs grouping, rate limits, lockfile discipline, and CI confidence.

#### Observability, incidents, and operations

- [Observability baseline](../platform-engineering/topics/observability-baseline.md) — An observability baseline defines the minimum logs, metrics, traces, dashboards, and service metadata every production service should expose. It lets responders compare systems quickly during incidents.
- [Alert routing and ownership](../platform-engineering/topics/alert-routing-and-ownership.md) — Alert routing and ownership connect symptoms to responsible teams, escalation policies, runbooks, and user impact. Alerts without owners become noise; owners without context burn out.
- [Incident command and postmortems](../platform-engineering/topics/incident-command-and-postmortems.md) — Incident command coordinates roles, communication, mitigation, timeline, and follow-up during production incidents. Postmortems turn incidents into system improvements without blame.
- [SLO burn-rate alerting](../platform-engineering/topics/slo-burn-rate-alerting.md) — SLO burn-rate alerting pages when a service consumes its error budget too quickly across short and long windows. It connects alert urgency to user-visible reliability targets.
- [Runbooks and game days](../platform-engineering/topics/runbooks-and-game-days.md) — Runbooks document diagnosis and mitigation steps, while game days rehearse failures before real incidents. Together they turn operational knowledge into practiced team behavior.
- [Cost allocation and FinOps](../platform-engineering/topics/cost-allocation-and-finops.md) — Cost allocation and FinOps connect platform spend to teams, products, environments, and unit economics. Good systems expose cost drivers early enough for engineering decisions to change them.

#### Developer experience and platform product

- [Internal developer platforms](../platform-engineering/topics/internal-developer-platforms.md) — Internal developer platforms provide paved paths for teams to build, deploy, observe, and operate software. They should be treated as products with users, adoption metrics, support, and feedback loops.
- [Golden paths and service templates](../platform-engineering/topics/golden-paths-and-service-templates.md) — Golden paths and templates encode recommended architecture, CI, deployment, observability, security, and ownership defaults. They reduce repeated decisions without blocking teams that need justified exceptions.
- [Local development environments](../platform-engineering/topics/local-development-environments.md) — Local development environments should make common workflows fast and realistic without requiring production credentials. The design balances fidelity, startup time, dependency weight, and reproducibility.
- [Feature flag operations](../platform-engineering/topics/feature-flag-operations.md) — Feature flag operations manage targeting, ownership, cleanup, defaults, audit logs, and failure behavior. Without lifecycle discipline, flags become hidden production configuration debt.
- [Configuration management and dynamic rollout](../platform-engineering/topics/configuration-management-and-dynamic-rollout.md) — Configuration management separates deploy-time code from runtime policy. Dynamic rollout lets teams change behavior safely, but requires validation, auditability, scoping, rollback, and cache invalidation.
- [Platform API ergonomics](../platform-engineering/topics/platform-api-ergonomics.md) — Platform API ergonomics determine how easily product teams can use internal capabilities without learning every underlying system. Good APIs expose safe defaults, clear errors, stable contracts, and escape hatches.

### Network Engineering

#### IP addressing and routing fundamentals

- [CIDR subnet planning](../network-engineering/topics/cidr-subnet-planning.md) — CIDR subnet planning divides address space into ranges sized for hosts, growth, routing, and isolation. A good plan leaves room for expansion, avoids overlapping ranges, and keeps route tables understandable.
- [Private vs public addressing](../network-engineering/topics/private-vs-public-addressing.md) — Private and public addressing define whether traffic can be routed on the public internet or must stay inside a private network boundary. Engineers should recognize RFC1918 ranges, loopback, link-local addresses, and the translation or proxy paths needed for egress.
- [Route tables and next hops](../network-engineering/topics/route-tables-and-next-hops.md) — Route tables choose the next hop for packets based on destination prefixes. Longest-prefix matching, default routes, blackhole routes, and asymmetric paths are core ideas for debugging reachability.
- [NAT and egress design](../network-engineering/topics/nat-and-egress-design.md) — NAT and egress design let private workloads initiate outbound traffic through shared public addresses. Designs must account for port exhaustion, source identity, logging, allowlists, and failure domains.
- [Anycast and global routing](../network-engineering/topics/anycast-and-global-routing.md) — Anycast advertises the same address from multiple locations so routing sends users to a nearby or preferred site. It improves global latency and resilience but requires careful health signaling and traffic-drain behavior.

#### DNS, TLS, and edge delivery

- [DNS record types and TTLs](../network-engineering/topics/dns-record-types-and-ttls.md) — DNS record types and TTLs control how names resolve and how quickly changes propagate. Practical fluency includes A, AAAA, CNAME, MX, TXT, NS, CAA, apex constraints, and cache duration trade-offs.
- [CDN caching and edge routing](../network-engineering/topics/cdn-caching-and-edge-routing.md) — CDN caching and edge routing move responses closer to users while respecting cache keys, freshness, purge behavior, origin shielding, and request routing policy. The edge becomes part of the production system, not just a static asset layer.

#### Transport protocols and performance

- [MTU, fragmentation, and PMTUD](../network-engineering/topics/mtu-fragmentation-and-pmtud.md) — MTU limits the largest packet a path can carry without fragmentation. Path MTU discovery failures can produce confusing partial outages where small requests work and larger responses stall.
- [Load balancer algorithms](../network-engineering/topics/load-balancer-algorithms.md) — Load balancer algorithms choose targets with policies such as round robin, least connections, weighted routing, hashing, locality, or latency. The choice affects fairness, cache locality, stickiness, failure recovery, and hot spots.

#### Security and access control

- [VPN and private connectivity](../network-engineering/topics/vpn-and-private-connectivity.md) — VPN and private connectivity link users, offices, clouds, and partners without exposing services publicly. Designs must cover routing, authentication, split tunnel behavior, overlapping CIDRs, failover, and auditability.

#### Service networking and cloud topology

- [VPC peering and transit gateways](../network-engineering/topics/vpc-peering-and-transit-gateways.md) — VPC peering and transit gateways connect private networks with different scaling and routing properties. Topology choices affect blast radius, route propagation, inspection points, and ownership boundaries.
- [Service discovery and DNS-based routing](../network-engineering/topics/service-discovery-and-dns-based-routing.md) — Service discovery lets callers find healthy service instances or stable service names. DNS-based discovery is simple and portable, but TTLs, negative caching, health checks, and client caching shape failover behavior.
- [Ingress and egress gateway design](../network-engineering/topics/ingress-and-egress-gateway-design.md) — Ingress and egress gateways centralize traffic entry and exit for policy, observability, routing, and security controls. They also become critical-path infrastructure with capacity and failure-mode obligations.
- [IPv4 vs IPv6 dual-stack](../network-engineering/topics/ipv4-vs-ipv6-dual-stack.md) — IPv4 and IPv6 dual-stack systems support both address families across DNS, routing, firewalls, load balancers, clients, and observability. Partial dual-stack rollouts can produce asymmetric reachability failures.

#### Observability and troubleshooting

- [Synthetic network probes](../network-engineering/topics/synthetic-network-probes.md) — Synthetic network probes continuously test reachability, DNS, TLS, latency, packet loss, and regional routing from controlled vantage points. They catch network-path problems before users or services report them.
- [SLOs for network reliability](../network-engineering/topics/slos-for-network-reliability.md) — Network reliability SLOs define measurable expectations for availability, latency, loss, DNS success, TLS success, and regional reachability. They connect lower-level signals to user-visible service behavior.
- [Incident triage for network partitions](../network-engineering/topics/incident-triage-for-network-partitions.md) — Network partition triage separates application failure from reachability, DNS, routing, firewall, load balancer, or provider issues. Responders need a disciplined path from symptom to packet path to ownership.
