# AI engineering requirements

**Role tag:** ai
**Topics:** 34

Requirements for LLM behavior, prompting, retrieval, evaluation, safety, tool use, agents, cost, and rollout.

A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.

## Coverage by domain

- AI Engineering: 33
- Data & Storage Engineering: 1

## Required concepts

### AI Engineering

#### LLM fundamentals and model behavior

- [Tokens and context windows](../ai-engineering/topics/tokens-and-context-windows.md) — Tokens are the model's input and output units, and the context window is the bounded working set the model can attend to. Practical AI engineering treats context as a scarce budget shared by instructions, user input, retrieved sources, tools, and output.
- [Sampling, temperature, and top-p](../ai-engineering/topics/sampling-temperature-and-top-p.md) — Sampling settings change how the model chooses among likely next tokens. Temperature affects sharpness, top-p limits the candidate probability mass, and both must be tuned around task type, determinism needs, and evaluation signals.
- [Model capability fit](../ai-engineering/topics/model-capability-fit.md) — Model capability fit matches a task to a model based on reasoning depth, tool use, latency, context length, language coverage, multimodal needs, cost, and safety behavior. The best model is the one that meets the product constraint, not always the largest model.
- [Latency, throughput, and batching](../ai-engineering/topics/latency-throughput-and-batching.md) — AI latency includes queueing, prompt assembly, model time, streaming cadence, tool calls, and post-processing. Throughput work often introduces batching or caching, which must be balanced against tail latency and personalization.

#### Prompting and context engineering

- [Instruction hierarchy](../ai-engineering/topics/instruction-hierarchy.md) — Instruction hierarchy defines which instructions outrank others, such as system policy, developer intent, tool constraints, retrieved content, and user requests. It is the foundation for keeping model behavior stable when context contains conflicting text.
- [Prompt templates and variables](../ai-engineering/topics/prompt-templates-and-variables.md) — Prompt templates separate fixed instructions from dynamic variables, making prompts easier to test, version, localize, and audit. Safe templates escape or delimit untrusted inputs so data is not confused with instructions.
- [Context pruning and summarization](../ai-engineering/topics/context-pruning-and-summarization.md) — Context pruning chooses what to keep, compress, or drop as a conversation or task grows. Good pruning preserves goals, constraints, current state, source citations, and unresolved decisions instead of blindly keeping recent messages.
- [Few-shot examples](../ai-engineering/topics/few-shot-examples.md) — Few-shot examples demonstrate the target input-output pattern inside the prompt. They are most useful when they cover edge cases, failure modes, tone, structure, or domain-specific transformations that plain instructions underspecify.

#### Structured outputs and tool use

- [JSON schema constrained output](../ai-engineering/topics/json-schema-constrained-output.md) — Schema-constrained output makes model responses machine-checkable by defining required fields, types, enums, arrays, and nesting. It reduces parser fragility, but downstream code must still validate and handle refusals or partial failures.
- [Tool calling contracts](../ai-engineering/topics/tool-calling-contracts.md) — Tool calling contracts define the names, arguments, permissions, side effects, return values, and error semantics of tools the model may request. Strong contracts keep the model as a planner while application code remains the executor.
- [Tool dispatch and validation](../ai-engineering/topics/tool-dispatch-and-validation.md) — Tool dispatch maps model-requested tool calls to allowed application functions after validating tool name, arguments, permissions, and expected side effects. Dispatch code is a security boundary, not just plumbing.
- [Tool permission boundaries](../ai-engineering/topics/tool-permission-boundaries.md) — Tool permission boundaries restrict what the model can cause the system to read, write, spend, send, delete, or expose. Permission should be based on user authorization, task context, tool risk, and confirmation requirements.

#### Retrieval and knowledge grounding

- [Embeddings and cosine similarity](../ai-engineering/topics/embeddings-and-cosine-similarity.md) — Embeddings map text or other content into vectors so semantic similarity can be searched. Cosine similarity is a common scoring method, but retrieval quality also depends on chunking, metadata, filters, freshness, and reranking.
- [Chunking and metadata strategy](../ai-engineering/topics/chunking-and-metadata-strategy.md) — Chunking splits source material into retrieval units, while metadata carries source, ownership, freshness, access control, hierarchy, and document structure. Bad chunking can make good embeddings look weak.
- [RAG retrieval pipeline](../ai-engineering/topics/rag-retrieval-pipeline.md) — Retrieval-augmented generation pulls relevant source material into model context before generation. A production RAG pipeline includes indexing, filtering, retrieval, reranking, source packing, answer generation, and citation or grounding checks.
- [Reranking and hybrid search](../ai-engineering/topics/reranking-and-hybrid-search.md) — Reranking reorders retrieved candidates using a stronger relevance signal, while hybrid search combines lexical and vector retrieval. These techniques improve grounding when semantic search alone misses exact terms, IDs, or rare phrases.
- [Conversation memory vs source of truth](../ai-engineering/topics/conversation-memory-vs-source-of-truth.md) — Conversation memory is the model-facing summary of interaction state, while the source of truth is the durable system record. Designs should avoid letting generated summaries silently overwrite authoritative data.

