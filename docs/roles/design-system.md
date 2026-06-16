# Design system requirements

**Role tag:** design-system
**Topics:** 30

Requirements for tokens, component libraries, Figma-to-code workflows, GitHub governance, documentation, release policy, and adoption across products.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Design Systems: 30

## Required concepts

### Design Systems

#### Foundations and taxonomy

- [Design system purpose and governance](../design-system/topics/design-system-purpose-and-governance.md) — A design system is the operating layer between product design, UI engineering, and shipped interfaces. Governance defines who can change tokens, components, Figma libraries, package APIs, documentation, and release policy.
- [Component inventory and audit](../design-system/topics/component-inventory-and-audit.md) — A component inventory identifies repeated UI patterns, implementation variants, usage frequency, accessibility risk, and ownership gaps. It turns vague design debt into a prioritized system backlog.
- [Design language taxonomy](../design-system/topics/design-language-taxonomy.md) — Design language taxonomy names the primitives, patterns, templates, and product-specific exceptions in a shared vocabulary. Clear taxonomy keeps Figma names, component names, token names, and documentation aligned.
- [Accessibility as a design constraint](../design-system/topics/accessibility-as-a-design-constraint.md) — Accessibility belongs in design decisions before implementation. Color contrast, focus order, target size, motion, labels, keyboard behavior, and error messaging should be treated as design constraints, not late QA fixes.
- [Contribution model and ownership](../design-system/topics/contribution-model-and-ownership.md) — A contribution model explains how teams propose, review, build, document, and release system changes. It defines ownership across design, engineering, accessibility, product, and platform maintainers.

#### Tokens and theming

- [Design token architecture](../design-system/topics/design-token-architecture.md) — Design token architecture separates raw values, semantic decisions, component aliases, and platform outputs. This lets a color, spacing, typography, or motion decision move from design source to code without hardcoded drift.
- [Token naming and semantic layers](../design-system/topics/token-naming-and-semantic-layers.md) — Token names should encode intent rather than current visual appearance. Semantic layers such as surface, text, border, action, and feedback survive rebrands better than names like blue-500 or gray-light.
- [Figma variables to code tokens](../design-system/topics/figma-variables-to-code-tokens.md) — Figma variables become reliable code tokens only when naming, modes, aliases, exports, review, and versioning are explicit. The pipeline should detect missing mappings before app code consumes broken values.
- [Theme modes and brand theming](../design-system/topics/theme-modes-and-brand-theming.md) — Theme modes map the same semantic token names to different values for light, dark, high-contrast, brand, or tenant contexts. The component API should consume stable semantics, not mode-specific literals.
- [Token versioning and migration](../design-system/topics/token-versioning-and-migration.md) — Token versioning protects consuming apps when a token is renamed, removed, or changes meaning. Migration notes, aliases, deprecation windows, and codemods keep design changes from becoming scattered UI regressions.

#### Figma and design-code handoff

- [Figma component variants](../design-system/topics/figma-component-variants.md) — Figma variants model the supported visual states and options for a component. They should map closely to code props so designers and engineers are discussing the same combinations and constraints.
- [Auto layout and responsive constraints](../design-system/topics/auto-layout-and-responsive-constraints.md) — Auto layout and responsive constraints make design intent explicit for spacing, wrapping, alignment, truncation, and resizing. They reduce ambiguity when a Figma frame becomes real CSS layout.
- [Design spec handoff quality](../design-system/topics/design-spec-handoff-quality.md) — Design handoff quality depends on states, content rules, accessibility notes, responsive behavior, data edge cases, and interaction timing. A polished static frame is not enough to implement durable UI.
- [GitHub issues for design changes](../design-system/topics/github-issues-for-design-changes.md) — GitHub issues connect design requests to engineering review, implementation, tests, release notes, and linked Figma evidence. They make design system changes traceable instead of scattered across comments and chat.
- [Design review acceptance criteria](../design-system/topics/design-review-acceptance-criteria.md) — Design review acceptance criteria define what must be true before a component change ships: visual match, accessible behavior, documented states, responsive behavior, analytics impact, and migration guidance.

