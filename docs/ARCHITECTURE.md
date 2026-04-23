# Architecture

Veliora combines a biomedical research workflow with a two-layer payment model.

## Architecture In One Sentence

The client funds a research job on Arc through ERC-8183, the PI agent orchestrates paid research steps through x402 + Circle Gateway, and the finalizer either completes delivery or refunds escrow.

## Core Layers

| Layer | Responsibility |
| --- | --- |
| Client layer | Creates and funds the research job in USDC |
| Escrow layer | ERC-8183 tracks create, fund, submit, complete, and reject |
| Orchestration layer | PI agent dispatches specialist agents and controls workflow state |
| Paid action layer | x402 + Circle Gateway handle low-value external service payments |
| Review layer | Red-team and peer review decide whether the report is deliverable |
| Settlement layer | Arc finalizes job completion or refund |

## High-Level Flow

```text
Client
  |
  +--> createJob / fund on ERC-8183
  |
  v
PI Agent
  |
  +--> Literature Seller
  +--> DrugDB Seller
  +--> Pathway Seller
  +--> Red-Team Seller
  +--> Review Seller
  +--> Internal Repurposing
  +--> Internal Evidence
  +--> Internal Report
  |
  v
Finalizer
  |
  +--> complete
  |
  +--> reject + refund
```

## Why Two Payment Layers Exist

### Outer Layer: Client Job Escrow

The outer layer is the client-facing economic contract.

It answers:

- has the client funded the job?
- was a report submitted?
- was the report approved?
- should the escrow be released or refunded?

This is what ERC-8183 on Arc manages.

### Inner Layer: Paid Research Actions

The inner layer is the execution economy inside the research workflow.

It answers:

- should the literature step be paid?
- should the DrugDB step be paid?
- should the evaluator step be paid?

This is what x402 + Circle Gateway manage.

## Why This Stack Matters

| Component | Why it is used |
| --- | --- |
| Arc | Fast finality and a USDC-native coordination environment |
| ERC-8183 | Clear marketplace-style job lifecycle for creation, funding, submission, and resolution |
| Circle Gateway | Practical batching and gasless authorization for low-value payments |
| x402 | Standardized paid API interaction model for research actions |

## Selective Delivery Policy

Veliora is intentionally not designed to always produce a confident answer.

| Case | Outcome |
| --- | --- |
| Strong candidate supported | deliver |
| Weak but interpretable hypothesis | deliver with exploratory framing |
| No defensible signal | reject and refund |

That selective policy is important because it keeps the economic workflow honest.

## Repo Map

| Path | Purpose |
| --- | --- |
| `apps/web` | landing page, workspace UI, and results UI |
| `apps/api` | API server, orchestration entrypoints, and paid endpoints |
| `packages/agents` | specialist research and review stages |
| `packages/orchestration` | pipeline, report assembly, safety, and payout logic |
| `packages/payments` | Arc, ERC-8183, Circle Gateway, wallet, and x402 flows |
| `packages/db` | local state, reports, events, and job records |
| `examples/` | sanitized demo data for review and walkthroughs |