#### Evaluation and observability

- [Golden set evals](../ai-engineering/topics/golden-set-evals.md) — Golden set evals use curated examples with expected behavior to measure prompt, model, retrieval, and tool changes. Good sets include common cases, edge cases, regressions, and unacceptable outputs.
- [LLM-as-judge pitfalls](../ai-engineering/topics/llm-as-judge-pitfalls.md) — LLM-as-judge evals can scale qualitative review, but judges have bias, drift, prompt sensitivity, and blind spots. They need calibration against human labels, clear rubrics, disagreement tracking, and spot checks.
- [Trace logging for AI features](../ai-engineering/topics/trace-logging-for-ai-features.md) — AI traces record prompts, model choices, tool calls, retrieval inputs, outputs, latency, cost, and policy decisions with sensitive data controls. They are required to debug quality regressions and production incidents.
- [Prompt regression testing](../ai-engineering/topics/prompt-regression-testing.md) — Prompt regression testing checks that prompt, model, tool, or retrieval changes do not break known behavior. The useful unit is the whole AI interaction contract, not just prompt text.

#### Safety, security, and data handling

- [Prompt injection defense](../ai-engineering/topics/prompt-injection-defense.md) — Prompt injection defense treats retrieved content, web pages, documents, and user text as untrusted data that may contain instructions. Defenses include instruction hierarchy, source isolation, tool permission checks, allowlists, and confirmation gates.
- [Output guardrails](../ai-engineering/topics/output-guardrails.md) — Output guardrails validate model responses before display, execution, storage, or sending. They can enforce schema, policy, unsafe-content checks, citation requirements, numeric bounds, or human review.
- [PII redaction and data minimization](../ai-engineering/topics/pii-redaction-and-data-minimization.md) — PII redaction and data minimization reduce sensitive data exposure in prompts, logs, traces, evals, and vendor calls. The safest token is the one never sent, logged, or retained unnecessarily.
- [Refusal and escalation paths](../ai-engineering/topics/refusal-and-escalation-paths.md) — Refusal and escalation paths define what the product does when the model cannot safely or confidently complete a request. Good designs preserve user trust with clear alternatives, support handoff, or constrained partial help.

#### Agentic workflows

- [Agent loop design](../ai-engineering/topics/agent-loop-design.md) — An agent loop repeatedly observes state, decides next action, calls tools, records results, and stops when the goal is complete or blocked. The hard parts are stopping criteria, state, permissions, retries, and recovery.
- [Plan-execute-observe cycles](../ai-engineering/topics/plan-execute-observe-cycles.md) — Plan-execute-observe cycles split agent work into an explicit plan, bounded actions, and evidence-based updates. They help keep long tasks auditable and prevent the agent from drifting away from the objective.
- [Human-in-the-loop checkpoints](../ai-engineering/topics/human-in-the-loop-checkpoints.md) — Human-in-the-loop checkpoints pause an AI workflow before high-risk actions, ambiguous decisions, expensive operations, or irreversible side effects. They should be placed by risk, not sprinkled everywhere.
- [Long-running task state](../ai-engineering/topics/long-running-task-state.md) — Long-running task state stores objective, plan, decisions, tool results, unresolved blockers, budgets, and verification evidence. Without durable state, agent workflows become hard to resume, audit, or debug.

#### Model operations, cost, and rollout

- [Model routing and fallback](../ai-engineering/topics/model-routing-and-fallback.md) — Model routing sends requests to different models based on task complexity, latency target, cost budget, context size, availability, safety policy, or tenant tier. Fallback should preserve correctness boundaries, not just retry anywhere.
- [Cost controls and response caching](../ai-engineering/topics/cost-controls-and-response-caching.md) — Cost controls for AI systems include token budgets, model routing, prompt trimming, batch processing, response caching, tenant quotas, and observability. Caching is safest for deterministic, non-user-specific, policy-stable outputs.
- [Streaming AI UX](../ai-engineering/topics/streaming-ai-ux.md) — Streaming AI UX delivers partial output as it is generated, improving perceived latency and enabling cancellation. It must handle partial sentences, tool-call pauses, errors, moderation, and final-state reconciliation.
- [AI feature rollout](../ai-engineering/topics/ai-feature-rollout.md) — AI feature rollout introduces model-backed behavior gradually with flags, eval gates, tracing, human review, fallback, and cost monitoring. Rollout plans should account for quality drift as well as uptime.

### Data & Storage Engineering

#### Analytics, pipelines, and governance

- [Vector storage and retrieval](../data-storage/topics/vector-storage-and-retrieval.md) — Vector storage supports similarity search over embeddings with indexes, metadata filters, refresh policies, and recall-latency trade-offs. It is useful for AI retrieval, recommendations, duplicate detection, and semantic search.
