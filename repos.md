---
layout: page
title: Work
permalink: /work/
---

## Welcome to DFMDMX!

You can visit **dfmdmx** for contact information and proyects at [https://dfmdmx.github.io](https://dfmdmx.github.io) or go to directly to my github [https://github.com/dfmdmx](https://github.com/dfmdmx).

## Repositories

This is a list of my public repositories

<ul>
  {% for repository in site.github.public_repositories %}
    <li><a href="{{ repository.html_url }}">{{ repository.full_name }}</a></li>
  {% endfor %}
</ul>

```
{% raw %}
<ul>
  {% for repository in site.github.public_repositories %}
    <li><a href="{{ repository.html_url }}">{{ repository.full_name }}</a></li>
  {% endfor %}
</li>
{% endraw %}
```