#### Component API and implementation

- [Component prop API design](../design-system/topics/component-prop-api-design.md) — Component prop APIs translate design intent into reusable engineering interfaces. Good APIs expose stable semantic choices, prevent invalid combinations, and leave room for content and accessibility requirements.
- [Slots composition and escape hatches](../design-system/topics/slots-composition-and-escape-hatches.md) — Slots and composition let product teams place custom content inside system components without forking them. Escape hatches should be deliberate, documented, and constrained so they do not undermine consistency.
- [Controlled vs uncontrolled components](../design-system/topics/controlled-vs-uncontrolled-components.md) — Controlled components let app state own the value, while uncontrolled components keep internal state until a boundary event. Design system components should choose the model that matches validation, form, and composition needs.
- [Visual states and interaction contracts](../design-system/topics/visual-states-and-interaction-contracts.md) — Visual states such as hover, focus, disabled, loading, selected, invalid, and pressed are interaction contracts. They should be represented in design, documentation, tests, and implementation with the same names.
- [Styling strategy for component libraries](../design-system/topics/styling-strategy-for-component-libraries.md) — A component library styling strategy decides how tokens, CSS variables, cascade layers, class names, composition, and app overrides interact. The strategy should protect consistency while allowing product-specific layout.

#### Documentation, testing, and release

- [Storybook-driven documentation](../design-system/topics/storybook-driven-documentation.md) — Storybook-style documentation pairs component examples with props, states, accessibility notes, tokens, and usage guidance. It becomes a shared review surface for design, engineering, QA, and product teams.
- [Visual regression testing](../design-system/topics/visual-regression-testing.md) — Visual regression testing compares rendered component states across changes to catch unintended appearance shifts. It is most useful when snapshots represent real supported states instead of random page screenshots.
- [Interaction and accessibility tests](../design-system/topics/interaction-and-accessibility-tests.md) — Interaction and accessibility tests verify keyboard flow, focus management, ARIA state, labels, disabled behavior, and event timing. They protect behavior that visual review alone cannot reliably catch.
- [Changelog and release notes for components](../design-system/topics/changelog-and-release-notes-for-components.md) — Component changelogs explain what changed, why it changed, what apps must update, and whether visual or behavioral snapshots should be reviewed. They make design system releases consumable by product teams.
- [Deprecation and migration playbooks](../design-system/topics/deprecation-and-migration-playbooks.md) — Deprecation playbooks give teams a path away from old tokens, props, variants, or components. Good migrations include timelines, warnings, codemods, examples, support windows, and removal criteria.

#### Adoption and operations

- [Adoption metrics and coverage](../design-system/topics/adoption-metrics-and-coverage.md) — Adoption metrics show where the design system is used, bypassed, forked, or missing. Coverage data helps prioritize components, migrations, docs, and support work based on real product impact.
- [Cross-team design system roadmap](../design-system/topics/cross-team-design-system-roadmap.md) — A cross-team roadmap balances product needs, accessibility fixes, token migrations, component quality, design language evolution, and platform investment. It keeps the system from becoming only a component backlog.
- [Design debt triage](../design-system/topics/design-debt-triage.md) — Design debt triage ranks inconsistent UI, missing states, token drift, inaccessible patterns, and local component forks by user impact and implementation cost. It turns inconsistency into managed product debt.
- [Governance between Figma and GitHub](../design-system/topics/governance-between-figma-and-github.md) — Figma and GitHub governance defines how design decisions become reviewed code changes, packages, docs, and releases. The goal is traceable alignment between the design source of truth and shipped UI components.
- [Package distribution and consuming apps](../design-system/topics/package-distribution-and-consuming-apps.md) — Design system packages must work for consuming apps with clear peer dependencies, build outputs, versioning, tree shaking, CSS loading, and upgrade guidance. Distribution quality determines whether teams can adopt the system safely.
