---
layout: post
comments: true
published: true
---

This is a concept test for creating a frame by frame animation using Rhino and Python. It's definitely not the fastest way to create an animation but it may be a useful tool to visualize evolving data through time and have a better understanding of some optimization algorithms strategies within a script.

I was pleased with the time it took to create an individual frame. I will try to further implement it on a rigid body optimization software using a genetic algorithm that I have been working for a while now.

Here are the videos I made to test the concept as well as the Python script.

{% include index-headers.html %}

## Videos
The videos were merge using [Resolve](https://www.blackmagicdesign.com/products/davinciresolve).

{% include youtube.html id='yGoKsiBSyrY' %}
{% include youtube.html id='l3joupgZ030' %}
{% include youtube.html id='PAu-10xicPE' %}   

## Python script
Rhino Python standard imports.
```python
class Timelapse():
    def __init__(self,folder='',size=(1920,1080),prefix='',format='png'):
        self.frame = 0
        self.folder = folder
        self.size = size
        self.prefix = prefix
        self.format = format
    def screenshot(self):
        save_path = os.path.join(self.folder,'%s_%s.%s'%(self.prefix,self.frame,self.format))
        rs.CreatePreviewImage(save_path, view=None, size=self.size, flags=2, wireframe=False)
        self.frame += 1
```
