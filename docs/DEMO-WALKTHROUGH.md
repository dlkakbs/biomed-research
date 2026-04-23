# Demo Walkthrough

This is the recommended demo order for Veliora.

## Goal

Show that Veliora is:

- a real product flow,
- a real payment flow,
- and a selective research workflow rather than an answer generator.

## Recommended Order

### 1. Start on the README

Open the repo homepage and frame the project in one sentence:

> Veliora is a payment-aware, multi-agent biomedical research workflow for drug repurposing analysis.

Then point out:

- the hackathon categories,
- the key features,
- the screenshots,
- and the payment stack: Arc + ERC-8183 + x402 + Circle Gateway.

### 2. Show the landing page

Open the hosted web app.

Narration:

- this is the user-facing product entry point,
- the user is not buying a chat answer,
- the user is funding a research job with review-gated delivery.

### 3. Show job creation and funding

Walk through the outer lifecycle:

1. create job,
2. set budget,
3. approve USDC,
4. fund escrow.

Narration:

- Arc and ERC-8183 handle the client-facing marketplace lifecycle,
- this is the outer economic contract of the workflow.

### 4. Show the workspace timeline

Open a workspace page and explain the stages:

- literature,
- DrugDB,
- pathway,
- repurposing,
- evidence,
- red-team,
- report,
- review.

Narration:

- each stage is visible,
- the workflow is traceable,
- and low-value research actions can be paid during execution.

### 5. Explain paid internal actions

Show or describe the internal paid service model:

- the PI agent requests a paid resource,
- receives `402 Payment Required`,
- signs Circle Gateway authorization,
- retries with payment proof,
- and settles later on Arc.

Narration:

- this is the usage-based compute billing part,
- the workflow monetizes per-step research actions instead of bundling everything into one opaque fee.

### 6. Show the results page

Open a results page and explain the three possible outcomes:

| Outcome | What to say |
| --- | --- |
| Strong shortlist | This is the highest-confidence output class. |
| Exploratory hypothesis | The system found a weak but interpretable signal and labels it honestly. |
| Reject + refund | The system refuses to pretend a result exists and refunds escrow. |

### 7. Close on why this matters

End with:

- real payment rails,
- real delivery control,
- real refund behavior,
- and a research workflow that stays selective.

## Suggested Demo Links

Fill these before submission:

- live app: `TODO`
- sample workspace: `TODO`
- sample results page: `TODO`
- video: `TODO`
- slides: `TODO`

## Backup Plan

If live infra is unstable, use:

- the GitHub README,
- screenshots in `apps/web/public/screenshots/`,
- sanitized examples in `examples/`,
- and the recorded demo video.
