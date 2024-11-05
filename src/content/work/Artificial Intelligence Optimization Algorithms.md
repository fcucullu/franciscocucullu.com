---
title: Artificial Intelligence Optimization Algorithms
publishDate: 2020-03-02 00:00:00
img: /assets/stock-1.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |
  I studied how to improve the optimization algorithms commonly used in the industry and showcased a new implementation.
tags:
  - Financial Engineering
  - Computer Science
  - AI
  - ML
---

<h4>Description</h4>
<p>The motivation for this work is based on the tendency to think that algorithmic trading problems focus solely on the development of trading strategies capable of consistently outperforming the market. There is extensive literature studying various methods or techniques to achieve this, particularly those related to high-frequency trading techniques. However, real models involve many other factors besides the strategy itself, and neglecting their proper parameterization ultimately affects the model's performance and computational resource consumption. Find the full implementation on my <a href="https://github.com/fcucullu/optimization_algorithms" target="_blank">GitHub repository</a>.</p>

<p>When trading in stock markets with algorithms that respond to quantitative conditions, particularly with machine learning techniques, it is common to have to adjust numerous variables to reach the configuration that optimizes returns, which may even change over time. It is also common for the closed-form expression of the objective function and its graphical behavior to be unknown, transforming these into "black box" problems. Without clues about the location of the global optimum, one often resorts to effective but mathematically and computationally inefficient optimization methods. If the model used needs to be recalibrated frequently, this inefficiency becomes operationally unacceptable. Therefore, Bayesian optimization will be used as an appropriate method according to the gathered literature, and variations in its parameterization will be analyzed.</p>
