export default [
  {
    "title": "Cohesion and coupling",
    "group": "Code structure and modularity",
    "summary": "Cohesion measures how strongly the responsibilities inside a module belong together, while coupling measures how much that module depends on other modules. Good software engineering raises cohesion and controls coupling so changes stay local.",
    "example": "software-cohesion-coupling",
    "roleTags": ["jr", "software"],
    "diagram": `flowchart LR
  UserCode["User code"] --> PublicAPI["Small public API"]
  PublicAPI --> Module["Cohesive module"]
  Module -. hides .-> Internals["Internal details"]
  Module --> Dependency["Explicit dependency"]`
  },
  {
    "title": "Abstraction boundaries",
    "group": "Code structure and modularity",
    "summary": "An abstraction boundary exposes what callers need while hiding volatile implementation details. The boundary should make correct use easier, make invalid use harder, and leave room for implementation changes.",
    "example": "software-abstraction-boundaries",
    "roleTags": ["mid", "software"]
  },
  {
    "title": "Information hiding",
    "group": "Code structure and modularity",
    "summary": "Information hiding keeps decisions that are likely to change inside one module instead of leaking them into every caller. It protects code from ripple effects when storage, parsing, algorithms, or vendor behavior changes.",
    "example": "software-information-hiding",
    "roleTags": ["jr", "software"]
  },
  {
    "title": "Dependency direction",
    "group": "Code structure and modularity",
    "summary": "Dependency direction decides which modules know about which other modules. Stable business rules should not depend on volatile delivery details such as HTTP, CLIs, files, framework adapters, or UI shells.",
    "example": "software-dependency-direction",
    "roleTags": ["sr", "software"]
  },
  {
    "title": "Composition over inheritance",
    "group": "Code structure and modularity",
    "summary": "Composition builds behavior by passing collaborators or functions together, while inheritance shares behavior through parent classes. Composition usually makes behavior easier to test, replace, and combine without deep class hierarchies.",
    "example": "software-composition-over-inheritance",
    "roleTags": ["mid", "software"]
  },
  {
    "title": "Domain modeling",
    "group": "Modeling, APIs, and contracts",
    "summary": "Domain modeling captures the names, rules, states, and workflows of the problem space in code. Strong models reduce translation errors between product language, data structures, and business behavior.",
    "example": "software-domain-modeling",
    "roleTags": ["mid", "software", "product"]
  },
  {
    "title": "Invariants",
    "group": "Modeling, APIs, and contracts",
    "summary": "Invariants are facts that must remain true before and after operations. Naming invariants explicitly turns hidden assumptions into validations, tests, constructors, and state transition rules.",
    "example": "software-invariants",
    "roleTags": ["mid", "software"]
  },
  {
    "title": "Value objects",
    "group": "Modeling, APIs, and contracts",
    "summary": "Value objects represent values by their contents instead of identity. They are useful for money, email addresses, quantities, ranges, and other concepts that need validation and equality semantics.",
    "example": "software-value-objects",
    "roleTags": ["jr", "software"]
  },
  {
    "title": "Error handling strategy",
    "group": "Modeling, APIs, and contracts",
    "summary": "Error handling strategy decides which failures throw, which return typed outcomes, which retry, which are user-visible, and which are programmer bugs. A consistent strategy keeps failures inspectable instead of accidental.",
    "example": "software-error-handling",
    "roleTags": ["mid", "software"]
  },
  {
    "title": "Result types and explicit outcomes",
    "group": "Modeling, APIs, and contracts",
    "summary": "Result types represent success and failure as data. They are useful when callers are expected to branch on known outcomes such as validation failures, missing records, authorization decisions, or conflicts.",
    "example": "software-result-types",
    "roleTags": ["mid", "software"]
  },
  {
    "title": "API contracts inside a codebase",
    "group": "Modeling, APIs, and contracts",
    "summary": "Internal APIs still need contracts: inputs, outputs, side effects, errors, ordering, idempotency, and compatibility expectations. Clear internal contracts reduce coordination cost between modules and teams.",
    "example": "software-api-contracts",
    "roleTags": ["sr", "software", "dx"]
  },
  {
    "title": "Backward-compatible change",
    "group": "Modeling, APIs, and contracts",
    "summary": "Backward-compatible change lets existing callers continue working while new behavior rolls out. Practical compatibility includes additive fields, tolerant readers, deprecation windows, feature flags, and migration helpers.",
    "example": "software-backward-compatibility",
    "roleTags": ["sr", "software", "dx"]
  },
  {
    "title": "Unit test boundaries",
    "group": "Testing and quality signals",
    "summary": "Unit tests should focus on meaningful behavior at a stable boundary, not private implementation trivia. Good unit boundaries make fast tests valuable while leaving room to refactor internals.",
    "example": "software-unit-testing",
    "roleTags": ["jr", "software"]
  },
  {
    "title": "Integration test boundaries",
    "group": "Testing and quality signals",
    "summary": "Integration tests verify that real collaborators work together across module, process, storage, or protocol boundaries. They should cover risky contracts that unit tests cannot prove.",
    "example": "software-integration-testing",
    "roleTags": ["mid", "software"]
  },
  {
    "title": "Test doubles",
    "group": "Testing and quality signals",
    "summary": "Test doubles replace real collaborators with fakes, stubs, spies, or mocks. They are useful when the double preserves the contract being tested, but harmful when they only mirror implementation details.",
    "example": "software-test-doubles",
    "roleTags": ["jr", "software"]
  },
  {
    "title": "Property-based testing",
    "group": "Testing and quality signals",
    "summary": "Property-based testing checks general rules across many generated inputs instead of only named examples. It is useful for parsers, formatters, reducers, validators, and algorithms with durable invariants.",
    "example": "software-property-based-testing",
    "roleTags": ["sr", "software"]
  },
  {
    "title": "Mutation testing",
    "group": "Testing and quality signals",
    "summary": "Mutation testing changes code in small ways and checks whether tests fail. Surviving mutations show where tests execute code without proving the behavior that matters.",
    "example": "software-mutation-testing",
    "roleTags": ["sr", "software"]
  },
  {
    "title": "Refactoring in small steps",
    "group": "Refactoring and evolution",
    "summary": "Refactoring changes code structure without changing observable behavior. Small verified steps reduce risk by keeping each move understandable, reversible, and covered by existing or characterization tests.",
    "example": "software-refactoring-small-steps",
    "roleTags": ["mid", "software"]
  },
  {
    "title": "Code smells",
    "group": "Refactoring and evolution",
    "summary": "Code smells are signals that code may be harder to change than necessary. Long functions, shotgun changes, primitive obsession, feature envy, and duplicate logic are prompts to investigate, not automatic verdicts.",
    "example": "software-code-smells",
    "roleTags": ["jr", "software"]
  },
  {
    "title": "Technical debt management",
    "group": "Refactoring and evolution",
    "summary": "Technical debt is a design or implementation trade-off that creates future carrying cost. Good debt management names the cost, owner, trigger for repayment, and risk if it remains unpaid.",
    "example": "software-technical-debt",
    "roleTags": ["sr", "software", "product"]
  },
  {
    "title": "Legacy code characterization",
    "group": "Refactoring and evolution",
    "summary": "Characterization tests capture what legacy code currently does before changing it. They create a safety net when requirements are unclear, behavior is surprising, or refactoring must preserve quirks.",
    "example": "software-legacy-code-characterization",
    "roleTags": ["sr", "software"]
  },
  {
    "title": "Feature toggle cleanup",
    "group": "Refactoring and evolution",
    "summary": "Feature toggles should have owners, expiry dates, and cleanup plans. Stale toggles create hidden branches, test matrix growth, configuration risk, and dead code.",
    "example": "software-feature-toggle-cleanup",
    "roleTags": ["sr", "software", "dx"]
  },
  {
    "title": "Code review quality",
    "group": "Collaboration and delivery discipline",
    "summary": "Code review quality depends on reviewing behavior, risk, maintainability, tests, naming, compatibility, and operational impact. Reviews should make the change better without becoming a style-only gate.",
    "example": "software-code-review",
    "roleTags": ["mid", "software", "dx"]
  },
  {
    "title": "Architecture decision records",
    "group": "Collaboration and delivery discipline",
    "summary": "Architecture decision records capture the context, options, decision, and consequences of important technical choices. They help future engineers understand why a design exists before changing it.",
    "example": "software-adr",
    "roleTags": ["sr", "software", "dx"]
  },
  {
    "title": "Estimation and risk slicing",
    "group": "Collaboration and delivery discipline",
    "summary": "Estimation improves when work is sliced around uncertainty, dependencies, feedback, and irreversible decisions. Risk-first slices turn unknowns into evidence before committing to a large implementation path.",
    "example": "software-estimation-risk",
    "roleTags": ["sr", "software", "product"]
  },
  {
    "title": "Documentation close to code",
    "group": "Collaboration and delivery discipline",
    "summary": "Documentation close to code keeps examples, contracts, commands, and design notes near the implementation they describe. It reduces drift when docs can be reviewed and regenerated with code changes.",
    "example": "software-documentation-code",
    "roleTags": ["jr", "software", "dx"]
  },
  {
    "title": "Systematic debugging",
    "group": "Debugging, configuration, and runtime behavior",
    "summary": "Systematic debugging forms a hypothesis, chooses the smallest useful observation, compares expected and actual behavior, and updates the model. It prevents random edits from hiding the real cause.",
    "example": "software-debugging-method",
    "roleTags": ["jr", "software"]
  },
  {
    "title": "Contextual logging",
    "group": "Debugging, configuration, and runtime behavior",
    "summary": "Contextual logging records enough stable identifiers and state to reconstruct behavior without dumping sensitive data. Good logs explain what happened, where, for whom, and why the code chose that path.",
    "example": "software-logging-context",
    "roleTags": ["mid", "software", "security"]
  },
  {
    "title": "Configuration boundaries",
    "group": "Debugging, configuration, and runtime behavior",
    "summary": "Configuration boundaries separate code from environment-specific values while keeping validation close to startup. Strong config boundaries prevent missing, misspelled, or incompatible settings from failing deep in runtime.",
    "example": "software-configuration-boundaries",
    "roleTags": ["sr", "software", "platform"]
  },
  {
    "title": "Performance profiling before optimization",
    "group": "Debugging, configuration, and runtime behavior",
    "summary": "Performance profiling measures where time, memory, or I/O is actually spent before changing code. Profiling protects teams from optimizing the wrong path or trading clarity for unmeasured speed.",
    "example": "software-performance-profiling",
    "roleTags": ["sr", "software"]
  }
];
