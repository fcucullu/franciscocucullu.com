---
title: "Building an FX Arbitrage Engine: How I Automated a Trading Desk"
description: "Multi-threaded Python system that exploited FX pricing inefficiencies at Argentina's largest broker. Led to promotion to Head of BI."
pubDate: 2019-01-01
tag: "Algorithmic Trading"
subtitle: "A multi-threaded Python system that captured FX spreads faster than any human trader could."
links:
  - label: "View source on GitHub"
    href: "https://github.com/fcucullu/trading-fx"
    external: true
  - label: "View project details"
    href: "/work/automatic-fx-trading"
    external: false
---

## The Problem

The Argentine FX market is volatile by nature. Rapid regulatory changes create persistent pricing inefficiencies, and spreads open and close in seconds. At IOL, Argentina's largest retail broker, the trading desk was executing spread arbitrage manually. Traders watched screens, spotted opportunities, and clicked through trades as fast as they could.

But humans have limits. Reaction time, fatigue, the inability to monitor multiple feeds simultaneously. The desk was leaving money on the table every single day. Spreads that existed for seconds were gone before a trader could complete the round trip. The business needed a system that could watch everything at once and act instantly.

## The Solution

I built a multi-threaded Python engine that automated the entire FX arbitrage workflow. The system monitored real-time price feeds via WebSocket connections, identified spread opportunities the moment they appeared, and executed round-trip trades automatically when spreads exceeded configurable thresholds.

The architecture used Python's multiprocessing library with Pools, Queues, and Locks to handle concurrent price monitoring and trade execution without race conditions. A Tkinter GUI gave the trading desk manual override capabilities for edge cases, and mobile push notifications alerted the team to critical events.

The key insight was that this was not just a speed problem. It was a coverage problem. A human trader can watch two or three feeds. The system watched all of them, all the time, and never got tired.

## The Impact

The engine automated the entire trading desk workflow for FX operations. It captured spreads that manual traders consistently missed due to reaction time limitations and managed institutional capital for the company's own portfolio.

For my career, the impact was direct. Building this system led to my promotion from trader to trading desk leadership, and eventually to Head of Business Intelligence. I created the BI unit from scratch and led it as a new function within the company.

## Technical Details

- **Language:** Python with multiprocessing (Pools, Queues, Locks)
- **Data feeds:** Real-time WebSocket connections to broker APIs
- **Execution:** Automated round-trip trades when spreads exceeded thresholds
- **Interface:** Tkinter GUI for manual overrides by the trading desk
- **Alerts:** Mobile push notifications for critical events
