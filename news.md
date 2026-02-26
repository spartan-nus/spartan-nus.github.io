---
layout: default
title: News & Events
permalink: /news/
---

<h2 style="text-align: center; margin-bottom: 2rem;">Events</h2>

<div class="news-grid">
{% for event in site.data.events %}
  <div class="news-card">
    <div class="news-date">{{ event.date }}</div>
    <h3>{{ event.title }}</h3>
    <p>{{ event.description }}</p>
    {% if event.link %}
    <a href="{{ event.link }}" class="learn-more">Learn more →</a>
    {% endif %}
  </div>
{% endfor %}
</div>

<h2 style="text-align: center; margin-bottom: 2rem; margin-top: 3rem;">Recent News</h2>

<div class="news-grid">
{% for item in site.data.news %}
  <div class="news-card">
    <div class="news-date">{{ item.date }}</div>
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
    {% if item.link %}
    <a href="{{ item.link }}" class="learn-more">Learn more →</a>
    {% endif %}
  </div>
{% endfor %}
</div>

<style>
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.news-card {
  background: white;
  border-top: 4px solid #EF7C00;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: box-shadow 0.2s;
}

.news-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.news-date {
  color: #586069;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.news-card h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: #003D7C;
}

.news-card p {
  margin-bottom: 1rem;
  color: #555;
}

.learn-more {
  display: inline-flex;
  align-items: center;
  color: #EF7C00;
  font-weight: 500;
  text-decoration: none;
}

.learn-more:hover {
  color: #003D7C;
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
