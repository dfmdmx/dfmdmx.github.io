---
layout: page
title: Open-source
permalink: /open-source/
---

These are my public Repositories hosted on GitHub. They are also available on my GitHub profile [https://github.com/dfmdmx](https://github.com/dfmdmx).

## Repositories

<ul>
  {% for repository in site.github.public_repositories %}
    <li><a href="{{ repository.html_url }}">{{ repository.name }}</a><br>{{repository.description}}</li><br>
  {% endfor %}
</ul>
