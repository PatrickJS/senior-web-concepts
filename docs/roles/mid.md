# Mid-level requirements

**Role tag:** mid
**Topics:** 46

Concepts a mid-level engineer should be able to apply independently in routine product and platform work.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Software Engineering: 10
- Design Systems: 7
- Data & Storage Engineering: 7
- Platform Engineering: 10
- Network Engineering: 12

## Required concepts

### Software Engineering

#### Code structure and modularity

- [Abstraction boundaries](../software-engineering/topics/abstraction-boundaries.md) — An abstraction boundary exposes what callers need while hiding volatile implementation details. The boundary should make correct use easier, make invalid use harder, and leave room for implementation changes.
- [Composition over inheritance](../software-engineering/topics/composition-over-inheritance.md) — Composition builds behavior by passing collaborators or functions together, while inheritance shares behavior through parent classes. Composition usually makes behavior easier to test, replace, and combine without deep class hierarchies.

#### Modeling, APIs, and contracts

- [Domain modeling](../software-engineering/topics/domain-modeling.md) — Domain modeling captures the names, rules, states, and workflows of the problem space in code. Strong models reduce translation errors between product language, data structures, and business behavior.
- [Invariants](../software-engineering/topics/invariants.md) — Invariants are facts that must remain true before and after operations. Naming invariants explicitly turns hidden assumptions into validations, tests, constructors, and state transition rules.
- [Error handling strategy](../software-engineering/topics/error-handling-strategy.md) — Error handling strategy decides which failures throw, which return typed outcomes, which retry, which are user-visible, and which are programmer bugs. A consistent strategy keeps failures inspectable instead of accidental.
- [Result types and explicit outcomes](../software-engineering/topics/result-types-and-explicit-outcomes.md) — Result types represent success and failure as data. They are useful when callers are expected to branch on known outcomes such as validation failures, missing records, authorization decisions, or conflicts.

#### Testing and quality signals

- [Integration test boundaries](../software-engineering/topics/integration-test-boundaries.md) — Integration tests verify that real collaborators work together across module, process, storage, or protocol boundaries. They should cover risky contracts that unit tests cannot prove.

#### Refactoring and evolution

- [Refactoring in small steps](../software-engineering/topics/refactoring-in-small-steps.md) — Refactoring changes code structure without changing observable behavior. Small verified steps reduce risk by keeping each move understandable, reversible, and covered by existing or characterization tests.

#### Collaboration and delivery discipline

- [Code review quality](../software-engineering/topics/code-review-quality.md) — Code review quality depends on reviewing behavior, risk, maintainability, tests, naming, compatibility, and operational impact. Reviews should make the change better without becoming a style-only gate.

#### Debugging, configuration, and runtime behavior

- [Contextual logging](../software-engineering/topics/contextual-logging.md) — Contextual logging records enough stable identifiers and state to reconstruct behavior without dumping sensitive data. Good logs explain what happened, where, for whom, and why the code chose that path.

### Design Systems

#### Foundations and taxonomy

- [Component inventory and audit](../design-system/topics/component-inventory-and-audit.md) — A component inventory identifies repeated UI patterns, implementation variants, usage frequency, accessibility risk, and ownership gaps. It turns vague design debt into a prioritized system backlog.

#### Figma and design-code handoff

- [Figma component variants](../design-system/topics/figma-component-variants.md) — Figma variants model the supported visual states and options for a component. They should map closely to code props so designers and engineers are discussing the same combinations and constraints.
- [Auto layout and responsive constraints](../design-system/topics/auto-layout-and-responsive-constraints.md) — Auto layout and responsive constraints make design intent explicit for spacing, wrapping, alignment, truncation, and resizing. They reduce ambiguity when a Figma frame becomes real CSS layout.
- [GitHub issues for design changes](../design-system/topics/github-issues-for-design-changes.md) — GitHub issues connect design requests to engineering review, implementation, tests, release notes, and linked Figma evidence. They make design system changes traceable instead of scattered across comments and chat.

#### Component API and implementation

- [Visual states and interaction contracts](../design-system/topics/visual-states-and-interaction-contracts.md) — Visual states such as hover, focus, disabled, loading, selected, invalid, and pressed are interaction contracts. They should be represented in design, documentation, tests, and implementation with the same names.

#### Documentation, testing, and release

