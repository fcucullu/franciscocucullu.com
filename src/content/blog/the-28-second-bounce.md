---
title: "The 28-Second Bounce"
description: "A new user signed up, opened the app, and left 28 seconds later without adding a single contact. Here's why I instrumented the funnel before touching the redesign — and what I shipped."
pubDate: 2026-06-10
tag: "Product Management"
subtitle: "When a user bounces in 28 seconds, the tempting move is to redesign the onboarding. The disciplined move is to build the ruler first."
links:
  - label: "More writing"
    href: "/blog"
    external: false
  - label: "See my apps"
    href: "/apps"
    external: false
---

A new user signed up for one of my apps, opened it, and left 28 seconds later — without adding a single contact.

No bug. No crash. Login worked perfectly. She authenticated through email OTP, landed on the home screen, and bounced. I know it was 28 seconds because the gap between her account being created and her last session was exactly that: 28 seconds, zero rows written to any table. She reached the door and turned around.

The tempting move is to redesign the onboarding immediately. I didn't — and that restraint is the actual point of this post.

## Why I didn't touch the redesign first

If you redesign before you measure, you can never prove the new version worked. You have no baseline to compare against. You'll ship something, the numbers will wobble for unrelated reasons, and you'll be left telling yourself a story about why it helped.

So the first thing I shipped wasn't the fix. It was the ruler.

## Implementation: an activation funnel, tagged by intent

I instrumented the activation funnel — every step from *opened the app* → *viewed the add-contact screen* → *opened the phone-contacts import* → *added a first contact* → *logged a first interaction*.

One design decision did most of the work: **I tagged events by intent, not by screen.** An event called `add_contact_screen_v2_mounted` dies the moment you redesign that screen. An event called `add_contact_viewed` survives any redesign, because it describes a stage in the user's journey, not a pixel arrangement. That's what keeps a before/after comparison valid across the very redesign you're about to do.

Mechanically it's small: one table with a `unique(user_id, event)` constraint so each user records each stage exactly once, a fire-and-forget logging helper that never blocks the UI or throws, and a daily report that prints the funnel shape — how many users reach each stage, with the conversion from "reached the app" to "added a first contact" spelled out as a single percentage. A day of data tells me precisely where the wall is.

## What the data pointed to, and the fix

The drop-off was exactly where you'd guess but couldn't previously prove: users reach the app and never get past the blank empty state. A blank page asking you to fill a form is a wall, especially in the first 30 seconds.

So the redesign wrote itself. Instead of dropping a new user into an empty form, the first screen now offers to import straight from their phone contacts — pick the handful of people you don't want to lose touch with, two taps each, and the list populates instantly. No blank page, no data entry.

A couple of honest constraints shaped it:

- I wanted to suggest the user's *most-contacted* people first. The cross-platform contacts API doesn't expose usage frequency, so ranking "most used" would have meant inventing an order. Instead I built a searchable multi-select and let the user choose who matters — which is better anyway, because they know and I'm guessing.
- The import is capped at the free-plan limit, so a brand-new user can never get shoved into a paywall mid-onboarding. New contacts default to a sensible group and a weekly check-in cadence, so there are zero required decisions.

It shipped over-the-air the same day — no app-store review, no waiting. Existing users get it on next launch.

## What I learnt

- **Measure before you redesign.** The baseline isn't bureaucracy; it's the only thing that lets you know whether your change was a fix or a coincidence.
- **Instrument by intent, not by screen,** so your analytics survive the redesign they're meant to evaluate.
- **State your constraints honestly.** "We can't rank most-used contacts" led to a better feature than pretending we could.
- **Reversibility is speed.** Shipping the instrumentation and the fix over-the-air, separately, meant I could move in hours instead of release cycles.

## Expected results

The hypothesis is simple: the conversion from *reached the app* to *added a first contact* should rise meaningfully, because the highest-friction moment — a blank page asking for manual input — is gone. I'm also now tracking whether users grant or deny the contacts permission, so if the permission prompt itself becomes the new friction point, the funnel will tell me, and that's the next thing to fix.

I don't know the number yet. That's the entire reason the ruler went in first. In a few days the funnel will say whether this worked — and if it didn't, it'll say where it broke instead.

The lesson I keep relearning as a builder: speed isn't shipping features fast. It's measuring the right thing before you change it.
