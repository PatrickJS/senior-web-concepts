# AI Engineering concepts

33 topics mapped into summaries and JavaScript/Node.js examples.

## Career-level progression

- [Senior](../roles/sr.md) — 33 topics

## LLM fundamentals and model behavior

Use this group to understand how model limits, sampling, latency, throughput, and capability fit affect production AI features.

- [Tokens and context windows](topics/tokens-and-context-windows.md) — sr, ai
- [Sampling, temperature, and top-p](topics/sampling-temperature-and-top-p.md) — sr, ai
- [Model capability fit](topics/model-capability-fit.md) — sr, ai
- [Latency, throughput, and batching](topics/latency-throughput-and-batching.md) — sr, ai

## Prompting and context engineering

Use this group to assemble instructions, variables, examples, source context, and conversation state without losing control of the task.

- [Instruction hierarchy](topics/instruction-hierarchy.md) — sr, ai
- [Prompt templates and variables](topics/prompt-templates-and-variables.md) — sr, ai
- [Context pruning and summarization](topics/context-pruning-and-summarization.md) — sr, ai
- [Few-shot examples](topics/few-shot-examples.md) — sr, ai

## Structured outputs and tool use

Use this group to make model interactions machine-checkable with schemas, tool contracts, validation, dispatch, and permission boundaries.

- [JSON schema constrained output](topics/json-schema-constrained-output.md) — sr, ai
- [Tool calling contracts](topics/tool-calling-contracts.md) — sr, ai
- [Tool dispatch and validation](topics/tool-dispatch-and-validation.md) — sr, ai
- [Tool permission boundaries](topics/tool-permission-boundaries.md) — sr, ai

## Retrieval and knowledge grounding

Use this group to connect embeddings, chunking, metadata, retrieval, reranking, and source-of-truth rules into grounded answers.

- [Embeddings and cosine similarity](topics/embeddings-and-cosine-similarity.md) — sr, ai
- [Chunking and metadata strategy](topics/chunking-and-metadata-strategy.md) — sr, ai
- [RAG retrieval pipeline](topics/rag-retrieval-pipeline.md) — sr, ai
- [Reranking and hybrid search](topics/reranking-and-hybrid-search.md) — sr, ai
- [Conversation memory vs source of truth](topics/conversation-memory-vs-source-of-truth.md) — sr, ai

## Evaluation and observability

Use this group to measure AI behavior with datasets, traces, prompt regression tests, judge calibration, and production quality signals.

- [Golden set evals](topics/golden-set-evals.md) — sr, ai
- [LLM-as-judge pitfalls](topics/llm-as-judge-pitfalls.md) — sr, ai
- [Trace logging for AI features](topics/trace-logging-for-ai-features.md) — sr, ai
- [Prompt regression testing](topics/prompt-regression-testing.md) — sr, ai

## Safety, security, and data handling

Use this group to reduce prompt injection, unsafe output, privacy leakage, and unclear escalation behavior in AI-backed systems.

- [Prompt injection defense](topics/prompt-injection-defense.md) — sr, ai
- [Output guardrails](topics/output-guardrails.md) — sr, ai
- [PII redaction and data minimization](topics/pii-redaction-and-data-minimization.md) — sr, ai
- [Refusal and escalation paths](topics/refusal-and-escalation-paths.md) — sr, ai

## Agentic workflows

Use this group to design loops that plan, act, observe, persist state, ask for human review, and recover from partial progress.

- [Agent loop design](topics/agent-loop-design.md) — sr, ai
- [Plan-execute-observe cycles](topics/plan-execute-observe-cycles.md) — sr, ai
- [Human-in-the-loop checkpoints](topics/human-in-the-loop-checkpoints.md) — sr, ai
- [Long-running task state](topics/long-running-task-state.md) — sr, ai

## Model operations, cost, and rollout

Use this group to route models, control cost, cache safely, stream responses, and roll out AI features with measurable risk.

- [Model routing and fallback](topics/model-routing-and-fallback.md) — sr, ai
- [Cost controls and response caching](topics/cost-controls-and-response-caching.md) — sr, ai
- [Streaming AI UX](topics/streaming-ai-ux.md) — sr, ai
- [AI feature rollout](topics/ai-feature-rollout.md) — sr, ai
