---
layout: page
title: Open-source
permalink: /open-source/
---

You can visit **dfmdmx** for contact information and proyects at [https://dfmdmx.github.io](https://dfmdmx.github.io) or go to directly to my github [https://github.com/dfmdmx](https://github.com/dfmdmx).

## Repositories

<ul>
  {% for repository in site.github.public_repositories %}
    <li><a href="{{ repository.html_url }}">{{ repository.full_name }}</a></li>
  {% endfor %}
</ul>