- [Storybook-driven documentation](../design-system/topics/storybook-driven-documentation.md) — Storybook-style documentation pairs component examples with props, states, accessibility notes, tokens, and usage guidance. It becomes a shared review surface for design, engineering, QA, and product teams.
- [Changelog and release notes for components](../design-system/topics/changelog-and-release-notes-for-components.md) — Component changelogs explain what changed, why it changed, what apps must update, and whether visual or behavioral snapshots should be reviewed. They make design system releases consumable by product teams.

### Data & Storage Engineering

#### Relational modeling and SQL

- [Normalization vs denormalization](../data-storage/topics/normalization-vs-denormalization.md) — Normalization reduces duplication and update anomalies, while denormalization duplicates data to speed reads or simplify access. The trade-off is correctness and write complexity versus query performance and product latency.

#### Indexing and query performance

- [Connection pool sizing](../data-storage/topics/connection-pool-sizing.md) — Connection pool sizing balances application concurrency against database capacity. Too few connections bottleneck callers; too many cause queueing, memory pressure, lock contention, and database overload.

#### Transactions, migrations, and integrity

- [Optimistic concurrency control](../data-storage/topics/optimistic-concurrency-control.md) — Optimistic concurrency control detects conflicting writes with versions, timestamps, compare-and-swap, or conditional updates. It works well when conflicts are rare and retry behavior is explicit.

#### Storage topology and replication

- [Search indexing and relevance](../data-storage/topics/search-indexing-and-relevance.md) — Search indexing transforms source records into searchable documents with tokenization, ranking signals, filters, facets, and freshness rules. Search is a derived data system that needs sync and repair paths.

#### Analytics, pipelines, and governance

- [OLTP vs OLAP system choice](../data-storage/topics/oltp-vs-olap-system-choice.md) — OLTP systems optimize transactional correctness and low-latency writes, while OLAP systems optimize analytical scans and aggregations. Mixing them without boundaries can hurt both product behavior and reporting.
- [ETL vs ELT pipelines](../data-storage/topics/etl-vs-elt-pipelines.md) — ETL transforms before loading into the target system, while ELT loads raw data first and transforms inside the analytical store. The decision changes cost, lineage, debugging, privacy, and ownership.
- [Data quality checks](../data-storage/topics/data-quality-checks.md) — Data quality checks assert freshness, completeness, uniqueness, value ranges, referential integrity, and volume expectations. They catch broken ingestion or product instrumentation before decisions depend on bad data.

### Platform Engineering

#### Source control, CI, and release automation

- [CI pipeline design](../platform-engineering/topics/ci-pipeline-design.md) — CI pipeline design orders checks so fast deterministic failures happen early and expensive integration work runs only when needed. Good pipelines separate install, lint, test, build, package, and artifact verification.

#### Infrastructure, environments, and cloud networking

- [Environment promotion](../platform-engineering/topics/environment-promotion.md) — Environment promotion moves the same build artifact through development, staging, and production with environment-specific config. It prevents rebuilding different binaries for each environment.
- [Cloud networking basics](../platform-engineering/topics/cloud-networking-basics.md) — Cloud networking basics include VPCs, subnets, routing tables, NAT, firewalls, private endpoints, and service reachability. Platform engineers must reason about packets, identity, and policy together.
- [DNS and certificate operations](../platform-engineering/topics/dns-and-certificate-operations.md) — DNS and certificate operations keep names resolvable and encrypted endpoints trusted. Practical knowledge includes TTLs, CNAMEs, apex records, ACME renewals, SANs, wildcard certs, and rollout timing.
- [Load balancing and health checks](../platform-engineering/topics/load-balancing-and-health-checks.md) — Load balancing distributes traffic across healthy targets, while health checks decide whether a target should receive traffic. Bad checks can amplify incidents by sending traffic to broken or warming instances.

#### Containers, orchestration, and runtime platforms

- [Container image build hygiene](../platform-engineering/topics/container-image-build-hygiene.md) — Container image hygiene reduces build drift, size, vulnerabilities, and runtime privilege. Good images pin bases, avoid secrets, run as non-root, minimize layers, and separate build tools from runtime.

#### Security, identity, and supply chain

- [Dependency update automation](../platform-engineering/topics/dependency-update-automation.md) — Dependency update automation opens reviewed, testable changes for package and action updates. It reduces stale dependency risk but needs grouping, rate limits, lockfile discipline, and CI confidence.

