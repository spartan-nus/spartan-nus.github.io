---
layout: default
title: News & Events
permalink: /news/
---

<div class="container">
  <h2 class="section-title">Events</h2>

  <div class="news-grid" style="margin-bottom: 4rem;">
    {% for event in site.data.events %}
    <div class="card">
      <div class="card-header">
        <span class="date">{{ event.date }}</span>
        <h3>{{ event.title }}</h3>
      </div>
      <div class="card-content">
        <p>{{ event.description }}</p>
        {% if event.link %}
        <a href="{{ event.link }}" class="learn-more" target="_blank" rel="noopener noreferrer">Learn more →</a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>

  <h2 class="section-title">Latest News</h2>

  <div class="news-grid">
    {% for item in site.data.news %}
    <div class="card">
      <div class="card-header">
        <span class="date">{{ item.date }}</span>
        <h3>{{ item.title }}</h3>
      </div>
      <div class="card-content">
        <p>{{ item.description }}</p>
        {% if item.link %}
        <a href="{{ item.link }}" class="learn-more" target="_blank" rel="noopener noreferrer">Learn more →</a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #1f2937;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.card {
  background: white;
  border-left: 4px solid #EF7C00;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
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
  display: block;
  margin-bottom: 0.25rem;
}

.card-header h3 {
  margin: 0.5rem 0 0;
  font-size: 1.25rem;
  color: #003D7C;
  line-height: 1.4;
}

.card-content {
  padding: 1rem 1.5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-content p {
  margin: 0 0 1rem;
  color: #374151;
  line-height: 1.6;
  flex: 1;
}

.learn-more {
  display: inline-flex;
  align-items: center;
  color: #EF7C00;
  font-weight: 500;
  text-decoration: none;
  margin-top: auto;
  transition: color 0.2s;
}

.learn-more:hover {
  color: #003D7C;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
