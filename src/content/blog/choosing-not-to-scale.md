---
title: "Choosing Not to Scale"
description: "The most underrated engineering decision is removing the reason you needed to scale in the first place, instead of adding infrastructure or spend. A note on solving by subtraction."
pubDate: 2026-06-01
tag: "Engineering Judgment"
subtitle: "The most underrated engineering decision is removing the reason you needed to scale, instead of buying your way past the limit."
links:
  - label: "More writing"
    href: "/blog"
    external: false
  - label: "About me"
    href: "/"
    external: false
---

## Scaling is the default answer, and that is the problem

When a system hits a wall, the instinct is almost always additive. Add a bigger instance, add a cache, add a queue, add a tier on the bill. Scaling feels like progress because it produces an artifact: a new component, a config change, a line item you can point to. And most engineering culture rewards that. Nobody gets praised for the queue they didn't add.

But a lot of scaling is just paying to keep a bad assumption alive. The wall you hit is often telling you something about your design, not about your traffic. The cheaper move, and frequently the better one, is to go back and remove the reason you were pushing against the limit at all. Solve by subtraction.

## A small example that taught me a lot

I run a handful of small apps. Different products, different users, but they share a backend platform to keep costs near zero and operations simple. At some point I hit a limit I had not designed around: the platform caps how many projects you can run per source repository on the free plan. I had been creating one project per app, all hanging off the same repo, and I ran out of slots.

The obvious fix was right there in the UI. Upgrade. Pay the monthly fee, get more project slots, move on. It would have taken two minutes and a credit card.

Instead I sat with the question for a bit. The limit was per repo, not per account. So the real constraint was not "too many apps," it was "too many apps tied to one repo." I restructured the work across separate repositories, so each cluster of apps lived under its own source and stayed comfortably inside the free allowance. A bit of plumbing, some deploy config to update, and the limit stopped being a limit. No upgrade, no recurring cost, and honestly a cleaner separation than what I had before.

The payoff was not dramatic, and that is the point. I avoided a monthly bill that would have recurred forever, and I avoided a paid tier I would then have to manage, justify at renewal, and eventually migrate off of. I also got a side benefit that outlasts the savings: a cleaner boundary between apps means a smaller blast radius when one breaks and one less shared surface to keep secure. Subtraction paid me twice, once in cost and once in things I no longer have to watch.

Small thing. But the shape of it shows up everywhere, just with more zeros on the invoice. I have made the same call where the zeros were real. Running enterprise AI on systems that handled more than 9 million interactions a day, the easy answer to a scaling wall was always more capacity and a bigger bill. The decisions that actually delivered millions in annual savings were usually the opposite move: finding the assumption that was generating the load and removing it, so the expensive infrastructure simply was not needed. Same instinct as the repo story, just with a finance team noticing the difference.

## Why subtraction compounds

When you scale to dodge a constraint, you usually take on a dependency. A paid tier you now have to keep paying. A cache you now have to invalidate correctly. A new service you now have to monitor, secure, and explain to the next person. Each of those is fine in isolation. The trouble is they stack. Six months later the system is more expensive and more complicated, and a chunk of that complexity is load-bearing only for a problem you could have removed.

Subtraction goes the other way. When you take out the reason for the pressure, you do not just avoid the cost this month. You avoid every downstream thing that cost would have grown into: the migration when you outgrow the tier, the on-call page when the cache misbehaves, the documentation nobody writes. Fewer dependencies compound, quietly, in your favor.

## The judgment call is knowing when not to

I want to be careful here, because "just don't scale" is bad advice taken literally. Sometimes the demand is real and growing, and the right answer is absolutely to add capacity and pay for it. Refusing to scale out of frugality when your users are hitting timeouts is not discipline, it is negligence.

The skill is in the diagnosis. Before you reach for more infrastructure or a bigger bill, it is worth asking a few honest questions. Is this load real and durable, or am I working around my own structure? Does the limit point at a design assumption I can change cheaply? If I remove the reason instead of raising the ceiling, what do I gain that I keep forever?

If the demand is genuine, scale, and do it well. But if the wall is really a design smell wearing a capacity costume, the strongest move is to make the wall irrelevant. That decision rarely produces an impressive artifact. There is no new diagram, no shiny component, just a problem that quietly stops existing. I have come to think that absence is one of the better things an engineer can build.
