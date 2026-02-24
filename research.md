---
layout: default
title: Upcoming Efforts
permalink: /research/
---

<h2 style="text-align: center; margin-bottom: 2rem;">Research Projects</h2>

<div class="research-grid" markdown="1">

<div class="research-card" markdown="1">

### AutoCodeRover, AI Agent for Software

Being integrated in Production with SonarQube Static Analyzer

[Learn more →](https://autocoderover.dev){:.learn-more}

</div>

<div class="research-card" markdown="1">

### AI for Program Reasoning

Funded under NRF AI for Science call, starting July 2026

[Learn more →](https://ai-4-pr.github.io/){:.learn-more}

</div>

<div class="research-card" markdown="1">

### Agentic Programming with Trust

Opinion Piece, in Communications of the ACM, May 2026

[Learn more →](https://arxiv.org/pdf/2502.13767){:.learn-more}

</div>

<div class="research-card" markdown="1">

### AI for Open Source Security

Collaboration with Google OSS team

[Learn more →](/coderover-s.html){:.learn-more}

</div>

<div class="research-card" markdown="1">

### Accurate Table Question Answering

Table Question Answering (TQA) is a task that aims to provide accurate answers to natural language questions based on the content of a given (database) table

[Learn more →](https://www.comp.nus.edu.sg/~xiaoxk/projects/tqa/tqa_project.html){:.learn-more}

</div>

<div class="research-card" markdown="1">

### Fine tuning LLMs on sensitive data

Use of differential privacy while finetuning LLMs

[Learn more →](https://www.comp.nus.edu.sg/~xiaoxk/projects/dpzo/dpzo.html){:.learn-more}

</div>

<div class="research-card" markdown="1">

### Explainable AI Agents

An agent which is more trustworthy since it can explain its actions

[Learn more →](https://www.arxiv.org/abs/2507.22414){:.learn-more}

</div>

</div>

<style>
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.research-card {
  background: white;
  border-top: 4px solid #EF7C00;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: box-shadow 0.2s;
}

.research-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.research-card h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: #003D7C;
}

.research-card p {
  margin-bottom: 1rem;
  color: #555;
}

.learn-more {
  display: inline-flex;
  align-items: center;
  color: #EF7C00;
  font-weight: 500;
}

.learn-more:hover {
  color: #003D7C;
}

@media (max-width: 768px) {
  .research-grid {
    grid-template-columns: 1fr;
  }
}
</style>
