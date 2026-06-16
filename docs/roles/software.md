# Software engineering requirements

**Role tag:** software
**Topics:** 30

Requirements for general software craft: modularity, domain modeling, contracts, testing, refactoring, debugging, code review, documentation, and maintainability.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- Software Engineering: 30

## Required concepts

### Software Engineering

#### Code structure and modularity

- [Cohesion and coupling](../software-engineering/topics/cohesion-and-coupling.md) — Cohesion measures how strongly the responsibilities inside a module belong together, while coupling measures how much that module depends on other modules. Good software engineering raises cohesion and controls coupling so changes stay local.
- [Abstraction boundaries](../software-engineering/topics/abstraction-boundaries.md) — An abstraction boundary exposes what callers need while hiding volatile implementation details. The boundary should make correct use easier, make invalid use harder, and leave room for implementation changes.
- [Information hiding](../software-engineering/topics/information-hiding.md) — Information hiding keeps decisions that are likely to change inside one module instead of leaking them into every caller. It protects code from ripple effects when storage, parsing, algorithms, or vendor behavior changes.
- [Dependency direction](../software-engineering/topics/dependency-direction.md) — Dependency direction decides which modules know about which other modules. Stable business rules should not depend on volatile delivery details such as HTTP, CLIs, files, framework adapters, or UI shells.
- [Composition over inheritance](../software-engineering/topics/composition-over-inheritance.md) — Composition builds behavior by passing collaborators or functions together, while inheritance shares behavior through parent classes. Composition usually makes behavior easier to test, replace, and combine without deep class hierarchies.

#### Modeling, APIs, and contracts

- [Domain modeling](../software-engineering/topics/domain-modeling.md) — Domain modeling captures the names, rules, states, and workflows of the problem space in code. Strong models reduce translation errors between product language, data structures, and business behavior.
- [Invariants](../software-engineering/topics/invariants.md) — Invariants are facts that must remain true before and after operations. Naming invariants explicitly turns hidden assumptions into validations, tests, constructors, and state transition rules.
- [Value objects](../software-engineering/topics/value-objects.md) — Value objects represent values by their contents instead of identity. They are useful for money, email addresses, quantities, ranges, and other concepts that need validation and equality semantics.
- [Error handling strategy](../software-engineering/topics/error-handling-strategy.md) — Error handling strategy decides which failures throw, which return typed outcomes, which retry, which are user-visible, and which are programmer bugs. A consistent strategy keeps failures inspectable instead of accidental.
- [Result types and explicit outcomes](../software-engineering/topics/result-types-and-explicit-outcomes.md) — Result types represent success and failure as data. They are useful when callers are expected to branch on known outcomes such as validation failures, missing records, authorization decisions, or conflicts.
- [API contracts inside a codebase](../software-engineering/topics/api-contracts-inside-a-codebase.md) — Internal APIs still need contracts: inputs, outputs, side effects, errors, ordering, idempotency, and compatibility expectations. Clear internal contracts reduce coordination cost between modules and teams.
- [Backward-compatible change](../software-engineering/topics/backward-compatible-change.md) — Backward-compatible change lets existing callers continue working while new behavior rolls out. Practical compatibility includes additive fields, tolerant readers, deprecation windows, feature flags, and migration helpers.

#### Testing and quality signals

- [Unit test boundaries](../software-engineering/topics/unit-test-boundaries.md) — Unit tests should focus on meaningful behavior at a stable boundary, not private implementation trivia. Good unit boundaries make fast tests valuable while leaving room to refactor internals.
- [Integration test boundaries](../software-engineering/topics/integration-test-boundaries.md) — Integration tests verify that real collaborators work together across module, process, storage, or protocol boundaries. They should cover risky contracts that unit tests cannot prove.
- [Test doubles](../software-engineering/topics/test-doubles.md) — Test doubles replace real collaborators with fakes, stubs, spies, or mocks. They are useful when the double preserves the contract being tested, but harmful when they only mirror implementation details.
- [Property-based testing](../software-engineering/topics/property-based-testing.md) — Property-based testing checks general rules across many generated inputs instead of only named examples. It is useful for parsers, formatters, reducers, validators, and algorithms with durable invariants.
- [Mutation testing](../software-engineering/topics/mutation-testing.md) — Mutation testing changes code in small ways and checks whether tests fail. Surviving mutations show where tests execute code without proving the behavior that matters.

#### Refactoring and evolution

- [Refactoring in small steps](../software-engineering/topics/refactoring-in-small-steps.md) — Refactoring changes code structure without changing observable behavior. Small verified steps reduce risk by keeping each move understandable, reversible, and covered by existing or characterization tests.
- [Code smells](../software-engineering/topics/code-smells.md) — Code smells are signals that code may be harder to change than necessary. Long functions, shotgun changes, primitive obsession, feature envy, and duplicate logic are prompts to investigate, not automatic verdicts.
- [Technical debt management](../software-engineering/topics/technical-debt-management.md) — Technical debt is a design or implementation trade-off that creates future carrying cost. Good debt management names the cost, owner, trigger for repayment, and risk if it remains unpaid.
- [Legacy code characterization](../software-engineering/topics/legacy-code-characterization.md) — Characterization tests capture what legacy code currently does before changing it. They create a safety net when requirements are unclear, behavior is surprising, or refactoring must preserve quirks.
- [Feature toggle cleanup](../software-engineering/topics/feature-toggle-cleanup.md) — Feature toggles should have owners, expiry dates, and cleanup plans. Stale toggles create hidden branches, test matrix growth, configuration risk, and dead code.

#### Collaboration and delivery discipline

- [Code review quality](../software-engineering/topics/code-review-quality.md) — Code review quality depends on reviewing behavior, risk, maintainability, tests, naming, compatibility, and operational impact. Reviews should make the change better without becoming a style-only gate.
- [Architecture decision records](../software-engineering/topics/architecture-decision-records.md) — Architecture decision records capture the context, options, decision, and consequences of important technical choices. They help future engineers understand why a design exists before changing it.
- [Estimation and risk slicing](../software-engineering/topics/estimation-and-risk-slicing.md) — Estimation improves when work is sliced around uncertainty, dependencies, feedback, and irreversible decisions. Risk-first slices turn unknowns into evidence before committing to a large implementation path.
- [Documentation close to code](../software-engineering/topics/documentation-close-to-code.md) — Documentation close to code keeps examples, contracts, commands, and design notes near the implementation they describe. It reduces drift when docs can be reviewed and regenerated with code changes.

#### Debugging, configuration, and runtime behavior

- [Systematic debugging](../software-engineering/topics/systematic-debugging.md) — Systematic debugging forms a hypothesis, chooses the smallest useful observation, compares expected and actual behavior, and updates the model. It prevents random edits from hiding the real cause.
- [Contextual logging](../software-engineering/topics/contextual-logging.md) — Contextual logging records enough stable identifiers and state to reconstruct behavior without dumping sensitive data. Good logs explain what happened, where, for whom, and why the code chose that path.
- [Configuration boundaries](../software-engineering/topics/configuration-boundaries.md) — Configuration boundaries separate code from environment-specific values while keeping validation close to startup. Strong config boundaries prevent missing, misspelled, or incompatible settings from failing deep in runtime.
- [Performance profiling before optimization](../software-engineering/topics/performance-profiling-before-optimization.md) — Performance profiling measures where time, memory, or I/O is actually spent before changing code. Profiling protects teams from optimizing the wrong path or trading clarity for unmeasured speed.
