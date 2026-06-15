# AI Engineering concepts

33 topics mapped into summaries and JavaScript/Node.js examples.

## LLM fundamentals and model behavior

Use this group to understand how model limits, sampling, latency, throughput, and capability fit affect production AI features.

- [Tokens and context windows](topics/tokens-and-context-windows.md)
- [Sampling, temperature, and top-p](topics/sampling-temperature-and-top-p.md)
- [Model capability fit](topics/model-capability-fit.md)
- [Latency, throughput, and batching](topics/latency-throughput-and-batching.md)

## Prompting and context engineering

Use this group to assemble instructions, variables, examples, source context, and conversation state without losing control of the task.

- [Instruction hierarchy](topics/instruction-hierarchy.md)
- [Prompt templates and variables](topics/prompt-templates-and-variables.md)
- [Context pruning and summarization](topics/context-pruning-and-summarization.md)
- [Few-shot examples](topics/few-shot-examples.md)

## Structured outputs and tool use

Use this group to make model interactions machine-checkable with schemas, tool contracts, validation, dispatch, and permission boundaries.

- [JSON schema constrained output](topics/json-schema-constrained-output.md)
- [Tool calling contracts](topics/tool-calling-contracts.md)
- [Tool dispatch and validation](topics/tool-dispatch-and-validation.md)
- [Tool permission boundaries](topics/tool-permission-boundaries.md)

## Retrieval and knowledge grounding

Use this group to connect embeddings, chunking, metadata, retrieval, reranking, and source-of-truth rules into grounded answers.

- [Embeddings and cosine similarity](topics/embeddings-and-cosine-similarity.md)
- [Chunking and metadata strategy](topics/chunking-and-metadata-strategy.md)
- [RAG retrieval pipeline](topics/rag-retrieval-pipeline.md)
- [Reranking and hybrid search](topics/reranking-and-hybrid-search.md)
- [Conversation memory vs source of truth](topics/conversation-memory-vs-source-of-truth.md)

## Evaluation and observability

Use this group to measure AI behavior with datasets, traces, prompt regression tests, judge calibration, and production quality signals.

- [Golden set evals](topics/golden-set-evals.md)
- [LLM-as-judge pitfalls](topics/llm-as-judge-pitfalls.md)
- [Trace logging for AI features](topics/trace-logging-for-ai-features.md)
- [Prompt regression testing](topics/prompt-regression-testing.md)

## Safety, security, and data handling

Use this group to reduce prompt injection, unsafe output, privacy leakage, and unclear escalation behavior in AI-backed systems.

- [Prompt injection defense](topics/prompt-injection-defense.md)
- [Output guardrails](topics/output-guardrails.md)
- [PII redaction and data minimization](topics/pii-redaction-and-data-minimization.md)
- [Refusal and escalation paths](topics/refusal-and-escalation-paths.md)

## Agentic workflows

Use this group to design loops that plan, act, observe, persist state, ask for human review, and recover from partial progress.

- [Agent loop design](topics/agent-loop-design.md)
- [Plan-execute-observe cycles](topics/plan-execute-observe-cycles.md)
- [Human-in-the-loop checkpoints](topics/human-in-the-loop-checkpoints.md)
- [Long-running task state](topics/long-running-task-state.md)

## Model operations, cost, and rollout

Use this group to route models, control cost, cache safely, stream responses, and roll out AI features with measurable risk.

- [Model routing and fallback](topics/model-routing-and-fallback.md)
- [Cost controls and response caching](topics/cost-controls-and-response-caching.md)
- [Streaming AI UX](topics/streaming-ai-ux.md)
- [AI feature rollout](topics/ai-feature-rollout.md)
