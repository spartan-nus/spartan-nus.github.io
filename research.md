---
layout: default
title: Upcoming Efforts
permalink: /research/
---

<h2 style="text-align: center; margin-bottom: 2rem;">Research Projects</h2>

<div class="research-grid">
{% for project in site.data.research %}
  <div class="research-card" markdown="1">

### {{ project.title }}

{{ project.description }}

[Learn more →]({{ project.link }}){:.learn-more}

  </div>
{% endfor %}
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
