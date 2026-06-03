---
title: "Running AI Agents Like a Team"
description: "Running multiple AI coding agents in parallel, each owning a slice, while the human reviews and integrates. The bottleneck moves from building speed to clarity of specification and judgment."
pubDate: 2026-06-01
tag: "AI Engineering"
subtitle: "When you run several coding agents in parallel, the bottleneck stops being how fast you can build. It becomes how clearly you can specify, review, and decide."
links:
  - label: "More writing"
    href: "/blog"
    external: false
  - label: "About me"
    href: "/"
    external: false
---

## The shift I did not see coming

For most of my career, the constraint on shipping was typing speed and context. There was only one of me, I could hold one problem in my head at a time, and the work moved at the pace I could write and test it. AI coding assistants changed that less than people expected at first, because a single assistant still pairs with a single human in a single thread.

What actually changed things for me was running several agents at once. Not one assistant helping me code, but multiple agents each working on a different slice of the system in parallel, while I sit above them reviewing, integrating, and deciding. The day that clicked, my mental model of my own job changed.

## It feels like managing a team, because it is

The closest analogy is leading engineers, and the analogy is uncomfortably exact. I have led 4 squads, 24 engineers, so I know what coordinating parallel work actually costs in attention. I give each agent a scoped piece of work. One refactors a module, another writes the tests, another drafts a migration, another wires up a feature against an interface the first one is still building. They run concurrently. My attention moves between them the way it does in a stand-up: who is blocked, who went down the wrong path, whose output is ready to merge. The difference in throughput is the part that surprised me. Alone, with a fleet of agents, I now ship in a weekend the kind of scope that used to take a squad a sprint.

And like with a team, the work is only as good as the brief. A vague ticket produces a confident, plausible, wrong result, and an agent will not push back the way a good engineer would. So I spend far more time than I used to on the specification: what exactly I want, what the constraints are, what done looks like, what I do not want it to touch. The clearer the brief, the less I throw away.

## The bottleneck moved, it did not disappear

People talk about AI removing the bottleneck on software. In my experience the bottleneck moved upstream, onto me. When five agents can each produce a credible pull request in the time it used to take me to write one, the scarce resource is no longer construction. It is everything around construction: deciding what is worth building, specifying it precisely enough to delegate, and reviewing the output well enough to trust it.

That last part is the one people underestimate. Reviewing four parallel changes that all look reasonable, and catching the one that is subtly wrong, is hard, sustained work. The agents generate plausibility cheaply. Judgment about whether the plausible thing is actually correct, and actually the right thing to do, stays expensive. It stays human.

## Taste becomes the differentiator

When building gets cheap, the value concentrates in the decisions building cannot make for you. Which problem to solve. Where the architecture should bend and where it must not. What "good" feels like for this product, this user, this moment. That is taste, and taste is built from having seen a lot of things work and fail and from caring about the difference.

I find this clarifying rather than threatening. The parts of the work I always thought were the real job, the framing, the tradeoffs, the calls that do not have a clean right answer, are exactly the parts that do not delegate to an agent. The parts I was happy to hand off, the boilerplate and the mechanical translation of a clear intent into code, are the parts that do.

## What this means for how teams get shaped

I think this reshapes teams more than it shrinks them. A person who can specify clearly, review critically, and integrate the pieces into something coherent can now direct a lot of parallel output. That looks less like a team of people each typing code and more like a smaller group of people each running a fleet of agents, spending their hours on the judgment-heavy edges.

The business consequence is leverage, and it is large. The same output that used to require a squad can now come from a few people who direct well, which changes the math on what a team of a given size can deliver. I have seen both ends of this. I have run 24 engineers, and I have also, alone, shipped products that reached 20,000+ users by leaning on exactly this pattern. The lever is not "fewer people doing the same thing." It is the same people, or fewer, carrying far more scope, with the constraint pushed up to how good their judgment is. Output gets cheap. Judgment becomes the thing you are actually paying for, and the thing worth hiring for.

The skills that rise in value are the ones that were always the hard part of leadership: writing down what you actually mean, knowing what good looks like, and being willing to make the call. The skills that fall are the ones tied purely to throughput. I would rather hire one engineer with sharp judgment who can run a fleet than five who can only produce volume, and that preference is getting stronger by the month. It is a good time to have taste.
