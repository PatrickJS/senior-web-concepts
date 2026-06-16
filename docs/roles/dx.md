# Developer experience requirements

**Role tag:** dx
**Topics:** 18

Requirements for tools, templates, generated artifacts, platform ergonomics, and paved paths that improve engineering workflows.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Software Engineering: 6
- Design Systems: 7
- Platform Engineering: 5

## Required concepts

### Software Engineering

#### Modeling, APIs, and contracts

- [API contracts inside a codebase](../software-engineering/topics/api-contracts-inside-a-codebase.md) — Internal APIs still need contracts: inputs, outputs, side effects, errors, ordering, idempotency, and compatibility expectations. Clear internal contracts reduce coordination cost between modules and teams.
- [Backward-compatible change](../software-engineering/topics/backward-compatible-change.md) — Backward-compatible change lets existing callers continue working while new behavior rolls out. Practical compatibility includes additive fields, tolerant readers, deprecation windows, feature flags, and migration helpers.

#### Refactoring and evolution

- [Feature toggle cleanup](../software-engineering/topics/feature-toggle-cleanup.md) — Feature toggles should have owners, expiry dates, and cleanup plans. Stale toggles create hidden branches, test matrix growth, configuration risk, and dead code.

#### Collaboration and delivery discipline

- [Code review quality](../software-engineering/topics/code-review-quality.md) — Code review quality depends on reviewing behavior, risk, maintainability, tests, naming, compatibility, and operational impact. Reviews should make the change better without becoming a style-only gate.
- [Architecture decision records](../software-engineering/topics/architecture-decision-records.md) — Architecture decision records capture the context, options, decision, and consequences of important technical choices. They help future engineers understand why a design exists before changing it.
- [Documentation close to code](../software-engineering/topics/documentation-close-to-code.md) — Documentation close to code keeps examples, contracts, commands, and design notes near the implementation they describe. It reduces drift when docs can be reviewed and regenerated with code changes.

### Design Systems

#### Foundations and taxonomy

- [Contribution model and ownership](../design-system/topics/contribution-model-and-ownership.md) — A contribution model explains how teams propose, review, build, document, and release system changes. It defines ownership across design, engineering, accessibility, product, and platform maintainers.

#### Tokens and theming

- [Figma variables to code tokens](../design-system/topics/figma-variables-to-code-tokens.md) — Figma variables become reliable code tokens only when naming, modes, aliases, exports, review, and versioning are explicit. The pipeline should detect missing mappings before app code consumes broken values.

#### Figma and design-code handoff

- [GitHub issues for design changes](../design-system/topics/github-issues-for-design-changes.md) — GitHub issues connect design requests to engineering review, implementation, tests, release notes, and linked Figma evidence. They make design system changes traceable instead of scattered across comments and chat.

#### Documentation, testing, and release

- [Storybook-driven documentation](../design-system/topics/storybook-driven-documentation.md) — Storybook-style documentation pairs component examples with props, states, accessibility notes, tokens, and usage guidance. It becomes a shared review surface for design, engineering, QA, and product teams.
- [Visual regression testing](../design-system/topics/visual-regression-testing.md) — Visual regression testing compares rendered component states across changes to catch unintended appearance shifts. It is most useful when snapshots represent real supported states instead of random page screenshots.
- [Changelog and release notes for components](../design-system/topics/changelog-and-release-notes-for-components.md) — Component changelogs explain what changed, why it changed, what apps must update, and whether visual or behavioral snapshots should be reviewed. They make design system releases consumable by product teams.

#### Adoption and operations

- [Governance between Figma and GitHub](../design-system/topics/governance-between-figma-and-github.md) — Figma and GitHub governance defines how design decisions become reviewed code changes, packages, docs, and releases. The goal is traceable alignment between the design source of truth and shipped UI components.

### Platform Engineering

#### Source control, CI, and release automation

- [Generated artifact drift checks](../platform-engineering/topics/generated-artifact-drift-checks.md) — Generated artifact drift checks run the generator in CI and fail when committed generated output is stale. This protects source-of-truth workflows without letting CI silently rewrite reviewed code.

#### Developer experience and platform product

- [Internal developer platforms](../platform-engineering/topics/internal-developer-platforms.md) — Internal developer platforms provide paved paths for teams to build, deploy, observe, and operate software. They should be treated as products with users, adoption metrics, support, and feedback loops.
- [Golden paths and service templates](../platform-engineering/topics/golden-paths-and-service-templates.md) — Golden paths and templates encode recommended architecture, CI, deployment, observability, security, and ownership defaults. They reduce repeated decisions without blocking teams that need justified exceptions.
- [Local development environments](../platform-engineering/topics/local-development-environments.md) — Local development environments should make common workflows fast and realistic without requiring production credentials. The design balances fidelity, startup time, dependency weight, and reproducibility.
- [Platform API ergonomics](../platform-engineering/topics/platform-api-ergonomics.md) — Platform API ergonomics determine how easily product teams can use internal capabilities without learning every underlying system. Good APIs expose safe defaults, clear errors, stable contracts, and escape hatches.
