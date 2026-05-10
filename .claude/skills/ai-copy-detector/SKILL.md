---
name: ai-copy-detector
description: Run the AI-copy detection pass on any block of marketing copy that has just been written and is about to be committed, returned to the user, or rendered in the site. Scans for AI tells, banned phrases, rhetorical balance, and motivational closing flourishes; rewrites before the copy ships.
---

# AI Copy Detector

Run this skill on any block of marketing copy after writing it and before committing or returning it. The goal is to catch AI tells that would not survive a careful human re-read.

## The detector pass

Re-read the copy as if you did not write it. Imagine a careful reader who is allergic to AI prose. Then run every check below.

### 1. Punctuation and structure tells

- **Em dashes.** If any appear, remove them. Replace with commas, periods, parentheses, or colons.
- **Tricolons** (lists of three balanced clauses, especially rhetorically polished ones like "we plan, we build, we deliver"). Break the pattern: use two items, four items, or vary clause length so the rhythm is uneven.
- **Balanced, evenly-cadenced sentences stacked back-to-back.** Real human writing is uneven. AI writing is too smooth. If three sentences in a row land with the same rhythm, rewrite at least one.

### 2. Banned vocabulary

If any of the following appear, rewrite:

- delve, dive into, let's explore, let's dive in
- navigate, navigating the landscape, the landscape of
- in today's fast-paced world, in today's
- ultimately, in conclusion, to summarize
- it's important to note, it should be noted, worth noting
- unlock, elevate, transform, revolutionize, empower
- pinnacle, excellence, world-class, cutting-edge, best-in-class
- seamless, seamlessly, leverage, robust, holistic, synergy

### 3. The closing-flourish check

Look at the **last sentence of each paragraph and section.** AI-written copy almost always ends with a sentence that restates the obvious or adds a motivational flourish. Examples to cut:

- "Together, we can build something extraordinary."
- "The future of construction starts here."
- "Quality is at the heart of everything we do."

If the closing sentence adds no new information and only sets a vibe, **cut it.** The previous sentence is almost always the real ending.

### 4. Specificity check

Generic statements ("decades of experience," "trusted partners," "proven methodology") should be replaced with concrete ones whenever possible ("two decades," "the Demerara River bridge project," "a six-week dry-season build window"). If the copy contains a generic claim where a specific one could exist, rewrite.

### 5. Polish check

AI prose is often **too smooth**. It reads like a press release. Look for sentences where every clause arrives in the expected order with the expected weight. Add an unexpected verb, break a clause early, or end a sentence on a short word. Smooth is the tell.

## What to do when a tell is found

Rewrite the offending passage **before** the copy is committed, written to a file that ships, or returned to the user as the final version. Do not flag it and move on; fix it in place.

## When to skip this skill

Skip only when the copy is internal-only and will not be seen by visitors (commit messages, dev notes, code comments). Otherwise run the pass every time.
