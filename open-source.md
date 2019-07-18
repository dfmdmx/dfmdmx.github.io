---
layout: page
title: Open-source
permalink: /open-source/
---
Parametric design often involves integrating thousand of different parts together into a single design. This is why working in an automated environment becomes a fundamental part in the digital manufacturing process. Most of my workshop development software its focused on solving this problem. The current solution is a cloud hosting file server with the ability to remotely control CNC machines. These CNC machines are shared among users and users have the ability to share their production files as well.

Some of the advantages for these approach are:
 - Parallel batch production between multiple coordinated machines.
 - Multiple users sharing the same machine.
 - Community based production.

The Production Cloud Server has become the basis for manufacturing almost all of my current projects. Apart from been a practical tool it has allowed me to focus on the development of form finding algorithms that could integrate into this production model.

# Production Cloud Server
The Production Cloud Server hosts all the manufacturing files needed to integrate a design into a digital automated production line. The production line is seen as a list of IOT CNC machines each with its own client. The server feeds g-code files to this remote machines allowing them to work together in the same design.

### Cloud
The Cloud part of the servers lets the users share their products and IOT CNC machines. This allows the production line to be extend seamlessly into other workshops or some student's garage near you.

### Machine client
The client can be understood as a g-code file queue container installed on a local machine that can perform certain tasks remotely from the production server, such as:
 - Live CNC control and g-code previsualization with Tiny-G and GRBL controlled machines with Chilipeppr (only on localhost network)
 - Remote USB emulator for non compatible machines (client must be installed on rpi-zero)
 - USB hub for file transfer (all g-code files in queue are copied to an external USB when inserted into the host computer)

# Repositories

These are my public Repositories hosted on GitHub. They are also available on my GitHub profile [https://github.com/dfmdmx](https://github.com/dfmdmx).

<ul>
  {% for repository in site.github.public_repositories %}
    <li><a href="{{ repository.html_url }}">{{ repository.name }}</a><br>{{repository.description}}</li><br>
  {% endfor %}
</ul>
