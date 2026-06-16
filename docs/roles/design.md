# Design requirements

**Role tag:** design
**Topics:** 19

Requirements for product and interface design collaboration, Figma semantics, accessibility intent, interaction patterns, responsive behavior, and handoff quality.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Design Systems: 19

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

#### Figma and design-code handoff

- [Figma component variants](../design-system/topics/figma-component-variants.md) — Figma variants model the supported visual states and options for a component. They should map closely to code props so designers and engineers are discussing the same combinations and constraints.
- [Auto layout and responsive constraints](../design-system/topics/auto-layout-and-responsive-constraints.md) — Auto layout and responsive constraints make design intent explicit for spacing, wrapping, alignment, truncation, and resizing. They reduce ambiguity when a Figma frame becomes real CSS layout.
- [Design spec handoff quality](../design-system/topics/design-spec-handoff-quality.md) — Design handoff quality depends on states, content rules, accessibility notes, responsive behavior, data edge cases, and interaction timing. A polished static frame is not enough to implement durable UI.
- [GitHub issues for design changes](../design-system/topics/github-issues-for-design-changes.md) — GitHub issues connect design requests to engineering review, implementation, tests, release notes, and linked Figma evidence. They make design system changes traceable instead of scattered across comments and chat.
- [Design review acceptance criteria](../design-system/topics/design-review-acceptance-criteria.md) — Design review acceptance criteria define what must be true before a component change ships: visual match, accessible behavior, documented states, responsive behavior, analytics impact, and migration guidance.

#### Component API and implementation

- [Visual states and interaction contracts](../design-system/topics/visual-states-and-interaction-contracts.md) — Visual states such as hover, focus, disabled, loading, selected, invalid, and pressed are interaction contracts. They should be represented in design, documentation, tests, and implementation with the same names.

#### Adoption and operations

- [Adoption metrics and coverage](../design-system/topics/adoption-metrics-and-coverage.md) — Adoption metrics show where the design system is used, bypassed, forked, or missing. Coverage data helps prioritize components, migrations, docs, and support work based on real product impact.
- [Cross-team design system roadmap](../design-system/topics/cross-team-design-system-roadmap.md) — A cross-team roadmap balances product needs, accessibility fixes, token migrations, component quality, design language evolution, and platform investment. It keeps the system from becoming only a component backlog.
- [Design debt triage](../design-system/topics/design-debt-triage.md) — Design debt triage ranks inconsistent UI, missing states, token drift, inaccessible patterns, and local component forks by user impact and implementation cost. It turns inconsistency into managed product debt.
- [Governance between Figma and GitHub](../design-system/topics/governance-between-figma-and-github.md) — Figma and GitHub governance defines how design decisions become reviewed code changes, packages, docs, and releases. The goal is traceable alignment between the design source of truth and shipped UI components.
