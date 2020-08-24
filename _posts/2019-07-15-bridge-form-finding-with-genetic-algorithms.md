---
layout: post
starred: false
published: true
comments: false
images:
  - https://lh3.googleusercontent.com/pw/ACtC-3eM7QUpSJYGyrI7DeBKVLKztFTbz2zJc-0ikZXBsQN4JFNlupri8TKH98RDykMGWv91BUfPdN-hbsGG2UqFrsIwVc11Bax9tt2QD2ydVv5BSZIbqD3ewqA7DYFw9skUhWjdyuZI4Fe9pqd8f6VMzkA5BQ=w1920-h490-no?authuser=1
albums:
  album1:
    cover: true
    images:
      - https://lh3.googleusercontent.com/pw/ACtC-3fGd00p_lm5D9zhHYmjQ57hXSPDBW7_i7MWXPC-Ehm5LTP2gM8lGTelRKOjqATDBZq1xufooHTVSFZyOSspGr2ueFp4iDkH7WoqdyzfDNk8_XAoUVb0GkOSM1STo4WXYBl15u3KKrXtPaBlcpDLP6hM-Q=w1654-h1240-no?authuser=0
      - https://lh3.googleusercontent.com/pw/ACtC-3fox9QAMw-c186Ul25_g-CywLCJdNcZZqX-i98GVG5jRHe6Oj3eVmk6zNOTHvvsVDG70u3DlmPcKLybZ9Nwo55Wj0vtvewlNIdaOa2xg-SWY3iKrtJu3b6dQhjrztH4MHxLFsmj-AG2RuONsQcsfpKtwQ=w1654-h1240-no?authuser=0
  album2:
    cover: true
    images:
      - https://lh3.googleusercontent.com/pw/ACtC-3fWJ7bd60UwXuPu07KX0OAqfp4DTTMAgbEh1aUexfKEX81CvQGqZcj8D-S35iF6Uex_HDZBfFB3jZTqOgbDDNqR6ZgKh_QH_B77KZRLhmvlJbna2BSJJAFuHpu6o5VyvNHJ229Dcz76KdeVzfa2RluKCg=w1126-h750-no?authuser=1
      - https://lh3.googleusercontent.com/pw/ACtC-3eXYfgqaCjcMSVaEWrNR_856x_Rul2nfR1rbqbl2GFuF2JSnglFszcUG5XGZF2xIT-INMOsi8O4TgGBxDTrX3MF-97-FXgfZ4znqryiK_q4WerpNxFgWnE3ppsF3hMaPfFZI5zGvg886CoT0Z95lcO1vA=w1314-h753-no?authuser=1
---

### Basic strength and simple fitness evolutionary algorithm
The goal is to create a bridge like model that suffices these parameters in the most optimal way:
 * Create a link between two separate planes.
 * Reduce the amount of material used.
 * Increase the strength of the link.

A Rhino Python script will be used to decode the gene sequence into a 3D structure. Then it will be process by Kangaroo (or FlexHopper) to evaluate its deformation. This and the total amount of material used its taken into account in the fitness function that defines the direction of the genetic algorithm run by Galapagos.


{% include album.html images=page.albums.album1.images %}
*Concept drawings - Expected geometry*

![Grasshopper definition]({{page.images[0]}})
*Grasshopper definition (Was created using an old plugin version, not tested in GH for Rhino6)*

{% include album.html images=page.albums.album2.images %}
*Unevolved (random) organism v.s. Evolved and more structurally fit organism*

{% include file.html filter='bridge' caption='Grasshopper file'%}
