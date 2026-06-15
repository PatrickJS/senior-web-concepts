# Platform Engineering concepts

32 topics mapped into summaries and JavaScript/Node.js examples.

## Source control, CI, and release automation

Use this group to turn changes into repeatable, reviewable, reversible delivery paths.

- [Git workflow and branch protection](topics/git-workflow-and-branch-protection.md) — jr, platform, backend, frontend
- [CI pipeline design](topics/ci-pipeline-design.md) — mid, platform
- [Generated artifact drift checks](topics/generated-artifact-drift-checks.md) — sr, platform, dx
- [Deployment strategy selection](topics/deployment-strategy-selection.md) — sr, platform
- [Rollback and roll-forward planning](topics/rollback-and-roll-forward-planning.md) — sr, platform

## Infrastructure, environments, and cloud networking

Use this group to model infrastructure state, environment promotion, DNS, certificates, load balancing, and network reachability.

- [Infrastructure as Code state](topics/infrastructure-as-code-state.md) — sr, platform
- [Environment promotion](topics/environment-promotion.md) — mid, platform
- [Cloud networking basics](topics/cloud-networking-basics.md) — mid, platform
- [DNS and certificate operations](topics/dns-and-certificate-operations.md) — mid, platform
- [Load balancing and health checks](topics/load-balancing-and-health-checks.md) — mid, platform, backend

## Containers, orchestration, and runtime platforms

Use this group to operate workloads with container hygiene, scheduling, autoscaling, service topology, and runtime constraints.

- [Container image build hygiene](topics/container-image-build-hygiene.md) — mid, platform, security
- [Kubernetes workload primitives](topics/kubernetes-workload-primitives.md) — sr, platform
- [Autoscaling signal selection](topics/autoscaling-signal-selection.md) — sr, platform
- [Service mesh trade-offs](topics/service-mesh-trade-offs.md) — staff, platform
- [Serverless operational constraints](topics/serverless-operational-constraints.md) — sr, platform, backend

## Security, identity, and supply chain

Use this group to control secrets, permissions, artifact trust, policy, and blast radius across the platform.

- [Secrets management and rotation](topics/secrets-management-and-rotation.md) — sr, platform, security
- [IAM least privilege](topics/iam-least-privilege.md) — sr, platform, security
- [Supply chain provenance](topics/supply-chain-provenance.md) — sr, platform, security
- [Policy as code](topics/policy-as-code.md) — staff, platform, security
- [Dependency update automation](topics/dependency-update-automation.md) — mid, platform, security

## Observability, incidents, and operations

Use this group to make production ownership measurable, alertable, recoverable, and improvable after incidents.

- [Observability baseline](topics/observability-baseline.md) — mid, platform, backend
- [Alert routing and ownership](topics/alert-routing-and-ownership.md) — sr, platform
- [Incident command and postmortems](topics/incident-command-and-postmortems.md) — sr, platform
- [SLO burn-rate alerting](topics/slo-burn-rate-alerting.md) — sr, platform
- [Runbooks and game days](topics/runbooks-and-game-days.md) — mid, platform
- [Cost allocation and FinOps](topics/cost-allocation-and-finops.md) — sr, platform

## Developer experience and platform product

Use this group to build internal platforms, templates, local environments, and APIs that make good engineering paths easy to follow.

- [Internal developer platforms](topics/internal-developer-platforms.md) — staff, platform, dx
- [Golden paths and service templates](topics/golden-paths-and-service-templates.md) — sr, platform, dx
- [Local development environments](topics/local-development-environments.md) — mid, platform, dx
- [Feature flag operations](topics/feature-flag-operations.md) — sr, platform, backend
- [Configuration management and dynamic rollout](topics/configuration-management-and-dynamic-rollout.md) — sr, platform
- [Platform API ergonomics](topics/platform-api-ergonomics.md) — staff, platform, dx
