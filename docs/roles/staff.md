# Staff requirements

**Role tag:** staff
**Topics:** 7

Concepts a staff-level engineer should be able to apply across teams, platform boundaries, and long-lived architecture decisions.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Design Systems: 2
- Data & Storage Engineering: 1
- Platform Engineering: 4

## Required concepts

### Design Systems

#### Adoption and operations

- [Cross-team design system roadmap](../design-system/topics/cross-team-design-system-roadmap.md) — A cross-team roadmap balances product needs, accessibility fixes, token migrations, component quality, design language evolution, and platform investment. It keeps the system from becoming only a component backlog.
- [Governance between Figma and GitHub](../design-system/topics/governance-between-figma-and-github.md) — Figma and GitHub governance defines how design decisions become reviewed code changes, packages, docs, and releases. The goal is traceable alignment between the design source of truth and shipped UI components.

### Data & Storage Engineering

#### Analytics, pipelines, and governance

- [Data lineage and observability](../data-storage/topics/data-lineage-and-observability.md) — Data lineage and observability show where data came from, how it changed, when it refreshed, and what downstream assets depend on it. They are the operational controls for trusted analytical systems.

### Platform Engineering

#### Containers, orchestration, and runtime platforms

- [Service mesh trade-offs](../platform-engineering/topics/service-mesh-trade-offs.md) — Service meshes add traffic policy, mTLS, retries, telemetry, and routing at the sidecar or proxy layer. They also add operational complexity, resource cost, and debugging paths that teams must be ready to own.

#### Security, identity, and supply chain

- [Policy as code](../platform-engineering/topics/policy-as-code.md) — Policy as code evaluates infrastructure, deployment, or access rules automatically before changes land. It makes governance reviewable and testable instead of relying on manual memory.

#### Developer experience and platform product

- [Internal developer platforms](../platform-engineering/topics/internal-developer-platforms.md) — Internal developer platforms provide paved paths for teams to build, deploy, observe, and operate software. They should be treated as products with users, adoption metrics, support, and feedback loops.
- [Platform API ergonomics](../platform-engineering/topics/platform-api-ergonomics.md) — Platform API ergonomics determine how easily product teams can use internal capabilities without learning every underlying system. Good APIs expose safe defaults, clear errors, stable contracts, and escape hatches.
