export default [
  {
    "title": "Design system purpose and governance",
    "group": "Foundations and taxonomy",
    "summary": "A design system is the operating layer between product design, UI engineering, and shipped interfaces. Governance defines who can change tokens, components, Figma libraries, package APIs, documentation, and release policy.",
    "example": "design-system-governance",
    "roleTags": ["sr", "design-system", "design", "frontend"],
    "diagram": `flowchart LR
  Product["Product needs"] --> Design["Design team"]
  Design --> Figma["Figma library"]
  Figma --> Tokens["Design tokens"]
  Tokens --> Components["UI components"]
  Components --> Apps["Product apps"]
  Governance["Governance"] --> Figma
  Governance --> Components`
  },
  {
    "title": "Component inventory and audit",
    "group": "Foundations and taxonomy",
    "summary": "A component inventory identifies repeated UI patterns, implementation variants, usage frequency, accessibility risk, and ownership gaps. It turns vague design debt into a prioritized system backlog.",
    "example": "design-system-component-inventory",
    "roleTags": ["mid", "design-system", "design", "frontend"]
  },
  {
    "title": "Design language taxonomy",
    "group": "Foundations and taxonomy",
    "summary": "Design language taxonomy names the primitives, patterns, templates, and product-specific exceptions in a shared vocabulary. Clear taxonomy keeps Figma names, component names, token names, and documentation aligned.",
    "example": "design-system-taxonomy",
    "roleTags": ["sr", "design-system", "design"]
  },
  {
    "title": "Accessibility as a design constraint",
    "group": "Foundations and taxonomy",
    "summary": "Accessibility belongs in design decisions before implementation. Color contrast, focus order, target size, motion, labels, keyboard behavior, and error messaging should be treated as design constraints, not late QA fixes.",
    "example": "design-system-accessibility-constraint",
    "roleTags": ["sr", "design-system", "design", "frontend"]
  },
  {
    "title": "Contribution model and ownership",
    "group": "Foundations and taxonomy",
    "summary": "A contribution model explains how teams propose, review, build, document, and release system changes. It defines ownership across design, engineering, accessibility, product, and platform maintainers.",
    "example": "design-system-contribution-model",
    "roleTags": ["sr", "design-system", "design", "frontend", "dx"]
  },
  {
    "title": "Design token architecture",
    "group": "Tokens and theming",
    "summary": "Design token architecture separates raw values, semantic decisions, component aliases, and platform outputs. This lets a color, spacing, typography, or motion decision move from design source to code without hardcoded drift.",
    "example": "design-token-architecture",
    "roleTags": ["sr", "design-system", "design", "frontend"],
    "diagram": `flowchart LR
  Raw["Raw values"] --> Semantic["Semantic tokens"]
  Semantic --> Component["Component tokens"]
  Component --> CSS["CSS variables"]
  Component --> Native["Native outputs"]
  Component --> Docs["Token docs"]`
  },
  {
    "title": "Token naming and semantic layers",
    "group": "Tokens and theming",
    "summary": "Token names should encode intent rather than current visual appearance. Semantic layers such as surface, text, border, action, and feedback survive rebrands better than names like blue-500 or gray-light.",
    "example": "design-token-semantic-layers",
    "roleTags": ["sr", "design-system", "design", "frontend"]
  },
  {
    "title": "Figma variables to code tokens",
    "group": "Tokens and theming",
    "summary": "Figma variables become reliable code tokens only when naming, modes, aliases, exports, review, and versioning are explicit. The pipeline should detect missing mappings before app code consumes broken values.",
    "example": "figma-variables-to-code-tokens",
    "roleTags": ["sr", "design-system", "design", "frontend", "dx"],
    "diagram": `flowchart LR
  Figma["Figma variables"] --> Export["Token export"]
  Export --> Validate["Schema validation"]
  Validate --> Transform["Code transform"]
  Transform --> PR["GitHub PR"]
  PR --> Package["Token package"]`
  },
  {
    "title": "Theme modes and brand theming",
    "group": "Tokens and theming",
    "summary": "Theme modes map the same semantic token names to different values for light, dark, high-contrast, brand, or tenant contexts. The component API should consume stable semantics, not mode-specific literals.",
    "example": "design-system-theme-modes",
    "roleTags": ["sr", "design-system", "design", "frontend", "product"]
  },
  {
    "title": "Token versioning and migration",
    "group": "Tokens and theming",
    "summary": "Token versioning protects consuming apps when a token is renamed, removed, or changes meaning. Migration notes, aliases, deprecation windows, and codemods keep design changes from becoming scattered UI regressions.",
    "example": "design-token-versioning",
    "roleTags": ["sr", "design-system", "frontend", "platform"]
  },
  {
    "title": "Figma component variants",
    "group": "Figma and design-code handoff",
    "summary": "Figma variants model the supported visual states and options for a component. They should map closely to code props so designers and engineers are discussing the same combinations and constraints.",
    "example": "figma-component-variants",
    "roleTags": ["mid", "design-system", "design"]
  },
  {
    "title": "Auto layout and responsive constraints",
    "group": "Figma and design-code handoff",
    "summary": "Auto layout and responsive constraints make design intent explicit for spacing, wrapping, alignment, truncation, and resizing. They reduce ambiguity when a Figma frame becomes real CSS layout.",
    "example": "figma-auto-layout-responsive",
    "roleTags": ["mid", "design-system", "design", "frontend"]
  },
  {
    "title": "Design spec handoff quality",
    "group": "Figma and design-code handoff",
    "summary": "Design handoff quality depends on states, content rules, accessibility notes, responsive behavior, data edge cases, and interaction timing. A polished static frame is not enough to implement durable UI.",
    "example": "design-spec-handoff-quality",
    "roleTags": ["sr", "design-system", "design", "frontend", "product"]
  },
  {
    "title": "GitHub issues for design changes",
    "group": "Figma and design-code handoff",
    "summary": "GitHub issues connect design requests to engineering review, implementation, tests, release notes, and linked Figma evidence. They make design system changes traceable instead of scattered across comments and chat.",
    "example": "design-github-change-flow",
    "roleTags": ["mid", "design-system", "design", "dx"]
  },
  {
    "title": "Design review acceptance criteria",
    "group": "Figma and design-code handoff",
    "summary": "Design review acceptance criteria define what must be true before a component change ships: visual match, accessible behavior, documented states, responsive behavior, analytics impact, and migration guidance.",
    "example": "design-review-acceptance-criteria",
    "roleTags": ["sr", "design-system", "design", "product"]
  },
  {
    "title": "Component prop API design",
    "group": "Component API and implementation",
    "summary": "Component prop APIs translate design intent into reusable engineering interfaces. Good APIs expose stable semantic choices, prevent invalid combinations, and leave room for content and accessibility requirements.",
    "example": "component-prop-api-design",
    "roleTags": ["sr", "design-system", "frontend"]
  },
  {
    "title": "Slots composition and escape hatches",
    "group": "Component API and implementation",
    "summary": "Slots and composition let product teams place custom content inside system components without forking them. Escape hatches should be deliberate, documented, and constrained so they do not undermine consistency.",
    "example": "component-slots-escape-hatches",
    "roleTags": ["sr", "design-system", "frontend"]
  },
  {
    "title": "Controlled vs uncontrolled components",
    "group": "Component API and implementation",
    "summary": "Controlled components let app state own the value, while uncontrolled components keep internal state until a boundary event. Design system components should choose the model that matches validation, form, and composition needs.",
    "example": "component-controlled-uncontrolled",
    "roleTags": ["sr", "design-system", "frontend"]
  },
  {
    "title": "Visual states and interaction contracts",
    "group": "Component API and implementation",
    "summary": "Visual states such as hover, focus, disabled, loading, selected, invalid, and pressed are interaction contracts. They should be represented in design, documentation, tests, and implementation with the same names.",
    "example": "component-state-contracts",
    "roleTags": ["mid", "design-system", "design", "frontend"]
  },
  {
    "title": "Styling strategy for component libraries",
    "group": "Component API and implementation",
    "summary": "A component library styling strategy decides how tokens, CSS variables, cascade layers, class names, composition, and app overrides interact. The strategy should protect consistency while allowing product-specific layout.",
    "example": "component-library-styling-strategy",
    "roleTags": ["sr", "design-system", "frontend"]
  },
  {
    "title": "Storybook-driven documentation",
    "group": "Documentation, testing, and release",
    "summary": "Storybook-style documentation pairs component examples with props, states, accessibility notes, tokens, and usage guidance. It becomes a shared review surface for design, engineering, QA, and product teams.",
    "example": "storybook-design-system-docs",
    "roleTags": ["mid", "design-system", "frontend", "dx"]
  },
  {
    "title": "Visual regression testing",
    "group": "Documentation, testing, and release",
    "summary": "Visual regression testing compares rendered component states across changes to catch unintended appearance shifts. It is most useful when snapshots represent real supported states instead of random page screenshots.",
    "example": "design-system-visual-regression",
    "roleTags": ["sr", "design-system", "frontend", "dx"]
  },
  {
    "title": "Interaction and accessibility tests",
    "group": "Documentation, testing, and release",
    "summary": "Interaction and accessibility tests verify keyboard flow, focus management, ARIA state, labels, disabled behavior, and event timing. They protect behavior that visual review alone cannot reliably catch.",
    "example": "design-system-interaction-a11y-tests",
    "roleTags": ["sr", "design-system", "frontend"]
  },
  {
    "title": "Changelog and release notes for components",
    "group": "Documentation, testing, and release",
    "summary": "Component changelogs explain what changed, why it changed, what apps must update, and whether visual or behavioral snapshots should be reviewed. They make design system releases consumable by product teams.",
    "example": "design-system-component-changelog",
    "roleTags": ["mid", "design-system", "frontend", "dx"]
  },
  {
    "title": "Deprecation and migration playbooks",
    "group": "Documentation, testing, and release",
    "summary": "Deprecation playbooks give teams a path away from old tokens, props, variants, or components. Good migrations include timelines, warnings, codemods, examples, support windows, and removal criteria.",
    "example": "design-system-deprecation-playbook",
    "roleTags": ["sr", "design-system", "frontend", "platform"]
  },
  {
    "title": "Adoption metrics and coverage",
    "group": "Adoption and operations",
    "summary": "Adoption metrics show where the design system is used, bypassed, forked, or missing. Coverage data helps prioritize components, migrations, docs, and support work based on real product impact.",
    "example": "design-system-adoption-metrics",
    "roleTags": ["sr", "design-system", "design", "product"]
  },
  {
    "title": "Cross-team design system roadmap",
    "group": "Adoption and operations",
    "summary": "A cross-team roadmap balances product needs, accessibility fixes, token migrations, component quality, design language evolution, and platform investment. It keeps the system from becoming only a component backlog.",
    "example": "design-system-roadmap",
    "roleTags": ["staff", "design-system", "design", "product"]
  },
  {
    "title": "Design debt triage",
    "group": "Adoption and operations",
    "summary": "Design debt triage ranks inconsistent UI, missing states, token drift, inaccessible patterns, and local component forks by user impact and implementation cost. It turns inconsistency into managed product debt.",
    "example": "design-debt-triage",
    "roleTags": ["sr", "design-system", "design", "frontend"]
  },
  {
    "title": "Governance between Figma and GitHub",
    "group": "Adoption and operations",
    "summary": "Figma and GitHub governance defines how design decisions become reviewed code changes, packages, docs, and releases. The goal is traceable alignment between the design source of truth and shipped UI components.",
    "example": "figma-github-governance",
    "roleTags": ["staff", "design-system", "design", "dx"],
    "diagram": `flowchart LR
  Proposal["Design proposal"] --> Figma["Figma branch"]
  Figma --> Review["Design and engineering review"]
  Review --> Issue["GitHub issue"]
  Issue --> PR["Code PR"]
  PR --> Release["Package release"]
  Release --> Docs["Docs and migration notes"]`
  },
  {
    "title": "Package distribution and consuming apps",
    "group": "Adoption and operations",
    "summary": "Design system packages must work for consuming apps with clear peer dependencies, build outputs, versioning, tree shaking, CSS loading, and upgrade guidance. Distribution quality determines whether teams can adopt the system safely.",
    "example": "design-system-package-distribution",
    "roleTags": ["sr", "design-system", "frontend", "platform"]
  }
];
