---
title: "FX Arbitrage Engine"
publishDate: 2019-12-01 00:00:00
img: /assets/stock-2.jpg
img_alt: Trading dashboard
description: |
  Production automated trading system at Argentina's largest retail broker (IOL). Multi-threaded Python engine exploiting FX pricing inefficiencies. Led to promotion to Head of BI.
tags:
  - Python
  - WebSockets
  - Multi-threading
  - Real-time Systems
---

## Business Case

The Argentine FX market had persistent pricing inefficiencies due to rapid regulatory changes. Traders were manually executing spread arbitrage but couldn't keep up with daily policy shifts. I built a multi-threaded Python system that automated the entire process.

## Impact

- **Automated the entire trading desk workflow** for FX operations
- **Captured spreads that manual traders consistently missed** due to reaction time limitations
- **Managed institutional capital** for the company's own portfolio
- **Led to my promotion** from trader to trading desk leadership, then to Head of Business Intelligence
- **Team:** Led a team of 4 at IOL

## Technical Details

- Multi-threaded execution using Python multiprocessing (Pools, Queues, Locks)
- Real-time price monitoring via WebSocket feeds and broker APIs
- Automated round-trip trade execution when spreads exceeded thresholds
- Tkinter GUI for manual overrides by the trading desk
- Mobile push notifications for critical alerts

[View source code on GitHub →](https://github.com/fcucullu/trading-fx)
