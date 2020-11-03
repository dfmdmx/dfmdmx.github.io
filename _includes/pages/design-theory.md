## My approach to Design

![magic planet](https://lh3.googleusercontent.com/pw/ACtC-3eOC-OYIyx-Y3W87lJSbkE6kZZ0t-pbWEFSgEKTzOnY4ldvyWkMBTdQnOkAoO2AeuALiCW70LsdMqS8tRNllbgEAY-980SC7HZzV6H9FOTQvY5txSXh4fka-p97S4E665-V1GigFkhokwcA3d7QZISnzA=w1898-h930-no?authuser=1)

>Thinking about Architecture as some intrinsic or emergent system of nature allows us to reduce some of its properties into fundamental variables that can be understood through mathematical models. In this sense, architecture should be shaped alongside scientific knowledge. The scale we have reached as humanity and the amount of information we have gathered about ourselves and our surroundings allows us to use some of the most advanced problem solving techniques, such as genetic algorithms and neural networks into real practical design applications.

### Form finding through generative design
    
![grasshopper analogy](https://lh3.googleusercontent.com/pw/ACtC-3fTgKfH2yBpq2KRtaDTZ9nWznMnozT3WIEusqMOFQmd4Th0KS52Apn_uIsBPOJpAUYs2kdL7lssToZTA34omnps-gIKAxWx3PMobD-9FyZDZKh1zcqkv5KtEhjYrvV6VflrONeayh_g22_Rau3oCcE2oQ=w1888-h397-no?authuser=1)

![form finding analogy](https://lh3.googleusercontent.com/pw/ACtC-3dUk1rBXaEDSHvkc9UNvFxSvafcEQ-PIhP39SyLOUEibq4eNX9EVMLXyVq1tpSQ0jwDTGoHJBjyvAGYXH0q4eFkw0NujISpCUATofhArG-AN7XpBLQasSVxOLEudVJ-eB3NOlEfQkzFT-yowHZ_4QQ4nw=w1126-h750-no?authuser=1)

![magic planet contruction](https://lh3.googleusercontent.com/pw/ACtC-3coym5LmmtMhd6m5PMSPg_B5TGo0t4gY1o9z9WK9XDqCw_nCPnCbkYpVsTyb62y-LRP-WWZh2wbmiBma-jnI6tOseTe1KaAAlcwn-3hqOrh8w76eeNwGZb4opMBlt6Bnk4EFgdWG3AV6DV0HwY2fEPiyQ=w1430-h953-no?authuser=1)

I have worked designing and optimizing panelized structures through genetic algorithms. I think the valuable part in using this approach is that it can include a multitude of dimensions in the design process, in this case, a form finding algorithm. Sometimes this complexity resembles the way nature systems stabilize through time.

When combined together, these complex dimensions, namely strength, the use of materials and the manufacturing process, result in a nearly optimal solution, without the need to fully grasp the complexity of the whole system.  I usually work with Python and Rhino Grasshopper to model these geometrical algorithms.

![3d machining](https://lh3.googleusercontent.com/pw/ACtC-3cBHpblVjT8hs6qLA-bp6vbxHN_L0WnthfP6wp3_VRWfKiGvQC-ZdtHdjMgjUaJilYKimjsvkniufn7aAzOBEg4UjK-SVcTDXfPtdeH6SDwy40kkW_gM5j6-hy2uYQMTwkRZHHWrDl5T9l8DKWg6J7bfQ=w1695-h953-no?authuser=1)

### Automated machine manufacturing

![linarand workshop](https://lh3.googleusercontent.com/pw/ACtC-3fNbETKPcHTkbxP3YIp5dbaOnkT3yce93zDDydRiEy7Z20kZavOt_E7uORxJFd74DmKfZ8rwdBUIMvPcZnTykgzUXDhIlz0kptEFQc6HXHCG22s75OOSavJtrO7L0wylpVkxNCkP8YdBNJZLFb4KCzcBw=w1920-h342-no?authuser=1)

![tinyg](https://lh3.googleusercontent.com/pw/ACtC-3cTbt_TcPtjLkydxJdvO2QSu3z14hnx4d6pR78ULV9JTDV8epQIr6QMR8kfOcMTUzyFga1sBGsDle35gtovp05DOvmZ7W1pgwFp0o0_quC3Rdu6h1Gz8WUZAzEcgj3TjsuAh2K0cn4ld2ErKQ_-tf-Bqg=w2205-h1240-no?authuser=1)

![linarand cutter](https://lh3.googleusercontent.com/pw/ACtC-3ff8CA_GWs84qpKg9WQGT7CYciUEz3TaHO3RRSKU-7oGHBC4_s4KWzqYjtpJpXydvH0nfaWnhqY_WNDTp6wKUT-qRaVpC96UGCeSlKs2xlBUjyetNtFyjNxuxhjxrFFSpmA7XuzD8HierJ5tLXxS5tHZw=w1430-h953-no?authuser=1)

Regarding hardware, I have worked with multi-axis CNCs, lathes and 3D printers. Since parametric manufacturing often involves thousands of different parts that need to be assembled together, I like to control my workshop machines, whenever possible, through a RPI, Arduino or a similar board. This allows me to handle multiple machines and manufacturing lines simultaneously and remotely in a single project.

I treat each production step as an independent IOT client that can be controlled and monitored in real time through the Production Cloud Server. This app, in simple words, is a g-code file hosting cloud server with a network of connected production machines that can be controlled through a node.js connection.

I developed this web-app from the bits and pieces of software that I wrote for some of my parametric projects. It has proven to be a very efficient tool. I was awarded in 2015 for this web-app with an entrepreneur seed investment prize, in Mexico City. This fund concluded in the creation of two manufacturing companies that run up till today.

This project is the platform of most of my software development implementations and it is now available as an open-source repository, always in the hope of been furthered developed by the community.

I  mostly focus on designing efficient and low cost structural geometries by implementing heuristic optimization algorithms. I apply this kind of approach from small scale industrial design to lightweight parametric roofing and façade structures.

I like to think of this line of work as unique in the way it implements industrial manufacturing automation and parametric design. Somehow I think joining them together may be a way in which we let science permeate more honestly into our everyday design thinking and help future generations make efficient and smart choices regarding the way we use our planet resources.
