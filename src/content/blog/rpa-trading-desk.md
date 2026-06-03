---
title: "From 5 Hours to Zero: Automating a Trading Desk's Post-Market Operations"
description: "Python-based automation that eliminated 5+ hours of daily manual work for a 5-person team. The evolution from VBA to full ETL pipelines."
pubDate: 2016-01-01
tag: "Automation"
subtitle: "The evolution from VBA macros to full Python automation that transformed a trading desk into a BI team."
links:
  - label: "View source on GitHub"
    href: "https://github.com/fcucullu/RPA"
    external: true
  - label: "View project details"
    href: "/work/robotic-process-automation"
    external: false
---

## The Problem

Every day after market close, the 5-person trading desk at IOL entered a painful routine. Each team member spent roughly an hour manually checking balances, verifying operations, and reconciling data across multiple disconnected systems. That is 5+ hours of skilled human time burned daily on tasks that were repetitive, error-prone, and utterly mechanical.

The traders were not doing analysis. They were not finding opportunities. They were copying numbers between spreadsheets, cross-referencing reports, and hunting for discrepancies. The real cost was not just the hours lost. It was the opportunity cost of a talented team stuck doing data entry.

## The Solution

The automation happened in three phases, each building on the last.

**Phase 1: VBA Macros.** I started where the pain was most obvious. Excel and Access held most of the data, so I wrote VBA macros to automate the repetitive data processing tasks. This was the quick win that bought credibility for larger changes.

**Phase 2: Python ETL.** VBA had limits. I migrated the core logic to Python, combining multiple data sources with scrapers and scheduled jobs. This allowed me to pull data from systems that Excel could never reach and transform it in ways that VBA could not handle.

**Phase 3: Full Automation.** The final step was an end-to-end pipeline that covered navigation, extraction, transformation, export, and scheduling. No human intervention required. The system ran after market close and produced reconciled, verified results automatically.

## The Impact

Post-market administrative time dropped to zero. Five people got an hour of their day back, every single day. But the bigger impact was what happened next: with the operational burden gone, the team was free to do higher-value work.

That freed capacity became the foundation for a new Business Intelligence function. The trading desk evolved from an operations team into an analytics team. I eventually led this newly formed BI unit, which was created directly because the automation made it possible.

This project taught me a lesson I have carried through every role since: automate the drudge work first, and the team will naturally move toward more valuable contributions.

## Technical Details

- **Phase 1:** VBA macros for Excel/Access data processing
- **Phase 2:** Python ETL combining scrapers and scheduled jobs
- **Phase 3:** End-to-end pipeline (navigation, extraction, transformation, export, scheduling)
- **Result:** Zero manual post-market work for a 5-person team
