---
title: "Laplace - Graph enhanced recommendation engine"
date: "2022-07-01"
github_link: "https://github.com/applied-exploration/laplace-gnn-recommendation"
description: "Large scale recommendation leveraging Graph Neural Networks."
---

# Laplace - Recommendation Engine


## Overview

**laplace** is an end-to-end ML framework to train and predict on neurally-enhanced graphs for recommendation. 

The pipeline is designed for self-supervised edge prediction on heterogenous graphs. 

<br>

![Pipeline Overview](/docs/assets/pipeline_overview.png)

### Features

- Multi-step, hybrid recommendation pipeline:
  1. Candidate Selection:
     - Integrating LightGCN recommendations (can be ran on its own aswell)
     - Multiple, custom heuristics
     - Strategies can be mixed and matched
  2. Ranking: GraphConvolutional network prediction on candidate edges
- Works on **Heterogenous** graphs
  - User based training, validation and test splitting
  - N-hop neighborhood aggregation
  - Node Features 
  - Works on any number of node types
- Advanced preprocessing of tabular data into graphs
  - **Neo4j** integration for better visualization and handling of large graphs.
 No newline at end of file
