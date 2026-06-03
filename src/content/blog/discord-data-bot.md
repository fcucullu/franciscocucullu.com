---
title: "Reducing Data Requests to Zero: Building a Self-Serve Analytics Bot"
description: "Discord bot that democratized data access across the company. Eliminated 100% of ad-hoc data requests."
pubDate: 2020-01-01
tag: "Data Engineering"
subtitle: "How I eliminated every ad-hoc data request at Xcapit by making data self-serve through Discord."
links:
  - label: "View source on GitHub"
    href: "https://github.com/fcucullu/discord_bot"
    external: true
  - label: "View project details"
    href: "/work/discord-data-bot"
    external: false
---

## The Problem

As the data lead at Xcapit, I was the bottleneck for every data question in the company. Product managers needed user metrics. Marketing needed campaign numbers. Operations needed portfolio stats. Investors needed performance reports. Every request landed on my desk.

The interruptions were constant and unpredictable. I would be deep in an ML model implementation when a Slack message would pull me into a 30-minute detour to write a query, format the results, and explain the numbers. Multiply that by five or six requests a day, and my productive time for actual data science work shrank to almost nothing.

The problem was not that people wanted data. That was healthy. The problem was that I was the only way to get it. Every question had to go through a human gatekeeper, which created delays for the requesters and destroyed focus time for me.

## The Solution

I built a Discord bot that let anyone in the company query data directly. Team members sent natural language commands in Discord. The bot interpreted the request, queried the database, formatted the response, and returned structured data instantly. No waiting. No interruptions. Available 24/7.

The design was intentionally simple. I did not build a complex analytics dashboard that would require training. Discord was where the team already communicated, so the data came to them in a tool they already used every day. The commands were intuitive enough that no documentation was needed after a brief introduction.

The bot covered the most common request types: user counts, portfolio performance, transaction volumes, conversion metrics. For anything truly novel, people could still come to me, but those cases became rare once the standard queries were self-serve.

## The Impact

Ad-hoc data requests to me dropped to zero. Not reduced. Eliminated. Every department in the company, from product to marketing to operations, could access the data they needed without waiting for anyone.

The transparency effect was unexpected but powerful. When everyone can see the same numbers at any time, conversations change. Meetings became data-informed by default because pulling up a metric took seconds, not a support ticket. Decisions moved faster because the data was already there.

For me personally, the bot freed my entire schedule from ad-hoc query work. I redirected that time into building the ML models and optimization algorithms that were the core of Xcapit's product. The bot was a productivity multiplier for the whole organization, but especially for the data team of one.

## Technical Details

- **Stack:** Python, Discord API
- **Interface:** Natural language commands in Discord channels
- **Coverage:** User metrics, portfolio performance, transactions, conversions
- **Availability:** 24/7 self-serve access for the entire company
