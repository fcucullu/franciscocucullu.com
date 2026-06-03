---
title: "Building AI Before ChatGPT: Custom ML at a UNICEF-Backed Fintech"
description: "Neural networks, genetic algorithms, and Bayesian optimization built from scratch with a team of 5 PhDs. Before the LLM revolution."
pubDate: 2020-01-01
tag: "AI/ML"
subtitle: "When there were no shortcuts, we built neural networks, genetic algorithms, and optimization models from the ground up."
links:
  - label: "View source on GitHub"
    href: "https://github.com/fcucullu/AI-ML"
    external: true
  - label: "View project details"
    href: "/work/artificial-intelligence-and-machine-learning"
    external: false
---

## The Problem

At Xcapit, a fintech backed by UNICEF and the Ethereum Foundation, we were building algorithmic portfolio management and trading systems. Off-the-shelf ML libraries existed, but they did not give us the control we needed. Our strategies required custom mathematical implementations where we understood every parameter, every gradient, every decision the model made.

This was 2020. There was no ChatGPT to generate code. No Copilot to autocomplete functions. No foundation models to fine-tune. If you wanted a neural network that behaved a specific way, you wrote it yourself. Line by line.

## The Solution

I worked alongside a team of 5 PhDs in mathematics, physics, and computer science. Together, we built a custom AI/ML toolkit from scratch in Python. The goal was full transparency and control over every model powering our trading engine.

We built custom genetic algorithms for combinatorial optimization, finding the best portfolio compositions across thousands of possible configurations. We implemented hyperparameter tuning strategies that went beyond grid search, using Bayesian methods to explore the search space efficiently. We wrote Monte Carlo simulations and stochastic calculus models for risk assessment. We trained LSTM networks for time-series price forecasting.

Every module was purpose-built. The genetic algorithm was not a library call. It was our own implementation, tuned to our specific optimization landscape. The validation framework was designed for financial data, where naive cross-validation leads to look-ahead bias and false confidence.

## The Impact

These custom models powered the trading engine that achieved over 400% annual returns on a $2M portfolio. The work attracted press coverage from major outlets and validated the investment from UNICEF and the Ethereum Foundation.

More importantly, building from scratch gave us something that library users never get: deep understanding. When a model behaved unexpectedly, we could trace the issue to a specific mathematical assumption. When the market regime changed, we knew exactly which parameters to adjust and why.

Working with PhDs also shaped how I think about technical teams. The best AI work happens when domain expertise meets engineering discipline, and when the team has the patience to build things properly rather than just calling an API.

## Technical Details

- **GeneticAlgorithm.py:** Custom genetic algorithm for combinatorial optimization
- **ModelOptimization.py:** Hyperparameter tuning strategies
- **ModelValidation.py:** Robust cross-validation designed for financial data
- **simulations.py:** Monte Carlo simulations and stochastic calculus
- **LSTM models:** Time-series prediction for price forecasting
- **Stack:** Python, TensorFlow, NumPy, custom implementations
