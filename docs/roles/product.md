# Product requirements

**Role tag:** product
**Topics:** 9

Requirements that connect engineering concepts to product decisions, user impact, reporting, or business semantics.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Software Engineering: 3
- Design Systems: 5
- Data & Storage Engineering: 1

## Required concepts

### Software Engineering

#### Modeling, APIs, and contracts

- [Domain modeling](../software-engineering/topics/domain-modeling.md) — Domain modeling captures the names, rules, states, and workflows of the problem space in code. Strong models reduce translation errors between product language, data structures, and business behavior.

#### Refactoring and evolution

- [Technical debt management](../software-engineering/topics/technical-debt-management.md) — Technical debt is a design or implementation trade-off that creates future carrying cost. Good debt management names the cost, owner, trigger for repayment, and risk if it remains unpaid.

#### Collaboration and delivery discipline

- [Estimation and risk slicing](../software-engineering/topics/estimation-and-risk-slicing.md) — Estimation improves when work is sliced around uncertainty, dependencies, feedback, and irreversible decisions. Risk-first slices turn unknowns into evidence before committing to a large implementation path.

### Design Systems

#### Tokens and theming

- [Theme modes and brand theming](../design-system/topics/theme-modes-and-brand-theming.md) — Theme modes map the same semantic token names to different values for light, dark, high-contrast, brand, or tenant contexts. The component API should consume stable semantics, not mode-specific literals.

#### Figma and design-code handoff

- [Design spec handoff quality](../design-system/topics/design-spec-handoff-quality.md) — Design handoff quality depends on states, content rules, accessibility notes, responsive behavior, data edge cases, and interaction timing. A polished static frame is not enough to implement durable UI.
- [Design review acceptance criteria](../design-system/topics/design-review-acceptance-criteria.md) — Design review acceptance criteria define what must be true before a component change ships: visual match, accessible behavior, documented states, responsive behavior, analytics impact, and migration guidance.

#### Adoption and operations

- [Adoption metrics and coverage](../design-system/topics/adoption-metrics-and-coverage.md) — Adoption metrics show where the design system is used, bypassed, forked, or missing. Coverage data helps prioritize components, migrations, docs, and support work based on real product impact.
- [Cross-team design system roadmap](../design-system/topics/cross-team-design-system-roadmap.md) — A cross-team roadmap balances product needs, accessibility fixes, token migrations, component quality, design language evolution, and platform investment. It keeps the system from becoming only a component backlog.

### Data & Storage Engineering

#### Analytics, pipelines, and governance

- [Semantic metrics layer](../data-storage/topics/semantic-metrics-layer.md) — A semantic metrics layer defines measures, dimensions, filters, windows, and ownership once so dashboards and product analysis agree. It prevents each report from inventing a different version of revenue or active users.
