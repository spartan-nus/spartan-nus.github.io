---
layout: default
title: News & Events
permalink: /news/
---

## Events

{% for event in site.data.events %}
- **{{ event.date }}**: {{ event.title }} - {{ event.description }}{% if event.link %} [[Learn more]({{ event.link }})]{% endif %}
{% endfor %}

## Recent News

{% for item in site.data.news %}
- **{{ item.date }}**: {{ item.title }} - {{ item.description }}{% if item.link %} [[Learn more]({{ item.link }})]{% endif %}
{% endfor %}
