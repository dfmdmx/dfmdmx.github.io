---
layout: page
status: Development
comments: false
---

### Web-app for remotely automated CNC manufacturing
The Production Cloud Server hosts all the manufacturing files and software to integrate a design into a digital automated production line. It can be self implemented with the appropriate knowledge and hardware. For a pre-built business solution check our Mx Industries project.

It has the ability to remotely control CNC machines, allowing for a centralized controlled production line. The production line is seen as a list of IOT CNC machines each with its own client. The server feeds g-code files to these remote machines allowing them to work together in the same design.

Some of the advantages for this approach are:
 - Parallel batch production between multiple coordinated machines
 - Multiple users sharing the same machine
 - Community based production

#### Contents
{% include index-headers.html %}

 ![Production Cloud Server](https://lh3.googleusercontent.com/pw/ACtC-3e1uylh04Uo7iOQPknEdoyW3zBsA5PliVENo2_CDpgxV525ZQJasObOXXlcfjovipYJ6Icv8np6uOPs8oa43IpbF0_u120SCIC7fPVcfN3aE66BzN3uh7S85_LESOuMqggjnirYr4humHDAbInn6JN-0Q=w1654-h1240-no?authuser=0)

## Production Cloud

---

The Cloud part of the server enables the users to share their products and IOT CNC machines. This allows the production line to be extended seamlessly into other workshops or some student's garage near you.

## Machine client

---

The client can be understood as a g-code file queue container installed on a local machine that can perform certain tasks remotely from the production server, such as:
 - Live CNC control and g-code previsualization with [Tiny-G](https://github.com/synthetos/TinyG) and [GRBL](https://github.com/grbl/grbl) controlled machines with [Chilipeppr](http://chilipeppr.com/).
 - Remote USB emulator for non compatible machines (client must be installed on [rpi zero](https://www.raspberrypi.org/products/raspberry-pi-zero-w/))
 - USB hub for file transfer (all g-code files in queue are copied to an external USB when inserted into the host computer)

![Machine control](https://lh3.googleusercontent.com/pw/ACtC-3exkfJAzIK6anCzl7jTz54_zvWWRoflVnF_1JAbNZodmyvNNz0NOwX0W5zVtj96QmG26sMF02trMM0vzN8tTL80PKXnec_MdDuTdgr9vNiCRvJPlbx1dH2p3CPcQcI1eQ48t3VITD80V6jeKDc8-7DT8g=w2048-h1152-no?authuser=0)

## Setup guide

---

<!-- TODO: Tiene que parecer un anuncio Banner como el de projectos  -->
<!-- TODO: Link to github, direct client downlos button and install instructions  -->
<!-- TODO: Link to cloud. There should be a project for how to use the cloud in general temrs  -->
The machine client installation file is available at the [Software Downloads](/open-source/#software-downloads) section.

![TinyG](https://lh3.googleusercontent.com/pw/ACtC-3dDOt9trEHreSiEmu2xRpVVNMfbMgVBEwUJsrFhoM8s3fRUPV4WonH_bKqoi1eWnyy1D1okIPblbqgLnUc5zzqy0X7ciUXOAFBnaucFyDcEaniVmjlgIumtgbxtSxMniP1BcBHHbgIkXdFEGwqyhV6FRg=w2205-h1240-no?authuser=0)

## Compatible CNC machines

---

### Medium Aluminum CNC Generation 2.0 - Current

This is lightweight machine primarily design with [OpenBuilds](https://openbuildspartstore.com/) assembly parts and some custom CNC aluminum plates.

![Aluminum CNC](https://lh3.googleusercontent.com/pw/ACtC-3dK5GxWlNb-qIW1Vpk82KwXY5U-w7s4NYgfUufzLlEeToveWL8rF7AAuEKWgt7MmCWQj0LPjwENHIbPysFSdWzK2tDlN3Rae8WGtEGwUyenN_QrvejEdUxjSNCLdMsmWphJdbpdIiv7gIQzOH6Ci4WzSg=w2048-h1152-no?authuser=0)

{% include gallery.html images="https://lh3.googleusercontent.com/pw/ACtC-3edNqUhMEQjydBG7ijr5lzuL-sCSHq_CRGbdJWwAGZLg96uDeg4GpH_A5Brye7kv8cTDcTHbi9u0D04j4kLHkcMmfo115HZdILg0u9BDEZDD6pDvjhOlZSVyp5bKggsMQuKpego40cDFGhTuJ5tzCFQfA=w2048-h1152-no?authuser=0, https://lh3.googleusercontent.com/pw/ACtC-3dK5GxWlNb-qIW1Vpk82KwXY5U-w7s4NYgfUufzLlEeToveWL8rF7AAuEKWgt7MmCWQj0LPjwENHIbPysFSdWzK2tDlN3Rae8WGtEGwUyenN_QrvejEdUxjSNCLdMsmWphJdbpdIiv7gIQzOH6Ci4WzSg=w2048-h1152-no?authuser=0" %}

### Big Aluminum belt driven CNC - Custom

![CNCs](https://lh3.googleusercontent.com/pw/ACtC-3fWEZ1blyCHpf5OY7qm3PBeDffkst6SkNLEj_4lum6vK8hZXBDv34jJFGFRTA0m3IK_QJG-LdvUuh2zhtURpecxiN6kOpSttTq4xnKiQi8flpUVpYvN0YzjskzV4TEZR_TI5SK6VTPIMLq8o9hRBv2vwQ=w2048-h1152-no?authuser=0)

{% include gallery.html images="https://lh3.googleusercontent.com/pw/ACtC-3eLemPa3LFAleTJqQQ352AtJwF27_VghqXzi3oRvidh6JQqmQcviMMrUxJnS1KGyG73gSkDI6yYLY8c-DOOgGyrlu5ttTSYLDueKfBUCZMo3CDEU2R7oYdsAZu1ZbiF1Y6ZtBcOCqbQf2GAvpgxzMzFTQ=w2048-h1152-no?authuser=0, https://lh3.googleusercontent.com/pw/ACtC-3cLwPF5AZEftEs9X-J1BhVXq193yJfNgeIMH5Yqtm9eGMxCZu-WF8ljMBtvJ4vMr8V42Iy2Xv7LhI8JMAm5f3ih6Xw3Ih9_IciENNPC-3DS3Yt7CZ7iOhKcvI4rJirWDP67SCnWW69N44KlO9lPjdlO4w=w2048-h1152-no?authuser=0" %}

#### Download files
{% include file-binder.html name='AluminumMedium-OpenBuilds-CNC' %}
