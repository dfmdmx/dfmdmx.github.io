---
layout: page
title: Resume
---

### My professional experience and interests are mainly oriented in computed assisted form finding and automated machine manufacturing.

I studied Architecture and Urbanism in Mexico City and since early on in my career I have been fascinated with emergent systems and bottom-up design strategies and how to identify, study and replicate them.

I have been lucky to implement this approach professionally. First, in structural analysis, replicating biological systems such as the ones insects use to shape their exoskeleton in a way that make it stronger or more flexible. Second, in design theory, to code space-filling optimization algorithms that replicate the way some flower organelles organize their seeds to optimise the use of material on a CNC bed layout.

Most of my work has been around designing museography for interactive children's museums, and in the past years also manufacturing structures using digital fabrication techniques for museums, and other public spaces. Besides designing the product and the manufacturing process, I often design, code and build the automated machines that I use for production.

{% include index-headers.html %}

## My approach in design

![grasshopper analogy](https://lh3.googleusercontent.com/pw/ACtC-3fTgKfH2yBpq2KRtaDTZ9nWznMnozT3WIEusqMOFQmd4Th0KS52Apn_uIsBPOJpAUYs2kdL7lssToZTA34omnps-gIKAxWx3PMobD-9FyZDZKh1zcqkv5KtEhjYrvV6VflrONeayh_g22_Rau3oCcE2oQ=w1888-h397-no?authuser=1)

>Thinking about Architecture as some intrinsic or emergent system of nature allows us to reduce some of its properties into fundamental variables that can be understood through mathematical models. In this sense, architecture should be shaped alongside scientific knowledge. The scale we have reached as humanity and the amount of information we have gathered about ourselves and our surroundings allows us to use some of the most advanced problem solving techniques, such as genetic algorithms and neural networks into real practical design applications.  

### Form finding through generative design
I have worked designing and optimizing panelized structures through genetic algorithms. I think the valuable part in using this approach is that it can include a multitude of dimensions in the design process, in this case, a form finding algorithm. Sometimes this complexity resembles the way nature systems stabilize through time.

When combined together, these complex dimensions, namely strength, the use of materials and the manufacturing process, result in a nearly optimal solution, without the need to fully grasp the complexity of the whole system.  I usually work with Python and Rhino Grasshopper to model these geometrical algorithms.

### Automated machine manufacturing
Regarding hardware, I have worked with multi-axis CNCs, lathes and 3D printers. Since parametric manufacturing often involves thousands of different parts that need to be assembled together, I like to control my workshop machines, whenever possible, through a RPI, Arduino or a similar board. This allows me to handle multiple machines and manufacturing lines simultaneously and remotely in a single project.

I treat each production step as an independent IOT client that can be controlled and monitored in real time through the [Production Cloud Server](/projects/2019-07-21-production-cloud-server.html). This app, in simple words, is a g-code file hosting cloud server with a network of connected production machines that can be controlled through a node.js connection.

I developed this web-app from the bits and pieces of software that I wrote for some of my parametric projects. It has proven to be a very efficient tool. I was awarded in 2015 for this web-app with an entrepreneur seed investment prize, in Mexico City. This fund concluded in the creation of two manufacturing companies that run up till today.

This project is the platform of most of my software development implementations and it is now available as an open-source repository, always in the hope of been furthered developed by the community (more information about this is available in the [software section](/open-source/#software-downloads)).

I  mostly focus on designing efficient and low cost structural geometries by implementing heuristic optimization algorithms. I apply this kind of approach from small scale industrial design to lightweight parametric roofing and façade structures.

I like to think of this line of work as unique in the way it implements industrial manufacturing automation and parametric design. Somehow I think joining them together may be a way in which we let science permeate more honestly into our everyday design thinking and help future generations make efficient and smart choices regarding the way we use our planet resources.

## Starred projects

The publications in this list are in English or Spanish according to the specificity and needs of each presented project. They are listed with no specific order. These publications aim to show my work in different stages of the manufacturing process. A complete chronological list is available at the [projects section](/projects).

{% include index-projects.html starred=true %}

## CV | Español

{% include cv.md %}
