---
layout: page
title: Open-source
permalink: /open-source/
---
## Production Cloud Server
The Production Cloud Server hosts all the manufacturing files needed to integrate a design into a digital automated production line. The production line is seen as a list of IOT CNC machines each with its own client. The server feeds g-code files to this remote machines allowing them to work together in the same design.

#### Cloud
The Cloud part of the servers lets the users share their products and IOT CNC machines. This allows the production line to be extend seamlessly into other workshops or some student's garage near you.

#### Machine client
The client can be understood as a g-code file queue container installed on a local machine that can perform certain tasks from the production server:
 - Live CNC control and g-code previsualization with Tiny-G and GRBL controlled machines with Chilipeppr (only on localhost network)
 - Remote USB emulator for non compatible machines (client must be installed on rpi-zero)
 - USB hub for file transfer (all g-code files in queue are copied to an external USB when inserted into the host computer)

## Repositories

These are my public Repositories hosted on GitHub. They are also available on my GitHub profile [https://github.com/dfmdmx](https://github.com/dfmdmx).

<ul>
  {% for repository in site.github.public_repositories %}
    <li><a href="{{ repository.html_url }}">{{ repository.name }}</a><br>{{repository.description}}</li><br>
  {% endfor %}
</ul>
