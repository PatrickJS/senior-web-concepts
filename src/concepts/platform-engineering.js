export default [
  {
    "title": "Git workflow and branch protection",
    "group": "Source control, CI, and release automation",
    "summary": "Git workflow and branch protection define how changes move from local work to reviewed, tested, mergeable history. Useful controls include required checks, protected branches, signed commits or tags, and review ownership.",
    "example": "platform-branch-protection",
    "roleTags": ["jr", "platform", "backend", "frontend"]
  },
  {
    "title": "CI pipeline design",
    "group": "Source control, CI, and release automation",
    "summary": "CI pipeline design orders checks so fast deterministic failures happen early and expensive integration work runs only when needed. Good pipelines separate install, lint, test, build, package, and artifact verification.",
    "example": "platform-ci-pipeline",
    "roleTags": ["mid", "platform"]
  },
  {
    "title": "Generated artifact drift checks",
    "group": "Source control, CI, and release automation",
    "summary": "Generated artifact drift checks run the generator in CI and fail when committed generated output is stale. This protects source-of-truth workflows without letting CI silently rewrite reviewed code.",
    "example": "platform-drift-check",
    "roleTags": ["sr", "platform", "dx"]
  },
  {
    "title": "Deployment strategy selection",
    "group": "Source control, CI, and release automation",
    "summary": "Deployment strategy selection chooses rolling, blue-green, canary, shadow, or feature-flagged rollout based on reversibility, data compatibility, blast radius, and signal quality.",
    "example": "platform-deploy-strategy",
    "roleTags": ["sr", "platform"]
  },
  {
    "title": "Rollback and roll-forward planning",
    "group": "Source control, CI, and release automation",
    "summary": "Rollback and roll-forward planning defines what happens when a release fails. The plan must account for code, config, data migrations, caches, messages, and external side effects.",
    "example": "platform-rollback-plan",
    "roleTags": ["sr", "platform"]
  },
  {
    "title": "Infrastructure as Code state",
    "group": "Infrastructure, environments, and cloud networking",
    "summary": "Infrastructure as Code state records the known deployed resources and their desired configuration. State must be locked, backed up, reviewed, and protected because it is a control surface for production.",
    "example": "platform-iac-state",
    "roleTags": ["sr", "platform"]
  },
  {
    "title": "Environment promotion",
    "group": "Infrastructure, environments, and cloud networking",
    "summary": "Environment promotion moves the same build artifact through development, staging, and production with environment-specific config. It prevents rebuilding different binaries for each environment.",
    "example": "platform-environment-promotion",
    "roleTags": ["mid", "platform"]
  },
  {
    "title": "Cloud networking basics",
    "group": "Infrastructure, environments, and cloud networking",
    "summary": "Cloud networking basics include VPCs, subnets, routing tables, NAT, firewalls, private endpoints, and service reachability. Platform engineers must reason about packets, identity, and policy together.",
    "example": "platform-network-policy",
    "roleTags": ["mid", "platform"]
  },
  {
    "title": "DNS and certificate operations",
    "group": "Infrastructure, environments, and cloud networking",
    "summary": "DNS and certificate operations keep names resolvable and encrypted endpoints trusted. Practical knowledge includes TTLs, CNAMEs, apex records, ACME renewals, SANs, wildcard certs, and rollout timing.",
    "example": "platform-dns-record",
    "roleTags": ["mid", "platform"]
  },
  {
    "title": "Load balancing and health checks",
    "group": "Infrastructure, environments, and cloud networking",
    "summary": "Load balancing distributes traffic across healthy targets, while health checks decide whether a target should receive traffic. Bad checks can amplify incidents by sending traffic to broken or warming instances.",
    "example": "platform-health-check",
    "roleTags": ["mid", "platform", "backend"]
  },
  {
    "title": "Container image build hygiene",
    "group": "Containers, orchestration, and runtime platforms",
    "summary": "Container image hygiene reduces build drift, size, vulnerabilities, and runtime privilege. Good images pin bases, avoid secrets, run as non-root, minimize layers, and separate build tools from runtime.",
    "example": "platform-image-policy",
    "roleTags": ["mid", "platform", "security"]
  },
  {
    "title": "Kubernetes workload primitives",
    "group": "Containers, orchestration, and runtime platforms",
    "summary": "Kubernetes workload primitives such as Deployments, StatefulSets, Jobs, Services, ConfigMaps, Secrets, and Ingresses describe desired runtime state. Engineers should know what each primitive owns and does not own.",
    "example": "platform-k8s-workload",
    "roleTags": ["sr", "platform"]
  },
  {
    "title": "Autoscaling signal selection",
    "group": "Containers, orchestration, and runtime platforms",
    "summary": "Autoscaling signal selection chooses metrics that indicate real demand, such as CPU, memory, queue depth, request concurrency, or custom service latency. Bad signals can scale too late, too far, or in the wrong direction.",
    "example": "platform-autoscale-signal",
    "roleTags": ["sr", "platform"]
  },
  {
    "title": "Service mesh trade-offs",
    "group": "Containers, orchestration, and runtime platforms",
    "summary": "Service meshes add traffic policy, mTLS, retries, telemetry, and routing at the sidecar or proxy layer. They also add operational complexity, resource cost, and debugging paths that teams must be ready to own.",
    "example": "platform-mesh-decision",
    "roleTags": ["staff", "platform"]
  },
  {
    "title": "Serverless operational constraints",
    "group": "Containers, orchestration, and runtime platforms",
    "summary": "Serverless platforms remove server management but introduce limits around cold starts, execution duration, concurrency, packaging, network access, and observability. The runtime shape must fit the workload.",
    "example": "platform-serverless-fit",
    "roleTags": ["sr", "platform", "backend"]
  },
  {
    "title": "Secrets management and rotation",
    "group": "Security, identity, and supply chain",
    "summary": "Secrets management controls how credentials are created, stored, injected, rotated, audited, and revoked. Rotation must be designed so old and new credentials can overlap safely.",
    "example": "platform-secret-rotation",
    "roleTags": ["sr", "platform", "security"]
  },
  {
    "title": "IAM least privilege",
    "group": "Security, identity, and supply chain",
    "summary": "IAM least privilege grants only the actions and resources needed for a role. It requires scoping by identity, environment, action, resource, condition, and operational break-glass paths.",
    "example": "platform-iam-policy",
    "roleTags": ["sr", "platform", "security"]
  },
  {
    "title": "Supply chain provenance",
    "group": "Security, identity, and supply chain",
    "summary": "Supply chain provenance records where artifacts came from, how they were built, and what source revision produced them. It supports auditability, tamper detection, and safer deployment policy.",
    "example": "platform-provenance",
    "roleTags": ["sr", "platform", "security"]
  },
  {
    "title": "Policy as code",
    "group": "Security, identity, and supply chain",
    "summary": "Policy as code evaluates infrastructure, deployment, or access rules automatically before changes land. It makes governance reviewable and testable instead of relying on manual memory.",
    "example": "platform-policy-as-code",
    "roleTags": ["staff", "platform", "security"]
  },
  {
    "title": "Dependency update automation",
    "group": "Security, identity, and supply chain",
    "summary": "Dependency update automation opens reviewed, testable changes for package and action updates. It reduces stale dependency risk but needs grouping, rate limits, lockfile discipline, and CI confidence.",
    "example": "platform-dependency-update",
    "roleTags": ["mid", "platform", "security"]
  },
  {
    "title": "Observability baseline",
    "group": "Observability, incidents, and operations",
    "summary": "An observability baseline defines the minimum logs, metrics, traces, dashboards, and service metadata every production service should expose. It lets responders compare systems quickly during incidents.",
    "example": "platform-observability-baseline",
    "roleTags": ["mid", "platform", "backend"]
  },
  {
    "title": "Alert routing and ownership",
    "group": "Observability, incidents, and operations",
    "summary": "Alert routing and ownership connect symptoms to responsible teams, escalation policies, runbooks, and user impact. Alerts without owners become noise; owners without context burn out.",
    "example": "platform-alert-routing",
    "roleTags": ["sr", "platform"]
  },
  {
    "title": "Incident command and postmortems",
    "group": "Observability, incidents, and operations",
    "summary": "Incident command coordinates roles, communication, mitigation, timeline, and follow-up during production incidents. Postmortems turn incidents into system improvements without blame.",
    "example": "platform-incident-timeline",
    "roleTags": ["sr", "platform"]
  },
  {
    "title": "SLO burn-rate alerting",
    "group": "Observability, incidents, and operations",
    "summary": "SLO burn-rate alerting pages when a service consumes its error budget too quickly across short and long windows. It connects alert urgency to user-visible reliability targets.",
    "example": "platform-burn-rate",
    "roleTags": ["sr", "platform"]
  },
  {
    "title": "Runbooks and game days",
    "group": "Observability, incidents, and operations",
    "summary": "Runbooks document diagnosis and mitigation steps, while game days rehearse failures before real incidents. Together they turn operational knowledge into practiced team behavior.",
    "example": "platform-runbook-check",
    "roleTags": ["mid", "platform"]
  },
  {
    "title": "Cost allocation and FinOps",
    "group": "Observability, incidents, and operations",
    "summary": "Cost allocation and FinOps connect platform spend to teams, products, environments, and unit economics. Good systems expose cost drivers early enough for engineering decisions to change them.",
    "example": "platform-cost-allocation",
    "roleTags": ["sr", "platform"]
  },
  {
    "title": "Internal developer platforms",
    "group": "Developer experience and platform product",
    "summary": "Internal developer platforms provide paved paths for teams to build, deploy, observe, and operate software. They should be treated as products with users, adoption metrics, support, and feedback loops.",
    "example": "platform-idp-score",
    "roleTags": ["staff", "platform", "dx"]
  },
  {
    "title": "Golden paths and service templates",
    "group": "Developer experience and platform product",
    "summary": "Golden paths and templates encode recommended architecture, CI, deployment, observability, security, and ownership defaults. They reduce repeated decisions without blocking teams that need justified exceptions.",
    "example": "platform-golden-path",
    "roleTags": ["sr", "platform", "dx"]
  },
  {
    "title": "Local development environments",
    "group": "Developer experience and platform product",
    "summary": "Local development environments should make common workflows fast and realistic without requiring production credentials. The design balances fidelity, startup time, dependency weight, and reproducibility.",
    "example": "platform-local-env",
    "roleTags": ["mid", "platform", "dx"]
  },
  {
    "title": "Feature flag operations",
    "group": "Developer experience and platform product",
    "summary": "Feature flag operations manage targeting, ownership, cleanup, defaults, audit logs, and failure behavior. Without lifecycle discipline, flags become hidden production configuration debt.",
    "example": "platform-flag-lifecycle",
    "roleTags": ["sr", "platform", "backend"]
  },
  {
    "title": "Configuration management and dynamic rollout",
    "group": "Developer experience and platform product",
    "summary": "Configuration management separates deploy-time code from runtime policy. Dynamic rollout lets teams change behavior safely, but requires validation, auditability, scoping, rollback, and cache invalidation.",
    "example": "platform-config-rollout",
    "roleTags": ["sr", "platform"]
  },
  {
    "title": "Platform API ergonomics",
    "group": "Developer experience and platform product",
    "summary": "Platform API ergonomics determine how easily product teams can use internal capabilities without learning every underlying system. Good APIs expose safe defaults, clear errors, stable contracts, and escape hatches.",
    "example": "platform-api-ergonomics",
    "roleTags": ["staff", "platform", "dx"]
  }
];
