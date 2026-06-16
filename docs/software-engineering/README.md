# Software Engineering concepts

30 topics mapped into summaries and JavaScript/Node.js examples.

## Career-level progression

- [Junior](../roles/jr.md) — 8 topics
- [Mid-level](../roles/mid.md) — 10 topics
- [Senior](../roles/sr.md) — 12 topics

## Code structure and modularity

Use this group to reason about module shape, dependency direction, abstraction, information hiding, and how local code structure affects future change.

- [Cohesion and coupling](topics/cohesion-and-coupling.md) — jr, software
- [Abstraction boundaries](topics/abstraction-boundaries.md) — mid, software
- [Information hiding](topics/information-hiding.md) — jr, software
- [Dependency direction](topics/dependency-direction.md) — sr, software
- [Composition over inheritance](topics/composition-over-inheritance.md) — mid, software

## Modeling, APIs, and contracts

Use this group to express business rules, invariants, outcomes, and compatibility expectations directly in code boundaries.

- [Domain modeling](topics/domain-modeling.md) — mid, software, product
- [Invariants](topics/invariants.md) — mid, software
- [Value objects](topics/value-objects.md) — jr, software
- [Error handling strategy](topics/error-handling-strategy.md) — mid, software
- [Result types and explicit outcomes](topics/result-types-and-explicit-outcomes.md) — mid, software
- [API contracts inside a codebase](topics/api-contracts-inside-a-codebase.md) — sr, software, dx
- [Backward-compatible change](topics/backward-compatible-change.md) — sr, software, dx

## Testing and quality signals

Use this group to choose tests that prove useful behavior instead of only executing implementation details.

- [Unit test boundaries](topics/unit-test-boundaries.md) — jr, software
- [Integration test boundaries](topics/integration-test-boundaries.md) — mid, software
- [Test doubles](topics/test-doubles.md) — jr, software
- [Property-based testing](topics/property-based-testing.md) — sr, software
- [Mutation testing](topics/mutation-testing.md) — sr, software

## Refactoring and evolution

Use this group to change code safely over time while managing debt, legacy behavior, toggles, and maintainability signals.

- [Refactoring in small steps](topics/refactoring-in-small-steps.md) — mid, software
- [Code smells](topics/code-smells.md) — jr, software
- [Technical debt management](topics/technical-debt-management.md) — sr, software, product
- [Legacy code characterization](topics/legacy-code-characterization.md) — sr, software
- [Feature toggle cleanup](topics/feature-toggle-cleanup.md) — sr, software, dx

## Collaboration and delivery discipline

Use this group to make software work reviewable, explainable, sliceable, and maintainable across a team.

- [Code review quality](topics/code-review-quality.md) — mid, software, dx
- [Architecture decision records](topics/architecture-decision-records.md) — sr, software, dx
- [Estimation and risk slicing](topics/estimation-and-risk-slicing.md) — sr, software, product
- [Documentation close to code](topics/documentation-close-to-code.md) — jr, software, dx

## Debugging, configuration, and runtime behavior

Use this group to connect everyday code decisions to diagnosis, configuration safety, logs, profiling, and production behavior.

- [Systematic debugging](topics/systematic-debugging.md) — jr, software
- [Contextual logging](topics/contextual-logging.md) — mid, software, security
- [Configuration boundaries](topics/configuration-boundaries.md) — sr, software, platform
- [Performance profiling before optimization](topics/performance-profiling-before-optimization.md) — sr, software
