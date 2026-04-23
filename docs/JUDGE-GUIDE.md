# Judge Guide

Veliora is a payment-aware biomedical research workflow built for the **Agentic Economy on Arc Hackathon**.

## What This Project Demonstrates

Veliora is not a generic biotech dashboard and not a one-shot LLM report generator.

It demonstrates:

- an **escrowed client job lifecycle** on Arc through ERC-8183,
- **paid internal workflow steps** through x402 + Circle Gateway,
- a **multi-agent research pipeline** that can succeed, degrade to exploratory output, or reject,
- and **refund-on-rejection** behavior when the report does not pass review.

## Why It Fits The Hackathon

### Usage-Based Compute Billing

Veliora breaks research work into smaller paid actions:

- literature retrieval,
- DrugDB screening,
- pathway analysis,
- red-team review,
- evaluator review.

These are charged per action rather than hidden inside a single flat backend fee.

### Real-Time Micro-Commerce Flow

The PI agent coordinates low-value paid research calls using x402 + Circle Gateway while the outer client job is funded and resolved on Arc.

That creates a real micro-commerce pattern:

- client funds the outer job,
- agents/services are paid for specific steps,
- the output is reviewed,
- and the escrow is either released or refunded.

## What To Look At First

1. `README.md`
   Product overview, screenshots, payment model, and system structure.
2. `docs/DEMO-WALKTHROUGH.md`
   Exact order for a live or narrated walkthrough.
3. `docs/ARCHITECTURE.md`
   How ERC-8183, Arc, Circle Gateway, x402, and the agent pipeline fit together.
4. `examples/README.md`
   Sanitized demo package for stable review without secrets.

## What Makes Veliora Different

| Typical AI demo | Veliora |
| --- | --- |
| single answer generator | multi-stage paid workflow |
| no explicit settlement model | escrow + micropayments + refund path |
| always returns something | can reject and refund |
| opaque orchestration | named stages and agent roles |
| weak review semantics | explicit review-gated delivery |

## Intended Outcome Model

| Outcome | Meaning |
| --- | --- |
| Deliverable shortlist | Strong enough to ship as a research brief |
| Exploratory output | Weak but still interpretable, clearly labeled |
| Reject + refund | No defensible signal or review did not approve |

## Best Submission Assets

Before final submission, make sure the repo front page exposes:

- live demo URL,
- demo video URL,
- slides PDF,
- one strong cover image,
- at least three screenshots,
- and a short execution-proof section in the README.
