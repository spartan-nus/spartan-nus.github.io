---
layout: default
title: People
permalink: /people/
---

{% assign sections = "pi,collaborators,team,alumni" | split: "," %}
{% assign titles = "Principal Investigators & Professors,Collaborators,PhD Students & Postdoctoral Researchers,Graduating & Alumni" | split: "," %}

{% for section in sections %}
<h2 style="text-align: center; margin-bottom: 2rem;{% unless forloop.first %} margin-top: 3rem;{% endunless %}">{{ titles[forloop.index0] }}</h2>

<div class="people-grid">
{% for person in site.data.people[section] %}
  <div class="people-card">
    {% if person.image %}
    <img src="{{ person.image }}" alt="{{ person.name }}" class="people-photo">
    {% elsif person.initials %}
    <div class="people-photo people-initials">{{ person.initials }}</div>
    {% endif %}
    <h3><a href="{{ person.homepage }}">{{ person.name }}</a></h3>
    <p class="people-role">{{ person.role }}</p>
  </div>
{% endfor %}
</div>
{% endfor %}

<style>
.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.people-card {
  background: white;
  border-top: 4px solid #EF7C00;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: box-shadow 0.2s;
  text-align: center;
}

.people-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.people-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  display: block;
  border: 3px solid #f5f5f5;
}

.people-initials {
  background-color: #EF7C00;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.people-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: #003D7C;
}

.people-card h3 a {
  color: #003D7C;
  text-decoration: none;
}

.people-card h3 a:hover {
  color: #EF7C00;
}

.people-role {
  margin-bottom: 0;
  color: #586069;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .people-grid {
    grid-template-columns: 1fr;
  }
}
</style>
