---
title: "400% Returns: How Bayesian Optimization Tuned Our Trading Strategies"
description: "Gaussian Process-based hyperparameter optimization for algorithmic trading. Featured in Cronista and CriptoNoticias."
pubDate: 2020-01-01
tag: "Quantitative Finance"
subtitle: "Using Gaussian Processes to efficiently search hyperparameter space for algorithmic trading strategies."
links:
  - label: "View source on GitHub"
    href: "https://github.com/fcucullu/optimization_algorithms"
    external: true
  - label: "View project details"
    href: "/work/artificial-intelligence-optimization-algorithms"
    external: false
---

## The Problem

Algorithmic trading strategies have dozens of hyperparameters. Window sizes, thresholds, signal weights, rebalancing intervals. Each combination produces different returns, different risk profiles, different drawdowns. Finding the optimal configuration is not trivial.

The naive approach is grid search: try every combination. But with 10 parameters and 10 values each, that is 10 billion evaluations. Each evaluation requires running a full backtest. Grid search does not scale. Random search is better but still wasteful. We needed a method that was intelligent about which configurations to try next.

At Xcapit, we were managing a $2M portfolio. The difference between a good configuration and a great one was real money. We could not afford to leave performance on the table because our optimization method was too slow or too crude.

## The Solution

I applied Bayesian optimization using Gaussian Processes to efficiently search the hyperparameter space. The core idea: instead of blindly trying configurations, build a probabilistic model of the objective function and use it to decide where to look next.

A Gaussian Process models the expected return (and uncertainty) for any untested configuration. An acquisition function then balances exploration (trying uncertain regions) with exploitation (refining known good regions). Each iteration, the optimizer picks the single most informative configuration to evaluate, runs the backtest, updates the model, and repeats.

We tested this across multiple strategies: VWAP vs SMA, Three Standard Moving Average, Chandelier Exit, and Bollinger Bands Volume. Each strategy had its own hyperparameter landscape, and the Bayesian approach adapted to each one.

## The Impact

The optimized strategies contributed to over 400% annual returns on the portfolio. The approach found near-optimal configurations in far fewer evaluations than grid or random search would have required, saving significant computational time and allowing us to iterate on strategies faster.

The results attracted press coverage. [Cronista](https://www.cronista.com/infotechnology/finanzas-digitales/la-unica-inversion-que-hoy-paga-400-en-dolares-sin-riesgo-argentino-ni-impuestos/) and [CriptoNoticias](https://www.criptonoticias.com/comunidad/ceo-xcapit-defi-democraticas-porque-barreras-mas-bajas/) both featured the platform, highlighting the returns and the technology behind them.

Beyond the numbers, the real value was in making the "black box" problem tractable. Algorithmic strategies are only as good as their configuration. Bayesian optimization gave us a principled, efficient way to find the best settings without exhaustive search.

## Technical Details

- **Method:** Bayesian optimization with Gaussian Process surrogate models
- **Acquisition function:** Expected Improvement for exploration/exploitation balance
- **Strategies tested:** VWAP vs SMA, Three Standard Moving Average, Chandelier Exit, Bollinger Bands Volume
- **Stack:** Python, custom implementation
- **Team:** Part of the 5-PhD team at Xcapit
