export default [
  {
    "title": "Tokens and context windows",
    "group": "LLM fundamentals and model behavior",
    "summary": "Tokens are the model's input and output units, and the context window is the bounded working set the model can attend to. Practical AI engineering treats context as a scarce budget shared by instructions, user input, retrieved sources, tools, and output.",
    "example": "ai-token-budget",
    "related": [
      "System Design: Capacity estimation",
      "Frontend: Streaming fetch response handling"
    ]
  },
  {
    "title": "Sampling, temperature, and top-p",
    "group": "LLM fundamentals and model behavior",
    "summary": "Sampling settings change how the model chooses among likely next tokens. Temperature affects sharpness, top-p limits the candidate probability mass, and both must be tuned around task type, determinism needs, and evaluation signals.",
    "example": "ai-sampling",
    "related": [
      "System Design: SLOs and error budgets"
    ]
  },
  {
    "title": "Model capability fit",
    "group": "LLM fundamentals and model behavior",
    "summary": "Model capability fit matches a task to a model based on reasoning depth, tool use, latency, context length, language coverage, multimodal needs, cost, and safety behavior. The best model is the one that meets the product constraint, not always the largest model.",
    "example": "ai-capability-fit",
    "related": [
      "System Design: Cost-aware architecture",
      "System Design: Build vs buy evaluation"
    ]
  },
  {
    "title": "Latency, throughput, and batching",
    "group": "LLM fundamentals and model behavior",
    "summary": "AI latency includes queueing, prompt assembly, model time, streaming cadence, tool calls, and post-processing. Throughput work often introduces batching or caching, which must be balanced against tail latency and personalization.",
    "example": "ai-batch-scheduler",
    "related": [
      "System Design: Latency budget decomposition",
      "Backend: Backpressure handling"
    ]
  },
  {
    "title": "Instruction hierarchy",
    "group": "Prompting and context engineering",
    "summary": "Instruction hierarchy defines which instructions outrank others, such as system policy, developer intent, tool constraints, retrieved content, and user requests. It is the foundation for keeping model behavior stable when context contains conflicting text.",
    "example": "ai-instruction-hierarchy",
    "related": [
      "AI Engineering: Prompt injection defense",
      "System Design: Threat modeling at system boundaries"
    ]
  },
  {
    "title": "Prompt templates and variables",
    "group": "Prompting and context engineering",
    "summary": "Prompt templates separate fixed instructions from dynamic variables, making prompts easier to test, version, localize, and audit. Safe templates escape or delimit untrusted inputs so data is not confused with instructions.",
    "example": "ai-prompt-template",
    "related": [
      "Frontend: Deterministic rendering"
    ]
  },
  {
    "title": "Context pruning and summarization",
    "group": "Prompting and context engineering",
    "summary": "Context pruning chooses what to keep, compress, or drop as a conversation or task grows. Good pruning preserves goals, constraints, current state, source citations, and unresolved decisions instead of blindly keeping recent messages.",
    "example": "ai-context-pruning",
    "related": [
      "System Design: Data modeling from access patterns"
    ]
  },
  {
    "title": "Few-shot examples",
    "group": "Prompting and context engineering",
    "summary": "Few-shot examples demonstrate the target input-output pattern inside the prompt. They are most useful when they cover edge cases, failure modes, tone, structure, or domain-specific transformations that plain instructions underspecify.",
    "example": "ai-few-shot",
    "related": [
      "AI Engineering: Prompt regression testing"
    ]
  },
  {
    "title": "JSON schema constrained output",
    "group": "Structured outputs and tool use",
    "summary": "Schema-constrained output makes model responses machine-checkable by defining required fields, types, enums, arrays, and nesting. It reduces parser fragility, but downstream code must still validate and handle refusals or partial failures.",
    "example": "ai-json-schema",
    "diagram": `flowchart LR
  Prompt["Prompt"] --> Model["Model"]
  Schema["JSON schema"] --> Model
  Model --> Output["Structured output"]
  Output --> Validate["Runtime validation"]
  Validate --> App["Application code"]`,
    "related": [
      "Backend: API contract testing",
      "System Design: Client-edge-service boundaries"
    ]
  },
  {
    "title": "Tool calling contracts",
    "group": "Structured outputs and tool use",
    "summary": "Tool calling contracts define the names, arguments, permissions, side effects, return values, and error semantics of tools the model may request. Strong contracts keep the model as a planner while application code remains the executor.",
    "example": "ai-tool-contract",
    "diagram": `flowchart LR
  Model["Model"] --> Call["Tool call JSON"]
  Call --> Validate["Validate args"]
  Validate --> Tool["Tool execution"]
  Tool --> Result["Tool result"]
  Result --> Model`,
    "related": [
      "System Design: Secret and configuration boundaries",
      "Backend: API contract testing"
    ]
  },
  {
    "title": "Tool dispatch and validation",
    "group": "Structured outputs and tool use",
    "summary": "Tool dispatch maps model-requested tool calls to allowed application functions after validating tool name, arguments, permissions, and expected side effects. Dispatch code is a security boundary, not just plumbing.",
    "example": "ai-tool-dispatch",
    "related": [
      "Backend: OAuth2 token introspection vs JWT validation"
    ]
  },
  {
    "title": "Tool permission boundaries",
    "group": "Structured outputs and tool use",
    "summary": "Tool permission boundaries restrict what the model can cause the system to read, write, spend, send, delete, or expose. Permission should be based on user authorization, task context, tool risk, and confirmation requirements.",
    "example": "ai-permission-boundary",
    "related": [
      "System Design: Threat modeling at system boundaries",
      "System Design: Secret and configuration boundaries"
    ]
  },
  {
    "title": "Embeddings and cosine similarity",
    "group": "Retrieval and knowledge grounding",
    "summary": "Embeddings map text or other content into vectors so semantic similarity can be searched. Cosine similarity is a common scoring method, but retrieval quality also depends on chunking, metadata, filters, freshness, and reranking.",
    "example": "ai-embedding-cosine",
    "related": [
      "Backend: Vector-like approximate data structures",
      "System Design: Data modeling from access patterns"
    ]
  },
  {
    "title": "Chunking and metadata strategy",
    "group": "Retrieval and knowledge grounding",
    "summary": "Chunking splits source material into retrieval units, while metadata carries source, ownership, freshness, access control, hierarchy, and document structure. Bad chunking can make good embeddings look weak.",
    "example": "ai-chunking",
    "related": [
      "System Design: Data modeling from access patterns",
      "Backend: Sharding strategies"
    ]
  },
  {
    "title": "RAG retrieval pipeline",
    "group": "Retrieval and knowledge grounding",
    "summary": "Retrieval-augmented generation pulls relevant source material into model context before generation. A production RAG pipeline includes indexing, filtering, retrieval, reranking, source packing, answer generation, and citation or grounding checks.",
    "example": "ai-rag-pipeline",
    "diagram": `flowchart LR
  Query["User query"] --> Embed["Embed query"]
  Embed --> Search["Vector/hybrid search"]
  Search --> Filter["Access and freshness filters"]
  Filter --> Rerank["Rerank"]
  Rerank --> Context["Context pack"]
  Context --> Model["Model answer"]`,
    "related": [
      "System Design: Read freshness routing",
      "Backend: Query planner and cost-based optimization"
    ]
  },
  {
    "title": "Reranking and hybrid search",
    "group": "Retrieval and knowledge grounding",
    "summary": "Reranking reorders retrieved candidates using a stronger relevance signal, while hybrid search combines lexical and vector retrieval. These techniques improve grounding when semantic search alone misses exact terms, IDs, or rare phrases.",
    "example": "ai-rerank",
    "related": [
      "Backend: Query planner and cost-based optimization"
    ]
  },
  {
    "title": "Conversation memory vs source of truth",
    "group": "Retrieval and knowledge grounding",
    "summary": "Conversation memory is the model-facing summary of interaction state, while the source of truth is the durable system record. Designs should avoid letting generated summaries silently overwrite authoritative data.",
    "example": "ai-memory-source-truth",
    "related": [
      "System Design: Read path vs write path design",
      "Frontend: Event sourcing in frontend"
    ]
  },
  {
    "title": "Golden set evals",
    "group": "Evaluation and observability",
    "summary": "Golden set evals use curated examples with expected behavior to measure prompt, model, retrieval, and tool changes. Good sets include common cases, edge cases, regressions, and unacceptable outputs.",
    "example": "ai-golden-eval",
    "related": [
      "System Design: Operational readiness review"
    ]
  },
  {
    "title": "LLM-as-judge pitfalls",
    "group": "Evaluation and observability",
    "summary": "LLM-as-judge evals can scale qualitative review, but judges have bias, drift, prompt sensitivity, and blind spots. They need calibration against human labels, clear rubrics, disagreement tracking, and spot checks.",
    "example": "ai-judge-aggregation",
    "related": [
      "System Design: SLOs and error budgets"
    ]
  },
  {
    "title": "Trace logging for AI features",
    "group": "Evaluation and observability",
    "summary": "AI traces record prompts, model choices, tool calls, retrieval inputs, outputs, latency, cost, and policy decisions with sensitive data controls. They are required to debug quality regressions and production incidents.",
    "example": "ai-trace-logging",
    "related": [
      "System Design: Tracing across async workflows",
      "Backend: Log aggregation with sampling"
    ]
  },
  {
    "title": "Prompt regression testing",
    "group": "Evaluation and observability",
    "summary": "Prompt regression testing checks that prompt, model, tool, or retrieval changes do not break known behavior. The useful unit is the whole AI interaction contract, not just prompt text.",
    "example": "ai-prompt-regression",
    "related": [
      "Backend: API contract testing"
    ]
  },
  {
    "title": "Prompt injection defense",
    "group": "Safety, security, and data handling",
    "summary": "Prompt injection defense treats retrieved content, web pages, documents, and user text as untrusted data that may contain instructions. Defenses include instruction hierarchy, source isolation, tool permission checks, allowlists, and confirmation gates.",
    "example": "ai-prompt-injection",
    "diagram": `flowchart LR
  Source["Untrusted source text"] --> Delimiter["Data boundary"]
  User["User request"] --> Policy["Instruction hierarchy"]
  Delimiter --> Model["Model"]
  Policy --> Model
  Model --> Gate["Tool permission gate"]`,
    "related": [
      "System Design: Threat modeling at system boundaries",
      "Frontend: Trusted Types"
    ]
  },
  {
    "title": "Output guardrails",
    "group": "Safety, security, and data handling",
    "summary": "Output guardrails validate model responses before display, execution, storage, or sending. They can enforce schema, policy, unsafe-content checks, citation requirements, numeric bounds, or human review.",
    "example": "ai-output-guardrail",
    "related": [
      "Backend: API contract testing",
      "Frontend: Content Security Policy"
    ]
  },
  {
    "title": "PII redaction and data minimization",
    "group": "Safety, security, and data handling",
    "summary": "PII redaction and data minimization reduce sensitive data exposure in prompts, logs, traces, evals, and vendor calls. The safest token is the one never sent, logged, or retained unnecessarily.",
    "example": "ai-pii-redaction",
    "related": [
      "System Design: Secret and configuration boundaries",
      "Backend: Log aggregation with sampling"
    ]
  },
  {
    "title": "Refusal and escalation paths",
    "group": "Safety, security, and data handling",
    "summary": "Refusal and escalation paths define what the product does when the model cannot safely or confidently complete a request. Good designs preserve user trust with clear alternatives, support handoff, or constrained partial help.",
    "example": "ai-escalation",
    "related": [
      "System Design: Degradation and fallback design"
    ]
  },
  {
    "title": "Agent loop design",
    "group": "Agentic workflows",
    "summary": "An agent loop repeatedly observes state, decides next action, calls tools, records results, and stops when the goal is complete or blocked. The hard parts are stopping criteria, state, permissions, retries, and recovery.",
    "example": "ai-agent-loop",
    "diagram": `flowchart LR
  Goal["Goal"] --> Observe["Observe"]
  Observe --> Decide["Decide"]
  Decide --> Act["Act with tool"]
  Act --> Record["Record result"]
  Record --> Observe
  Decide --> Stop["Stop/ask/escalate"]`,
    "related": [
      "System Design: Async workflow design",
      "Backend: Circuit breaker + bulkhead patterns"
    ]
  },
  {
    "title": "Plan-execute-observe cycles",
    "group": "Agentic workflows",
    "summary": "Plan-execute-observe cycles split agent work into an explicit plan, bounded actions, and evidence-based updates. They help keep long tasks auditable and prevent the agent from drifting away from the objective.",
    "example": "ai-plan-execute-observe",
    "related": [
      "System Design: Architecture decision records"
    ]
  },
  {
    "title": "Human-in-the-loop checkpoints",
    "group": "Agentic workflows",
    "summary": "Human-in-the-loop checkpoints pause an AI workflow before high-risk actions, ambiguous decisions, expensive operations, or irreversible side effects. They should be placed by risk, not sprinkled everywhere.",
    "example": "ai-human-checkpoint",
    "related": [
      "System Design: Abuse and quota controls",
      "System Design: Secret and configuration boundaries"
    ]
  },
  {
    "title": "Long-running task state",
    "group": "Agentic workflows",
    "summary": "Long-running task state stores objective, plan, decisions, tool results, unresolved blockers, budgets, and verification evidence. Without durable state, agent workflows become hard to resume, audit, or debug.",
    "example": "ai-task-state",
    "related": [
      "System Design: Async workflow design",
      "Backend: CQRS + Event Sourcing projections"
    ]
  },
  {
    "title": "Model routing and fallback",
    "group": "Model operations, cost, and rollout",
    "summary": "Model routing sends requests to different models based on task complexity, latency target, cost budget, context size, availability, safety policy, or tenant tier. Fallback should preserve correctness boundaries, not just retry anywhere.",
    "example": "ai-model-router",
    "diagram": `flowchart LR
  Request["AI request"] --> Router["Router"]
  Router --> Small["Fast/cheap model"]
  Router --> Large["Reasoning model"]
  Router --> Fallback["Fallback model"]
  Small --> Validate["Validate"]
  Large --> Validate
  Fallback --> Validate`,
    "related": [
      "System Design: Cost-aware architecture",
      "System Design: Degradation and fallback design"
    ]
  },
  {
    "title": "Cost controls and response caching",
    "group": "Model operations, cost, and rollout",
    "summary": "Cost controls for AI systems include token budgets, model routing, prompt trimming, batch processing, response caching, tenant quotas, and observability. Caching is safest for deterministic, non-user-specific, policy-stable outputs.",
    "example": "ai-cost-cache",
    "related": [
      "System Design: Cost-aware architecture",
      "Frontend: Cache invalidation strategies"
    ]
  },
  {
    "title": "Streaming AI UX",
    "group": "Model operations, cost, and rollout",
    "summary": "Streaming AI UX delivers partial output as it is generated, improving perceived latency and enabling cancellation. It must handle partial sentences, tool-call pauses, errors, moderation, and final-state reconciliation.",
    "example": "ai-streaming-ux",
    "related": [
      "Frontend: Streaming fetch response handling",
      "System Design: Latency budget decomposition"
    ]
  },
  {
    "title": "AI feature rollout",
    "group": "Model operations, cost, and rollout",
    "summary": "AI feature rollout introduces model-backed behavior gradually with flags, eval gates, tracing, human review, fallback, and cost monitoring. Rollout plans should account for quality drift as well as uptime.",
    "example": "ai-rollout",
    "related": [
      "System Design: Release strategy selection",
      "Backend: Feature flags with rollout strategies"
    ]
  }
];
