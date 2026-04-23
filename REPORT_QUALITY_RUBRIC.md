# Report Quality Rubric

This checklist is for quickly judging whether a generated report is defensible, especially for rare-disease runs.

Use it to answer one question fast:
Is this report trustworthy enough to inspect further, or is it mostly pipeline noise?

## Scoring

Score each category from `0` to `3`.

- `0` = clearly bad
- `1` = weak / questionable
- `2` = acceptable
- `3` = strong

Total score bands:

- `0-7` = unreliable
- `8-12` = usable with caution
- `13-16` = good
- `17-21` = very good

## Product Scoring Model

The product-level ranking model is a `100-point` system. It weights:

- literature support: `0-30`
- mechanism overlap: `0-30`
- clinical evidence: `0-20`
- safety profile: `0-10`
- genetic support: `-10` to `+10`

These weights are what drive the candidate ranking and shortlist behavior inside the product.

The report UI then compresses that underlying score into three high-level evaluation dimensions:

- `Evidence`
  reflects how strong the disease-specific and candidate-linked support is
- `Maturity`
  reflects how clinically established or translationally advanced the candidate is
- `Risk`
  reflects uncertainty, development difficulty, and safety / execution concerns

Interpretation:

- low `Evidence` usually means the support is indirect, early-stage, sparse, or inconsistent
- high `Maturity` usually means the drug is already clinically studied or approved in another setting
- low `Risk` usually means safety and operational feasibility are better understood

These dimensions should be treated as a presentation layer over the fuller scoring model, not as a replacement for it.

## Output Labels and Badges

The product also surfaces compact interpretation labels on top of the scoring model. These are not independent scoring categories; they are UI-facing summaries of how the run should be read.

Common examples include:

- `repurposing fit`
- `low confidence`
- `disease-context evidence only`
- `mechanistic with genetic context`
- `high failure risk`
- `new idea`

How to read them:

- `repurposing fit` usually signals that the mechanism and disease context align well enough to merit attention
- `low confidence` means the system is signaling uncertainty rather than a strong translational claim
- `disease-context evidence only` means the run found disease-relevant evidence, but not strong candidate-specific validation
- `mechanistic with genetic context` means the signal is supported mainly by mechanism and disease-biology anchoring
- `high failure risk` means the path to translation is fragile, weakly validated, or operationally risky
- `new idea` should be read as novelty framing, not proof of strength

Rubric rule:

- these labels should reinforce the report's honesty
- they must not make an exploratory output look shortlist-level
- they must not be interpreted as substitutes for candidate-specific evidence

## Categories

### 1. Literature Precision

Question:
Are the top papers genuinely disease-central, or are they broad umbrella reviews / generic neurology papers?

High score:
- top papers directly mention the disease in title, abstract, or MeSH
- little or no umbrella-title leakage
- limited generic review noise

Red flags:
- `Ataxia.` / `Neuropathy.` / similarly broad titles near the top
- disease-family reviews outranking disease-specific papers

### 2. Biology Coherence

Question:
Do disease, gene, pathway, and mechanism form a coherent chain?

High score:
- disease-linked genes make sense
- pathways align with disease biology
- mechanism narrative is internally consistent

Red flags:
- pathway section feels disconnected from disease
- gene list and mechanism do not support each other

### 3. Candidate Legitimacy

Question:
Is the surfaced candidate, early-stage hypothesis, or pipeline-reviewed signal grounded in real disease/mechanism context, or is it generic expansion noise?

High score:
- candidate / hypothesis / signal has disease-specific or target-linked rationale
- indication/mechanism context is visible
- not just a generic database artifact

Red flags:
- opaque candidate with no meaningful disease anchor
- surfaced signal appears only because a target was loosely matched

### 4. Evidence Honesty

Question:
Does the report clearly distinguish disease-context evidence from candidate-specific evidence, and does it label exploratory outputs honestly?

High score:
- candidate-specific support is stated accurately
- uncertainty is visible
- disease papers are not overclaimed as validation for the candidate
- pipeline-reviewed signals are clearly labeled as exploratory rather than shortlist-level findings

Red flags:
- disease literature is presented as if it directly validates the candidate
- weak evidence is written with high confidence
- exploratory signals are framed as if they were final reportable candidates

### 5. No-Hit Behavior

Question:
If the run has no strong repurposing signal, does the report say so honestly?

High score:
- no-hit or weak-hit state is explicit
- report does not invent a fallback candidate
- if no scored shortlist exists, the output is either a clean reject or clearly exploratory pipeline-reviewed signals
- limitations are visible

Red flags:
- forced top candidate despite weak upstream support
- report sounds decisive when the pipeline is actually empty
- exploratory signals are used to imply that a scored shortlist existed when it did not

### 6. Redundancy Control

Question:
Does the report avoid repeating the same disease-title review pattern?

High score:
- exact-title review duplication is limited
- paper set covers distinct perspectives
- shortlist is not dominated by near-duplicates

Red flags:
- same disease-title review appears in multiple old variants
- list feels repetitive rather than informative

### 7. Actionability

Question:
Does the report help a researcher decide what to do next?

High score:
- suggests concrete next validation directions
- points to target, assay, biomarker, or mechanism follow-up
- useful even when the answer is "not enough evidence"
- if the output is exploratory, the next-step suggestion stays narrow and appropriately cautious

Red flags:
- purely descriptive summary
- no clear next-step signal
- exploratory outputs imply a stronger translational path than the evidence supports

## Expected Score by Scenario

### Strong Biology-Signal Disease

Expected:
- score should usually be `13+`

Interpretation:
- if this class scores low, the pipeline likely still has a structural problem

### Weak / No-Hit Rare Disease

Expected:
- candidate strength may be low
- honesty score should be high

Interpretation:
- a good output here is often conservative, not exciting
- acceptable outcomes include a clean reject, a narrow early-stage hypothesis, or clearly labeled pipeline-reviewed signals

### Broad / Common Disease

Expected:
- literature volume will be higher
- the main test is prioritization under noise

Interpretation:
- report should stay coherent despite a broader evidence field

## Fast Failure Signs

If any of these appear, the report likely needs manual skepticism:

- generic umbrella paper is near the top
- candidate-specific evidence is absent
- disease, pathway, and surfaced candidate / signal do not connect cleanly
- no-hit run still produces a confident top candidate
- no-shortlist run presents exploratory signals as if they were final candidates
- old exact-title reviews dominate the paper list

## Practical Use

For a quick review:

1. Score all 7 categories.
2. Mark any red flags.
3. Decide whether the report is:
   - `reject`
   - `inspect manually`
   - `good enough to continue`

For regression checks:

- compare the same query across revisions
- do not only compare top candidate presence
- compare honesty, literature precision, redundancy control, and output framing too
