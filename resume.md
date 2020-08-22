---
layout: page
title: Resume
---

### My professional interest and experience is mainly oriented in computed assisted form finding and automated machine manufacturing.

I studied Architecture and Urbanism in Mexico City and since early on in my career I have been fascinated with emergent systems and bottom-up design strategies and how to identify, study and replicate them.

I have been lucky to implement this approach professionally in both structural analysis replicating biological systems, such as the ones insects use to shape their exoskeleton in a way that make it stronger or more flexible, as in design theory to code space-filling optimization algorithms that replicate the way some flower organelles organize their seeds to optimice the use of material on a CNC bed layout.

Most of my work has been around designing museography for interactive children's museums and in the past years also manufacturing them using digital fabrication techniques. Besides designing the product and the manufacturing process I often design, code and build the automated machines I use for production.

{% include index-headers.html %}

## Design thinking

![grasshopper analogy](https://lh3.googleusercontent.com/pw/ACtC-3fTgKfH2yBpq2KRtaDTZ9nWznMnozT3WIEusqMOFQmd4Th0KS52Apn_uIsBPOJpAUYs2kdL7lssToZTA34omnps-gIKAxWx3PMobD-9FyZDZKh1zcqkv5KtEhjYrvV6VflrONeayh_g22_Rau3oCcE2oQ=w1888-h397-no?authuser=1)

>Thinking about Architecture as some intrinsic or emergent part of the universe allows us to reduce some of its properties into fundamental variables that can be understood through mathematics and then be shaped by the laws of science. The scale we have reach as humanity and the amount of information we have gathered about ourselves and our surroundings allows us to use some of the most advance problem solving techniques such as genetic algorithms and neural networks into real practical design applications.  

### Form finding through generative design
I have experience designing and optimizing panelized structures through genetic algorithms. I think the valuable part in using this approach is that it can take multiple dimensions into account such as strength, use of material and manufacturing process to output the most optimal solution without the need to fully understanding the complexity of the whole system. I usually work with Python and Rhino Grasshopper.

### Automated machine manufacturing
On the hardware side I work with multi-axis CNCs, lathes and 3D printers. I like to control them whenever posible through a RPI, Arduino or similar boards to interact with them through a network connection. This allows me to handle multiple machines or manufacturing lines in parallel for the completion of a single project, since parametric manufacturing often involves thousands of different parts that need to be assembled together.

The way I implement this approach into my work is to treat each production step as an independent IOT client that can be controlled and monitored in real time through the [Production Cloud Server](/projects/2019-07-21-production-cloud-server.html), which briefly, it's a g-code file hosting cloud server with a network of connected production machines that can be controlled through a node.js connection.

After implementing this process into some of my project I decided to create a more permanent solution, the previously mentioned, [Production Cloud Server](/projects/2019-07-21-production-cloud-server.html).  I have been developing this web-app from the bits and pieces of software I write for my parametric projects and it's proven to be a very efficient tool. It's currently been used by a handful of companies, even won an entrepreneur price in Mexico City back in 2015 that concluded in the creation of some manufacturing companies that run up till today.

This project is the platform of most of my software development implementations and its now available as an open-source repository, always in the hope of been furthered developed by the community (more information about this is available in the [software section](/open-source/#software-downloads)).

I'm mostly focused in designing efficient and low cost structural geometries by implementing heuristic optimization algorithms. I apply this kind of approach from small scale industrial design to lightweight parametric roofing and façade structures design.

I like to think this line of work as unique in the way it implements industrial manufacturing automation and parametric design. Somehow I think joining this together may be a way in which we let science permeate more honestly into our everyday design thinking and help future generations in making efficient and smart choices regarding the way we use our planet resources.

## Starred projects

The publications in this list are in English or Spanish according to the specificity and needs of each presented project. They are listed with no specific order. This publications aim to show my work in different stages of the manufacturing process. A complete by date list is available at the [projects section](/projects).

{% include index-projects-starred.html %}

## Professional journey

My work is mainly divided in three areas, all of them related to digital manufacturing technologies. The first one is software development and machine automation, it's goal is to offer a stand-alone platform for any manufacturing process. Apart from the newly designed automated machines, the end result it's a dedicated Production Cloud Server that controls and reconceptualice the production line into a node base cloud technology.

I also host a public open-source platform which implements this idea of a Production Cloud Server but using community based CNC machines, I offer a wide variety of low cost non industrial CNC machined and designs. I also have a pre-built business solution to implement and help develop local business through a branch called MX Industries witch focuses on re-dignify Mexico's low income housing through the access to manufacturing technologies in most cases its a 3 axis CNC machine.  

### Production cloud (historia)

Most of my workshop development software is focused on the automation part of the manufacturing process. The current working solution is a cloud hosting file server with the ability to remotely control CNC machines. These CNC machines are shared among users who have the ability to share their production files as well.  

Some of the advantages for this approach are:
 - Parallel batch production between multiple coordinated machines
 - Multiple users sharing the same machine
 - Community based production

The Production Cloud Server has become the basis for manufacturing almost all of my current projects. Apart from been a practical tool it has allowed me to focus on the development of form finding algorithms and paneling solutions that take advantage of this production model.

### Partner workshops

>The workshop as a dynamic place for manufacturing and learning through the use of new technologies and innovative solutions.  

### Linarand workshop
Linarand is one the leading Mexican companies in the conveyor belt industry. It has been the main supporter of my research. I started working with them after they sponsored an aluminum CNC machine that I had been designing for a while. After building this machine I automated other manufacturing processes within the factory and was assigned a dedicated warehouse to work alongside their engineering teams.

Linarand has been my head quarters for the last four years and a launching platform for all my enterprises. Apart from the technical knowledge acquired from their teams, they have helped me to understand a company as a whole that starts and ends in the people that sustain it.

<!-- Once I had a proper CNC machine and a warehouse at my disposal I started working on my first parametric structures. Shortly after I realized that machines alone were not sufficient for this task. I needed to control multiple CNC machines from a single controlled unit so I could properly manage the thousands of different parts needed to integrate a parametric structure. This and the need to extend Linarand's new automated processes into their foreign workshops lead to the beginning of the Production Cloud Server and set the foundations for the workshops to come. -->


### SPK
SPK stands for Sputnik, as in first attempt.

## Into the future
Acquiring social scientific data to allow the algorithms to shape its output accordingly. In a urban scale. I don't believe social data per se exists so maybe the first approach is to measure our movements or the amount of energy we consume. Not sure where to start. Maybe I will try to approach the problem as information theory and entropy states just measuring the energy. I need to know more Math and rewrite this paragraph.


## CV ::

### Daniel Fernández Marmissolle-Daguerre
### *Architect*

---

(actualizar )Me especializo en el diseño de estructuras paramétricas y a la producción de maquinaria automatizada y software para su fabricación en serie.

###  Experiencia profesional

  - **Linarand** | Producción y automatización de procesos   
  *2014-20?? www.linarand.com.mx*

    Me encargo de desarrollar junto con el equipo de Linarand nuevos procesos en la fabricación de bandas industriales que involucren automatización y nuevas tecnologías.

  - **SPK Automatización** | Desarrollo e innovación de producto   
  *2013-20?? www.spkautomatizacion.com*

    Cofundador y  responsable cada año del nuevo diseño de maquinaria para venta al público. Al igual que del desarrollo y programación de la nube de SPK y su integración a nivel industrial.

  - **Sietecolores** | Producción ejecutiva y diseño mobiliario   
  *2012-20?? www.sietecolores.com*

    Principalmente diseñe exhibiciones para museos interactivos y me encargue de llevar la integración museográfica a nivel arquitectónico de algunos proyectos.

  - **Gaxiola Arquitectos** | Diseño y Dibujo arquitectónico   
  *2010-2011 www.gaxiolaarquitectos.com*

    Diseño y producción de planos arquitectónicos y ejecutivos para vivienda unifamiliar.

### Educación

  - **Universidad Iberoamericana de la CDMX** | Arquitecto Urbanista   
  *2006-2011 Licenciatura*

  - **Universidad Iberoamericana de la CDMX** | Procesos Generativos de Diseño   
  *2010 Diplomado*

### Software Publicado

  - **Production Cloud Server** | Nube e interfaz remota de corte CNC   
  *2015 https://www.spkautomatizacion.com*

    File hosting cloud and accounting software.

  - **LinCAM** | Generador de códigos-g 2.5D   
  *2019 https://www.food4rhino.com/app/lincam3*

    Explicación lincam

### Premios

  - **Convocatoria MasisaLabs 2015** | Inscripción al apoyo a emprendedores de Masisa   
  *2015 https://www.masisa.com/mex*

    Software development investment.

  - **Convocatoria 5a Generación StartUpMexico** | Parte del equipo de SUM a traves de LeanPlay   
  *2015 https://www.startupmexico.com*

    Explicación startup sum seed investment.

### Voluntariado

  - **Programa de Rescate de la Tortuga Marina** | Marcaje y rastreo de tortugas para estudios de ciclo de vida.   
  *2010  Xcacel- Xcacelito, Quintana Roo.*

    Explicación y buscar pagina de internet.

  - **Recuperación del Parque la Ceiba** | Diseño arquitectónico y propuesta de conservación de árboles.   
  *2010 Flora Fauna y Cultura de México*

      Explicación y buscar pagina de internet.

### *Contacto*
---
daniel@dfmd.mx
