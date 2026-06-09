---
title: "AI Onboarding Agent: Automate Employee Onboarding"
publishDate: 2025-03-01 00:00:00
img: /assets/stock-3.jpg
img_alt: AI onboarding agent conversational interface for employee onboarding
description: "How I built an AI onboarding agent that automates employee onboarding end-to-end: new hires chat with a Claude-powered AI agent while HR tracks pipeline, progress, and at-risk hires in real time."
tags:
  - Claude API
  - Python
  - FastAPI
  - React
---

An **AI agent for employee onboarding** that automates the onboarding process end to end. New hires get instant, accurate answers to their day-one questions from a Claude-powered conversational AI agent, while HR and hiring managers track the entire pipeline in real time. I designed and built it solo on Claude API, FastAPI, Supabase, and React.

## Business Case

A client needed to automate the HR onboarding process for new employees. The goal: eliminate the administrative burden on HR teams and hiring managers while ensuring new hires get answers to their day-one questions instantly.

## Impact

- **Fully automated onboarding flow** from document collection to orientation
- **Reduced HR workload** by handling repetitive questions via AI agent
- **Real-time visibility** for hiring managers into onboarding progress
- **At-risk detection:** flags new hires falling behind in the process
- **WhatsApp-style chat interface** that new hires already know how to use

## Technical Architecture

- Claude API for multi-turn conversational AI with system prompt control
- FastAPI backend with Supabase (6 Postgres tables, RLS, audit logging)
- React frontend with real-time activity feed
- Conversation history persistence for context continuity

[Try the live product →](https://orbio.franciscocucullu.com) · [View source code on GitHub →](https://github.com/fcucullu/orbio-onboarding)
