---
layout: page
title: Open-source
permalink: /open-source/
---
Most of my workshop development software is focused on the automation part of the manufacturing process. The current working solution is a cloud hosting file server with the ability to remotely control CNC machines. These CNC machines are shared among users who have the ability to share their production files as well.

Some of the advantages for this approach are:
 - Parallel batch production between multiple coordinated machines
 - Multiple users sharing the same machine
 - Community based production

The Production Cloud Server has become the basis for manufacturing almost all of my current projects. Apart from been a practical tool it has allowed me to focus on the development of form finding algorithms and paneling solutions that take advantage of this production model.

{% include index-headers.html %}

![Production Cloud Server](https://raw.githubusercontent.com/dfmdmx/dfmdmx.github.io/master/assets/images/production_cloud_server_concept.png)

## Production Cloud Server
The Production Cloud Server hosts all the manufacturing files needed to integrate a design into a digital automated production line. The production line is seen as a list of IOT CNC machines each with its own client. The server feeds g-code files to these remote machines allowing them to work together in the same design.

### Cloud
The Cloud part of the server enables the users to share their products and IOT CNC machines. This allows the production line to be extended seamlessly into other workshops or some student's garage near you.

### Machine client
The client can be understood as a g-code file queue container installed on a local machine that can perform certain tasks remotely from the production server, such as:
 - Live CNC control and g-code previsualization with [Tiny-G](https://github.com/synthetos/TinyG) and [GRBL](https://github.com/grbl/grbl) controlled machines with [Chilipeppr](http://chilipeppr.com/).
 - Remote USB emulator for non compatible machines (client must be installed on [rpi zero](https://www.raspberrypi.org/products/raspberry-pi-zero-w/))
 - USB hub for file transfer (all g-code files in queue are copied to an external USB when inserted into the host computer)

The machine client installation file is available at the [Software Downloads](/open-source/#software-downloads) section.

## Software downloads
These are my public repositories hosted on GitHub. They are also available on my GitHub profile [https://github.com/dfmdmx](https://github.com/dfmdmx).

{% include index-repositories.html %}

### Development team
The software was created and its currently maintained by Daniel Fernández and Saúl Pilatowsky.
