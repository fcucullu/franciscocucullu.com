---
title: "Bayesian Optimization for Trading"
publishDate: 2020-03-02 00:00:00
img: /assets/stock-1.jpg
img_alt: Optimization chart
description: |
  Gaussian Process-based Bayesian optimization for algorithmic trading strategies. Contributed to 400%+ annual returns at Xcapit. Featured in Cronista and CriptoNoticias.
tags:
  - Bayesian Optimization
  - Gaussian Processes
  - Python
  - Quantitative Finance
---

## Business Case

Algorithmic trading strategies have dozens of hyperparameters. Grid search is computationally expensive and doesn't scale. We needed a smarter approach to find optimal configurations for our portfolio management algorithms.

## Impact

- **Contributed to 400%+ annual returns** on a $2M portfolio
- **Featured in major press:** [Cronista](https://www.cronista.com/infotechnology/finanzas-digitales/la-unica-inversion-que-hoy-paga-400-en-dolares-sin-riesgo-argentino-ni-impuestos/) and [CriptoNoticias](https://www.criptonoticias.com/comunidad/ceo-xcapit-defi-democraticas-porque-barreras-mas-bajas/)
- **Near-optimal configurations in far fewer evaluations** than grid or random search
- **Team:** Part of the 5-PhD team at Xcapit

## Approach

Applied Bayesian optimization using Gaussian Processes to efficiently search the hyperparameter space. Tested multiple strategies including VWAP vs SMA, Three Standard Moving Average, Chandelier Exit, and Bollinger Bands Volume.

[View source code on GitHub →](https://github.com/fcucullu/optimization_algorithms)
