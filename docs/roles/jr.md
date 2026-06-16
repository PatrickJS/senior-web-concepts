# Junior requirements

**Role tag:** jr
**Topics:** 17

Foundational concepts a junior engineer should be able to recognize, explain, and apply with guidance.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Software Engineering: 8
- Data & Storage Engineering: 3
- Platform Engineering: 1
- Network Engineering: 5

## Required concepts

### Software Engineering

#### Code structure and modularity

- [Cohesion and coupling](../software-engineering/topics/cohesion-and-coupling.md) — Cohesion measures how strongly the responsibilities inside a module belong together, while coupling measures how much that module depends on other modules. Good software engineering raises cohesion and controls coupling so changes stay local.
- [Information hiding](../software-engineering/topics/information-hiding.md) — Information hiding keeps decisions that are likely to change inside one module instead of leaking them into every caller. It protects code from ripple effects when storage, parsing, algorithms, or vendor behavior changes.

#### Modeling, APIs, and contracts

- [Value objects](../software-engineering/topics/value-objects.md) — Value objects represent values by their contents instead of identity. They are useful for money, email addresses, quantities, ranges, and other concepts that need validation and equality semantics.

#### Testing and quality signals

- [Unit test boundaries](../software-engineering/topics/unit-test-boundaries.md) — Unit tests should focus on meaningful behavior at a stable boundary, not private implementation trivia. Good unit boundaries make fast tests valuable while leaving room to refactor internals.
- [Test doubles](../software-engineering/topics/test-doubles.md) — Test doubles replace real collaborators with fakes, stubs, spies, or mocks. They are useful when the double preserves the contract being tested, but harmful when they only mirror implementation details.

#### Refactoring and evolution

- [Code smells](../software-engineering/topics/code-smells.md) — Code smells are signals that code may be harder to change than necessary. Long functions, shotgun changes, primitive obsession, feature envy, and duplicate logic are prompts to investigate, not automatic verdicts.

#### Collaboration and delivery discipline

- [Documentation close to code](../software-engineering/topics/documentation-close-to-code.md) — Documentation close to code keeps examples, contracts, commands, and design notes near the implementation they describe. It reduces drift when docs can be reviewed and regenerated with code changes.

#### Debugging, configuration, and runtime behavior

- [Systematic debugging](../software-engineering/topics/systematic-debugging.md) — Systematic debugging forms a hypothesis, chooses the smallest useful observation, compares expected and actual behavior, and updates the model. It prevents random edits from hiding the real cause.

### Data & Storage Engineering

#### Relational modeling and SQL

- [Relational schema design](../data-storage/topics/relational-schema-design.md) — Relational schema design maps domain entities, relationships, constraints, and access patterns into tables that can preserve integrity over time. Good design uses keys, constraints, naming, cardinality, and ownership boundaries deliberately.
- [SQL joins and query shape](../data-storage/topics/sql-joins-and-query-shape.md) — SQL joins combine rows across tables, but query shape determines cardinality, duplicate rows, filter placement, and whether the database can use indexes. Engineers should explain inner, outer, semi, and anti joins from result semantics first.
- [Data integrity constraints](../data-storage/topics/data-integrity-constraints.md) — Data integrity constraints make correctness durable inside the database through primary keys, foreign keys, unique constraints, checks, not-null rules, and exclusion constraints. They protect invariants even when application code has bugs.

### Platform Engineering

#### Source control, CI, and release automation

- [Git workflow and branch protection](../platform-engineering/topics/git-workflow-and-branch-protection.md) — Git workflow and branch protection define how changes move from local work to reviewed, tested, mergeable history. Useful controls include required checks, protected branches, signed commits or tags, and review ownership.

### Network Engineering

#### IP addressing and routing fundamentals

- [CIDR subnet planning](../network-engineering/topics/cidr-subnet-planning.md) — CIDR subnet planning divides address space into ranges sized for hosts, growth, routing, and isolation. A good plan leaves room for expansion, avoids overlapping ranges, and keeps route tables understandable.
- [Private vs public addressing](../network-engineering/topics/private-vs-public-addressing.md) — Private and public addressing define whether traffic can be routed on the public internet or must stay inside a private network boundary. Engineers should recognize RFC1918 ranges, loopback, link-local addresses, and the translation or proxy paths needed for egress.

#### DNS, TLS, and edge delivery

- [DNS record types and TTLs](../network-engineering/topics/dns-record-types-and-ttls.md) — DNS record types and TTLs control how names resolve and how quickly changes propagate. Practical fluency includes A, AAAA, CNAME, MX, TXT, NS, CAA, apex constraints, and cache duration trade-offs.

#### Transport protocols and performance

- [TCP handshake and connection lifecycle](../network-engineering/topics/tcp-handshake-and-connection-lifecycle.md) — The TCP handshake and connection lifecycle establish reliable ordered byte streams, then tear them down with FIN or RST behavior. Connection setup, reuse, idle timeouts, and keepalives affect latency and failure handling.

#### Observability and troubleshooting

- [Traceroute and path diagnosis](../network-engineering/topics/traceroute-and-path-diagnosis.md) — Traceroute and path diagnosis reveal likely network hops, latency jumps, and routing asymmetry. Results require interpretation because rate limits, firewalls, tunnels, and ICMP policy can hide or distort hops.