#### Observability, incidents, and operations

- [Observability baseline](../platform-engineering/topics/observability-baseline.md) — An observability baseline defines the minimum logs, metrics, traces, dashboards, and service metadata every production service should expose. It lets responders compare systems quickly during incidents.
- [Runbooks and game days](../platform-engineering/topics/runbooks-and-game-days.md) — Runbooks document diagnosis and mitigation steps, while game days rehearse failures before real incidents. Together they turn operational knowledge into practiced team behavior.

#### Developer experience and platform product

- [Local development environments](../platform-engineering/topics/local-development-environments.md) — Local development environments should make common workflows fast and realistic without requiring production credentials. The design balances fidelity, startup time, dependency weight, and reproducibility.

### Network Engineering

#### IP addressing and routing fundamentals

- [Route tables and next hops](../network-engineering/topics/route-tables-and-next-hops.md) — Route tables choose the next hop for packets based on destination prefixes. Longest-prefix matching, default routes, blackhole routes, and asymmetric paths are core ideas for debugging reachability.
- [NAT and egress design](../network-engineering/topics/nat-and-egress-design.md) — NAT and egress design let private workloads initiate outbound traffic through shared public addresses. Designs must account for port exhaustion, source identity, logging, allowlists, and failure domains.

#### DNS, TLS, and edge delivery

- [Recursive vs authoritative DNS](../network-engineering/topics/recursive-vs-authoritative-dns.md) — Recursive resolvers answer client queries by consulting authoritative DNS servers and caching results. Knowing the difference helps diagnose stale answers, delegation mistakes, split-horizon DNS, and resolver-specific failures.
- [TLS certificate chain validation](../network-engineering/topics/tls-certificate-chain-validation.md) — TLS certificate chain validation proves that a presented certificate chains to a trusted root and matches the requested host. Failures can come from expired certs, missing intermediates, name mismatch, weak policy, or incorrect time.
- [HTTP proxy and reverse proxy behavior](../network-engineering/topics/http-proxy-and-reverse-proxy-behavior.md) — HTTP proxies and reverse proxies terminate, forward, rewrite, buffer, retry, and observe traffic between clients and services. Headers such as Host, X-Forwarded-For, and Forwarded become trust boundaries.

#### Transport protocols and performance

- [Load balancer algorithms](../network-engineering/topics/load-balancer-algorithms.md) — Load balancer algorithms choose targets with policies such as round robin, least connections, weighted routing, hashing, locality, or latency. The choice affects fairness, cache locality, stickiness, failure recovery, and hot spots.

#### Security and access control

- [Firewall rule ordering](../network-engineering/topics/firewall-rule-ordering.md) — Firewall rule ordering determines which allow or deny rule applies first. Specificity, default deny, explicit egress, logging, and rule shadowing are essential for both security and debugging.
- [Security groups vs network ACLs](../network-engineering/topics/security-groups-vs-network-acls.md) — Security groups and network ACLs apply network policy at different scopes and with different state behavior. Engineers should understand instance, subnet, stateful, stateless, inbound, and outbound rule implications.

#### Service networking and cloud topology

- [Service discovery and DNS-based routing](../network-engineering/topics/service-discovery-and-dns-based-routing.md) — Service discovery lets callers find healthy service instances or stable service names. DNS-based discovery is simple and portable, but TTLs, negative caching, health checks, and client caching shape failover behavior.
- [IPv4 vs IPv6 dual-stack](../network-engineering/topics/ipv4-vs-ipv6-dual-stack.md) — IPv4 and IPv6 dual-stack systems support both address families across DNS, routing, firewalls, load balancers, clients, and observability. Partial dual-stack rollouts can produce asymmetric reachability failures.

#### Observability and troubleshooting

- [Packet capture fundamentals](../network-engineering/topics/packet-capture-fundamentals.md) — Packet capture fundamentals help engineers inspect actual traffic rather than inferred application behavior. Good captures choose the right interface, filters, time window, and privacy boundaries.
- [Synthetic network probes](../network-engineering/topics/synthetic-network-probes.md) — Synthetic network probes continuously test reachability, DNS, TLS, latency, packet loss, and regional routing from controlled vantage points. They catch network-path problems before users or services report them.
