---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: home
Title: dfmdmx
---

**dfmdmx** shares some of the tools derived from the solutions I had implemented in previous projects as standalone open-source programs. It also hosts my work as an Architect and some of my ideas on the way I approach design through coding.

>Thinking about Architecture as some intrinsic or emergent part of the universe allows us to reduce some of its properties into fundamental variables that can be understood through mathematics and then be shaped by the laws of science. The scale we have reach as humanity and the amount of information we have gathered about ourselves and our surroundings allows us to use some of the most advance problem solving techniques such as genetic algorithms and neural networks into real practical design applications.  

### Form finding through generative design
My work is mostly oriented in optimizing panelized structures through genetic algorithms. I think the valuable part in this approach is that it can take multiple dimensions into account such as strength, use of material and manufacturing process to output the most optimal solution. I usually work with Python and Rhino Grasshopper.

### Automated machine manufacturing
On the hardware side I work with multi-axis CNCs, lathes and 3D printers. I use RPI, Arduino or similar boards to interface with most of these machines through a serial USB connection.

All of these machines are now treated as independent IOT clients that can be controlled through the [Production Cloud Server](/open-source/#production-cloud-server). The machine client installation file is available at the [Software Downloads](/open-source/#software-downloads) section.

{% include index-projects.html %}
