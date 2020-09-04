---
layout: post
starred: false
published: true
comments: false
images:
  - https://lh3.googleusercontent.com/pw/ACtC-3dvwFyVIsbtPC1R3mFUtZqTNktDzldnBlkucr2cmPBT8ys8fL-oGU97D4X_qZO0O2D-hUzcATRPGIhQSe73Vq_DzJJRd3nwk0K88TklWgD_6k8lQ6NC7mNRRbtxMd_Z-X0NBrMIz7gZ3Ii2gYvC5H6Z4Q=w1170-h754-no?authuser=1
  - https://lh3.googleusercontent.com/cbj6d8c6pRUNOVvsgdvBIUMOoJAaHid4LaYzu-zQY32EidVS27Pec7sjTMCJfx_oyB6U2csXM8HPZRkq9CbHi4-b3yvGpEqjfqQplncFOiweshnPBIRVygT9pCF2oEVQQEHYvtdwqAdCK3MO-hsdUgDRuDOuheEMVlsgAf6LwlPDulV4nFHbwdS0iF9yYEFN7RqMJiPOvcNhE7UFmYr9hQmN0v7utTivf6k6tXkwUzJwTJ6smtH7Ua62Ht-O9esCTH_E_X8IztUiIoEd04AyDp9nz5iwx5Rh-oj-6Zt6A0GLFcZDirt9hIqiTARd7df8PKJvq_QM-ZuNI9_jNSAZ-HGPYpBGEdu3bhtQ3BN-phIY-8TAuPHuA83pGDmBvEeTvxhneN-mvYo3n0ugm4Jp3wZ2ZHy19DvJok0xh84Qdx7p_jPBuGIwuHAk6ojtPw-T4qPyjIffm0uwiAs4-bPUOxEhcX2UThNW4fabEETkmVaX2NRkNpOkCXeWmVIUDRs49e_HspVt9huIln4g2ufUP-7X2_b6j2OhsQqk39A2nzlvojrJlJ7zOB7VqliywdYwt-5AIIdupnHVJ-l_8yMrKA4oAJZCguwj_-5z2DbejBBzrfk7-V11AGPNe2hQA4M9IllQK5XHnigjIEfWS41SCTirFWl7gLOYFUfNw4bd7HPwGbZsIVlSTGNb203vKg=w1831-h818-no?authuser=1
albums:
  album1:
    cover: true
    images:
      - https://lh3.googleusercontent.com/pw/ACtC-3diCP8RedlaUze0aKMxEIPEQyN9hZV6Hq5A8VnbwL232JXzB_rC8PZ001HLUzNUHT-q4qJX26ZsST7BzpSgcWMhJmkZQ--vL4oedtasUArsLKpCTCyPFUEa-FQAeMbowxIblIU8N6yEpJy2vGA5bdsxcQ=w1252-h741-no?authuser=1
      - https://lh3.googleusercontent.com/pw/ACtC-3cdhy0Vh5_2G-qro7rqsNeDfZtQ1fGsECmTQoJYI5eVF3dyeFWNFAk4GW7jHjpdAJ6XPXhnzMO1KzpUmuxQHVnAxAexFKZyF5JGpWXXf7wb4-LLYazyUfN0eSiaHpWIpLdf_HnjenkaGZZN4ZooQCXnyQ=w1238-h748-no?authuser=1
      - https://lh3.googleusercontent.com/pw/ACtC-3d1tM3WohwaZ8OMMFka-UUFMntvL0QRTdA9Doo9QPzk7gufV-Tq9c83Xzrh1CBQWg53zs5oqngEyvKCLTcrWVgLsJjisF8MWvNf8Jh4zgts_G8R6ERUtAoyNRV3eC-K_90IdWQU7htAifsSOo2xgH65vA=w937-h706-no?authuser=1
---


### Simulation of a Stranded Beest by Theo Jansen made in Rhino3D with Grasshopper and Kangaroo physics

I made this exercise a while ago when I was learning Kangaroo but all I could found was the video. I think it would be amazing to parametrice some values of the beast geometry and take them into account in a genetic algorithm. The organism will try to reach its most optimal form to travel the furthest with the less amount of energy in a fixed amount of time. The genes that come to my mind are the length of the rods and the intersection angles between them but I don't a have clear strategy at the moment.

I'm goin to try and recreate this simulation using Kangaroo 2.0. Judging by the date, 2014, I probably used version 1.0 anyway. Lately I have been using Flexhopper instead of Kangaroo but I have not been able to combine it with any GA problem solving Grasshopper plugin. I think the zombie solver in Kangaroo pauses in some way that it resets the simulation by itself.

[Stranded Beest Webpage](https://www.strandbeest.com/)  

![TheoJanse'sImages]({{page.images[0]}})
*Stranded Beest*

{% include album.html images=page.albums.album1.images cols=3 %}
*Screen captures from videos published in the Stranded Beest Webpage*

{% include youtube.html id='0SEnbHD9k1s' %}
*Stranded Beest 2D simulation in Kangaroo*

## Software

For the modeling I plan to use Rhino3D and Grasshopper, same as before. Octopus for the GA solver instead of Galapagos, and Kangaroo2.0 for the physics engine.

> Octopus outputs some good looking graphics.

![Octopus graphic]({{page.images[1]}})
*Octopus genetic algorithm solver graphic example*

#### Downloads:
  - [https://www.rhino3d.com](https://www.rhino3d.com)
  - [https://www.rhino3d.com/6/new/grasshopper](https://www.rhino3d.com/6/new/grasshopper)
  - [https://www.food4rhino.com/app/octopus](https://www.food4rhino.com/app/octopus)
  - [https://www.food4rhino.com/app/kangaroo-physics](https://www.food4rhino.com/app/kangaroo-physics)

## TODO

  - [ ]  Recreate 2D rigid model with Kangaroo2
  - [ ]  Define parameters to use as genes 
