# Security requirements

**Role tag:** security
**Topics:** 13

Requirements that involve access control, policy, supply chain, privacy, abuse prevention, and secure production boundaries.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Software Engineering: 1
- Data & Storage Engineering: 1
- Platform Engineering: 6
- Network Engineering: 5

## Required concepts

### Software Engineering

#### Debugging, configuration, and runtime behavior

- [Contextual logging](../software-engineering/topics/contextual-logging.md) — Contextual logging records enough stable identifiers and state to reconstruct behavior without dumping sensitive data. Good logs explain what happened, where, for whom, and why the code chose that path.

### Data & Storage Engineering

#### Analytics, pipelines, and governance

- [Data retention and archival policy](../data-storage/topics/data-retention-and-archival-policy.md) — Retention and archival policy define how long data stays hot, warm, cold, anonymized, or deleted. It balances product needs, cost, legal obligations, privacy, and restore expectations.

### Platform Engineering

#### Containers, orchestration, and runtime platforms

- [Container image build hygiene](../platform-engineering/topics/container-image-build-hygiene.md) — Container image hygiene reduces build drift, size, vulnerabilities, and runtime privilege. Good images pin bases, avoid secrets, run as non-root, minimize layers, and separate build tools from runtime.

#### Security, identity, and supply chain

- [Secrets management and rotation](../platform-engineering/topics/secrets-management-and-rotation.md) — Secrets management controls how credentials are created, stored, injected, rotated, audited, and revoked. Rotation must be designed so old and new credentials can overlap safely.
- [IAM least privilege](../platform-engineering/topics/iam-least-privilege.md) — IAM least privilege grants only the actions and resources needed for a role. It requires scoping by identity, environment, action, resource, condition, and operational break-glass paths.
- [Supply chain provenance](../platform-engineering/topics/supply-chain-provenance.md) — Supply chain provenance records where artifacts came from, how they were built, and what source revision produced them. It supports auditability, tamper detection, and safer deployment policy.
- [Policy as code](../platform-engineering/topics/policy-as-code.md) — Policy as code evaluates infrastructure, deployment, or access rules automatically before changes land. It makes governance reviewable and testable instead of relying on manual memory.
- [Dependency update automation](../platform-engineering/topics/dependency-update-automation.md) — Dependency update automation opens reviewed, testable changes for package and action updates. It reduces stale dependency risk but needs grouping, rate limits, lockfile discipline, and CI confidence.

### Network Engineering

#### DNS, TLS, and edge delivery

- [TLS certificate chain validation](../network-engineering/topics/tls-certificate-chain-validation.md) — TLS certificate chain validation proves that a presented certificate chains to a trusted root and matches the requested host. Failures can come from expired certs, missing intermediates, name mismatch, weak policy, or incorrect time.

#### Security and access control

- [Firewall rule ordering](../network-engineering/topics/firewall-rule-ordering.md) — Firewall rule ordering determines which allow or deny rule applies first. Specificity, default deny, explicit egress, logging, and rule shadowing are essential for both security and debugging.
- [Security groups vs network ACLs](../network-engineering/topics/security-groups-vs-network-acls.md) — Security groups and network ACLs apply network policy at different scopes and with different state behavior. Engineers should understand instance, subnet, stateful, stateless, inbound, and outbound rule implications.
- [Zero trust network access](../network-engineering/topics/zero-trust-network-access.md) — Zero trust network access grants service access based on identity, device posture, context, and policy rather than broad network location. It shrinks implicit trust but requires strong identity, logging, and exception handling.
- [DDoS protection and traffic scrubbing](../network-engineering/topics/ddos-protection-and-traffic-scrubbing.md) — DDoS protection and traffic scrubbing absorb or filter malicious floods before they exhaust application, network, or origin capacity. Useful defenses combine edge capacity, rate limits, challenge flows, filtering, and runbooks.
