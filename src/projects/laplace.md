---
title: "Laplace - Recommendation engine"
date: "2022-07-01"
github_link: "https://github.com/dream-faster/laplace-gnn-recommendation"
description: "Large scale recommendation leveraging Graph Neural Networks."
tag: "neurosymbolic,graphs"
favorite: true
---

# Laplace - Recommendation Engine


## Overview

**laplace** is an end-to-end recommendation engine framework for large-scale graphs. 

The pipeline is designed for self-supervised edge prediction on heterogenous graphs. 

<br>

![Pipeline Overview](/assets/images/pipeline_overview.png)

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
