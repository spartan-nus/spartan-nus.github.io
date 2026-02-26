---
layout: default
title: News & Events
permalink: /news/
---

## Events

{% for event in site.data.events %}
<div class="card">
  <div class="card-header">
    <span class="date">{{ event.date }}</span>
    <h3>{{ event.title }}</h3>
  </div>
  <div class="card-content" markdown="1">
{{ event.description }}

{% if event.link %}[Learn more →]({{ event.link }}){:.learn-more}{% endif %}
  </div>
</div>
{% endfor %}

## Latest News

<div class="news-grid">
{% for item in site.data.news %}
  <div class="card">
    <div class="card-header">
      <span class="date">{{ item.date }}</span>
      <h3>{{ item.title }}</h3>
    </div>
    <div class="card-content" markdown="1">
{{ item.description }}

{% if item.link %}[Learn more →]({{ item.link }}){:.learn-more}{% endif %}
    </div>
  </div>
{% endfor %}
</div>

<style>
.card {
  background: white;
  border-left: 4px solid #EF7C00;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
  padding: 1.5rem 1.5rem 0.5rem;
}

.card-header .date {
  color: #EF7C00;
  font-size: 0.875rem;
  font-weight: 600;
}

.card-header h3 {
  margin: 0.5rem 0 0;
  font-size: 1.25rem;
  color: #003D7C;
}

.card-content {
  padding: 0 1.5rem 1.5rem;
}

.card-content p {
  margin-bottom: 1rem;
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

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
