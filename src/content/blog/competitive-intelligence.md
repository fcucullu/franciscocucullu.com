---
title: "21 Scrapers, 20% Market Share: Building a Competitive Intelligence Engine"
description: "How I built 21 real-time scrapers (including mobile app emulators) to monitor every competitor in the Argentine FX market."
pubDate: 2017-01-01
tag: "Data Engineering"
subtitle: "How real-time competitive pricing data powered a market capture strategy at Argentina's largest retail broker."
links:
  - label: "View source on GitHub"
    href: "https://github.com/fcucullu/scrapers-webdrivers"
    external: true
  - label: "View project details"
    href: "/work/web-scrapers-and-app-webdrivers"
    external: false
---

## The Problem

Marketing was running a campaign promising customers "the best FX price in the market." There was just one problem: nobody could verify that claim. The company had no systematic way to monitor competitor pricing in real time. C-level executives came to me with a clear mandate: prove we have the best price, or tell us when we do not.

The Argentine FX market had dozens of competitors, each publishing prices through different channels. Some had websites. Some had mobile apps only. Some changed their pricing pages frequently. There was no API, no data feed, no shortcut. If we wanted 100% coverage, we had to go get the data ourselves.

## The Solution

I designed, built, and maintained 21 individual scrapers covering every single competitor in the market. Each scraper was tailored to its target: some used BeautifulSoup for straightforward HTML parsing, others required Selenium for JavaScript-heavy sites.

The hardest part was the two competitors that had no public website at all. Their prices were only visible inside their mobile apps. For those, I built mobile device emulators that could navigate the app interfaces and extract pricing data programmatically. This was the only way to achieve true 100% market coverage.

All pricing data fed into a Flask monitoring dashboard where the pricing team could see the entire market at a glance. The system ran on scheduled automation, continuously collecting and comparing prices across every competitor.

## The Impact

With complete market visibility, the pricing team could make data-driven decisions for the first time. When we were not the cheapest, the team knew immediately and could adjust. When we were, marketing had the data to back up the claim.

The result: the company captured 20% of the target market segment. The competitive intelligence system turned pricing from a guessing game into a strategic advantage. This was a solo project from start to finish. I designed the architecture, built every scraper, maintained the dashboard, and kept the system running as competitors changed their sites.

## Technical Details

- **Stack:** Python, Selenium, BeautifulSoup
- **Coverage:** 21 scrapers monitoring 100% of competitors
- **Mobile:** Device emulation for 2 app-only competitors
- **Dashboard:** Flask web interface for the pricing team
- **Scheduling:** Automated continuous monitoring
