---
layout: post
starred: false
published: true
comments: false
images:
  - https://lh3.googleusercontent.com/pw/ACtC-3dvwFyVIsbtPC1R3mFUtZqTNktDzldnBlkucr2cmPBT8ys8fL-oGU97D4X_qZO0O2D-hUzcATRPGIhQSe73Vq_DzJJRd3nwk0K88TklWgD_6k8lQ6NC7mNRRbtxMd_Z-X0NBrMIz7gZ3Ii2gYvC5H6Z4Q=w1170-h754-no?authuser=1
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

![TheoJansesImages]({{page.images[0]}})

{% include album.html images=page.albums.album1.images cols=3 %}

{% include youtube.html id='0SEnbHD9k1s' %}
