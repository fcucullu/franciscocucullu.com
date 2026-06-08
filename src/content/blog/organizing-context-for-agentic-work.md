---
title: "Context Engineering Is the Job Now"
description: "Running a fleet of AI agents only works if the context is ordered. My setup — one fact per memory file, an index that loads every session, and chats scoped by topic — is what keeps parallel agentic work fast instead of chaotic. The payoff compounds."
pubDate: 2026-06-08
tag: "AI Engineering"
subtitle: "When you direct several agents at once, the thing that breaks first is not the model. It is your context. Ordering it is the highest-leverage work I do."
links:
  - label: "Running AI agents like a team"
    href: "/blog/running-ai-agents-like-a-team"
    external: false
  - label: "More writing"
    href: "/blog"
    external: false
---

## The failure mode nobody warns you about

When I started running multiple agents in parallel, the first thing that broke was not the code they wrote. It was my own context. Every new chat started from zero. I re-explained the same infrastructure, the same conventions, the same "no, we don't deploy that way" for the hundredth time. The agents were fast, but I was spending my attention re-establishing ground truth instead of directing work. The bottleneck had quietly moved from building to remembering.

That is the part the demos skip. A single agent in a single thread hides the problem, because you hold the context in your head for the length of one conversation. The moment you have several agents working across several threads over several days, the context stops fitting in your head — and if it does not live somewhere ordered, every thread pays the re-explanation tax again and again.

## My setup: one fact per file, and an index that always loads

The fix that changed everything for me is almost boring. I treat context like a small, disciplined database instead of a pile of chat history. I have started calling this context engineering, because that is what it is — deliberately structuring what an agent knows, the same way you would design a schema, not letting it pile up as transcript.

The core of it is a persistent memory directory. Each fact lives in its own file — one idea, one file, with a short description at the top so it can be matched for relevance later. "We stagger multi-repo deploys by 90 seconds to avoid rate limiting." "Never set the VAPID details at module top level, it crashes the build." "This client can only touch this one site, nothing else." Each of these is a single file. None of them is buried in a transcript I will never scroll back to.

Sitting above those files is an index — one line per memory, loaded at the start of every single session. That index is the trick. It means an agent does not need to read everything to know what exists; it sees the table of contents, and pulls the full file only when a task makes it relevant. The cost of carrying a large body of hard-won knowledge stays low, because most of it stays one click away instead of crammed into the active window.

The discipline that makes it work is ruthless deduplication. Before I save a fact, I check whether a file already covers it and update that one instead of spawning a near-duplicate. When something turns out to be wrong, I delete it rather than letting a stale note quietly mislead a future agent. A memory system that only grows becomes noise. A memory system that is curated becomes leverage.

## Scoping chats by topic, not by accident

The second half of the setup is how I order the conversations themselves. Work is scoped by topic, and each topic has its own working memory. The thread about one product does not bleed into the thread about another. When I come back to a piece of work after two days, the relevant context is already attached to that topic — I am not reconstructing where I left off from memory and a scroll bar.

This sounds like organization for its own sake. It is not. It is what lets me hold many parallel tracks without them collapsing into one mushy thread where everything is vaguely related to everything. Clear boundaries between contexts are what make it safe to switch between them quickly, which is the entire game when you are directing several agents at once.

## Why this is the highest-leverage work I do

Here is the shift in how I think about my own job. When building gets cheap, the scarce resource is a clear, correct, retrievable picture of the work — what is true, what we decided, what not to touch. Agents generate plausible output cheaply. What they cannot do is supply themselves with the accumulated context of why this codebase is the way it is. That is on me, and ordering it well is the difference between an agent that lands a change cleanly and one that confidently reintroduces a bug I already fixed last month.

The impact is concrete and it compounds. Every fact I write down once is a re-explanation I never pay again, across every future thread and every future agent. A lesson learned the hard way — a build that broke, a deploy that rate-limited, a constraint a client gave me — gets captured once and then silently protects every piece of work after it. The first time, it cost me an outage. Every time after, it costs nothing, because it is already written down where the next agent will see it.

That is leverage in the most literal sense. The same hour of my attention now reaches far more output, not because the agents got faster, but because they stopped starting from zero. I have shipped in a weekend, alone, the kind of scope that used to take a squad a sprint — and the unglamorous reason it holds together is that the context underneath it is ordered, indexed, and curated, instead of scattered across a hundred forgotten chats.

## The skill that is quietly rising in value

People keep asking which technical skills matter in a world of capable agents. In my experience the one that is rising fastest is not a framework or a model. It is the ability to externalize and organize context — to write down what is true clearly enough that a system you are not personally babysitting can act on it correctly.

It is the same muscle that always separated good engineering leaders from the rest: knowing what matters, writing it down precisely, and keeping it current. Agents did not make that skill obsolete. They made it the whole job.
