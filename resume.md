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

### Daniel Fernández Marmissolle-Daguerre
### *Arquitecto*

---

Me especializo en el diseño y programación de estructuras paramétricas, en el desarrollo de software y producción de maquinaria automatizada para su fabricación.   

<i class="fas fa-link"></i> [dfmd.mx](https://www.dfmd.mx/)

### <i class="fas fa-user-graduate"></i> Educación

  - <i class="fas fa-city"></i>
  **Universidad Iberoamericana de la CDMX** | Arquitecto Urbanista | *Licenciatura*   
  {% include cvheader.html date='2006-2011' location='Ciudad de México' url='uia.mx' %}

  - <i class="fas fa-square-root-alt"></i>
  **Universidad Iberoamericana de la CDMX** | Procesos Generativos de Diseño | *Diplomado*   
  {% include cvheader.html date='2011' location='Ciudad de México' url='uia.mx' %}

### <i class="fab fa-black-tie"></i> Experiencia profesional

  - <i class="fas fa-industry"></i>
    **Linarand** | Producción y automatización de procesos   
    {% include cvheader.html date='2014-2019' location='Ciudad de México' url='www.linarand.com.mx' %}

    Empresa especializada en los sectores alimenticio y farmacéutico, dedicada en la venta, maquila y servicio de bandas transportadoras y transportadores industriales

    **Dirección de diseño y manufactura de proyectos especiales**

    - Programación del equipo Haas (torno y router cuatro ejes) para la fabricación de refacciones plásticas para inventario de ventas
    - Investigación, desarrollo e implementación de procesos automatizados en la fabricación de bandas transportadoras y refacciones plásticas
    - Diseño y fabricación de maquinaria CNC para corte y barrenado de bandas industriales
    - Desarrollo, programación y mantenimiento del servidor de control remoto de maquinaria para corte, manejo de pedidos e inventario
    - Programación del plugin para generación de códigos-g CAM en español en Rhino3D, LinCAM3 <i class="fas fa-tag"></i> **Python, Rhino3D 6**
    - Capacitación y cursos para el personal en el uso de nuevas tecnologías CAD/CAM <i class="fas fa-tag"></i> **AutoCAD, Rinho3D-CAM, Vectric, Fusion**

  - <i class="fas fa-microchip"></i>
    **SPK Automatización** | Desarrollo e innovación de producto   
    {% include cvheader.html date='2013-2017' location='Ciudad de México' url='www.spkautomatizacion.com' %}

    Empresa dedicada a la manufactura y diseño de maquinaria industrial automatizada de bajo costo y servicio de maquinado CNC de 2.5

    **Socio fundador - Jefe de Tecnología (Chief Technology Officer, CTO)**

    - Diseño y fabricación de máquinas CNC de 3 ejes para venta al público y uso interno de la empresa
    - Diseño y programación de la plataforma para automatización de procesos, administración, taller y venta (Python, Google App Engine)
    - Desarrollo de concepto para capitalización a través de fondos de inversión semilla
    - Responsable de promoción y diversificación de productos en exhibiciones de diseño industrial
      - Abierto Mexicano de Diseño (edición 2014, 2015 y 2016)
      - Instituto Nacional del Emprendedor INADEM (2015)
      - LeanPlay Masisa (2015)
      - Start Up México SUM 5a Generación (2015)

  - <i class="fas fa-child"></i>
    **Sietecolores** | Producción ejecutiva y diseño de mobiliario para museos   
    {% include cvheader.html date='2014-2019' location='Ciudad de México' url='www.sietecolores.com' %}

    Despacho especializado en la creación de museos interactivos para niños y niñas: conceptualización, financiamiento, diseño, puesta en marcha y acompañamiento posterior

    **Responsable de diseño arquitectónico**

      - Diseño y conceptualización de exhibiciones
      - Diseño conceptual y ejecutivo de estructuras paramétricas autoportantes (Rinho3D y Grasshopper)
      - Dibujo de planos ejecutivos arquitectónicos (Rinho3D)
      - Dibujo de planos técnicos para fabricación de mecanismos industriales (Rinho3D)
      - Modelado y renderizado conceptual de estructuras para venta (Rinho3D, Photoshop e Illustrator)

  - <i class="fas fa-laptop-house"></i>
    **Gaxiola Arquitectos** | Diseño y dibujo arquitectónico   
    {% include cvheader.html date='2010-2011' location='Ciudad de México' url='www.gaxiolaarquitectos.com' %}

    Firma de arquitectura

    **Dibujante bajo la supervision directa del Arquitecto responsable de la firma**

      - Producción de planos arquitectónicos y ejecutivos para vivienda unifamiliar (AutoCAD).
      - Diseño de láminas conceptuales para venta y aprobación de diseño (Rinho3D, Photoshop e Illustrator)

### <i class="fas fa-check"></i> Premios

  - **Universidad Iberoamericana de la CDMX** | Mención honorífica | *Licenciatura*   
    {% include cvheader.html date='2011' location='Ciudad de México' url='uia.mx' %}

  - **Fondo MasisaLabs 2015** | Inversión semilla para incubación de empresas promotoras de tecnología   
    {% include cvheader.html date='2015' location='Ciudad de México' url='www.masisa.com/mex' %}

  - **Convocatoria 5a Generación StartUpMexico** | Patrocinio para la obtención de financiamiento a través de fondos de riesgo.   
    {% include cvheader.html date='2015' location='Ciudad de México' url='www.startupmexico.com' %}

### <i class="fas fa-draw-polygon"></i> Proyectos independientes

### <i class="fas fa-cloud"></i> Software Publicado

  - **Production Cloud Server** | Nube e interfaz remota de corte CNC   
  *2015 https://www.spkautomatizacion.com*

    File hosting cloud and accounting software.

  - **LinCAM** | Generador de códigos-g 2.5D   
  *2019 https://www.food4rhino.com/app/lincam3*

    Explicación lincam

### <i class="fas fa-tree"></i> Voluntariado

  - **Programa de Rescate de la Tortuga Marina** | Marcaje y rastreo de tortugas marinas para estudios de ciclo de vida   
    {% include cvheader.html date='2010' location='Quintana Roo' url='www.florafaunaycultura.org' %}

  - **Recuperación del Parque la Ceiba** | Diseño arquitectónico y propuesta de conservación de árboles   
    {% include cvheader.html date='2010' location='Quintana Roo' url='www.florafaunaycultura.org' %}


### *Contacto*
---
daniel@dfmd.mx
