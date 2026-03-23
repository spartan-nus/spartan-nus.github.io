---
layout: default
title: Publications
permalink: /publications/
---

<h2 style="text-align: center; margin-bottom: 2rem;">Publications</h2>

<div class="publications-list">
{% for pub in site.data.publications %}
  <div class="pub-entry">
    <span class="pub-venue">[{{ pub.venue }}]</span>
    <div class="pub-body">
      <div class="pub-title">
        {% if pub.link %}<a href="{{ pub.link }}" target="_blank">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}
      </div>
      <div class="pub-authors">{{ pub.authors }}</div>
      <div class="pub-where">{{ pub.where }}</div>
      {% if pub.note %}<div class="pub-note">{{ pub.note }}</div>{% endif %}
    </div>
  </div>
{% endfor %}
</div>

<style>
.publications-list {
  max-width: 860px;
  margin: 0 auto;
}

.pub-entry {
  display: flex;
  gap: 1.2rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e8e8e8;
}

.pub-entry:last-child {
  border-bottom: none;
}

.pub-venue {
  flex-shrink: 0;
  font-weight: 700;
  color: #EF7C00;
  font-size: 0.85rem;
  width: 80px;
  padding-top: 0.15rem;
}

.pub-title {
  font-weight: 600;
  font-size: 1.05rem;
  color: #003D7C;
  margin-bottom: 0.35rem;
}

.pub-title a {
  color: #003D7C;
  text-decoration: none;
}

.pub-title a:hover {
  color: #EF7C00;
  text-decoration: underline;
}

.pub-authors {
  color: #444;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.pub-where {
  color: #586069;
  font-size: 0.88rem;
  font-style: italic;
}

.pub-note {
  color: #888;
  font-size: 0.82rem;
  margin-top: 0.25rem;
}

@media (max-width: 600px) {
  .pub-entry {
    flex-direction: column;
    gap: 0.4rem;
  }
  .pub-venue {
    width: auto;
  }
}
</style>
