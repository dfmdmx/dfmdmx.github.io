---
layout: post
starred: false
published: true
comments: false
albums:
  album1:
    cover: true
    images:
      - https://lh3.googleusercontent.com/pw/ACtC-3fdAyEpXppsYcimsEyTpJvDwSumGecpx2zGB-5YsaGw1cN1H_wWd6fA1TUWo7qJ1Ba88Bf4usiStuXu4KR-Y6BXTtCH0f232O6KAqezwajxlC95F0Ggy9Uplw8mLoEHx7NMFBGcD_FvrXJj1edLdUu8mg=w1782-h886-no?authuser=1
      - https://lh3.googleusercontent.com/pw/ACtC-3f2XPfC7llA5nLsr5cVgdBjLcc7rEjJJzC8SOe5kMPDkHQEL5DPEUSZTESZ0eyyC0crZMeD58oxfB6vA6iqu6LKedeCDDAn-9LTaUWOb2p1e7Bfcl6kKwCy98nu6xlMJ7GJwqyues7_zUkBX5JlDfIOjA=w1745-h930-no?authuser=1
      - https://lh3.googleusercontent.com/pw/ACtC-3dsOk1KSRIUKtdHTODBiDwtvM5Q8m4eyycFbtQNvQZk4ttouoo7hCIGXbUREINct2NVxTt203DK8waElULxygJ8hT5vym5Pxf7HHEEm9BDtpB391H6puM7rCRHF0EISQet0x3DoCi2TEza6ZpBIyn0uHA=w1869-h765-no?authuser=1
---

### Frame by frame screenshot capture for Rhino3D Python script
This is a concept test for creating a frame by frame animation using [Rhino](https://www.rhino3d.com/6) and [Python](https://www.python.org/). It's definitely not the fastest way to create an animation but it may be a useful tool to visualize evolving data through time and have a better understanding of some optimization algorithms strategies within a script.

I was pleased with the time it took to create an individual frame. I will try to further implement it on a rigid body optimization software using a genetic algorithm that I have been working for a while now.

Here are the videos I made to test the concept as well as the Python script.

{% include index-headers.html %}

{% include album.html images=page.albums.album1.images cols=3%}

## Videos
The videos were merged using [Resolve](https://www.blackmagicdesign.com/products/davinciresolve).

{% include youtube.html id='yGoKsiBSyrY' %}
{% include youtube.html id='l3joupgZ030' %}
{% include youtube.html id='PAu-10xicPE' %}   

## Python script
Rhino Python standard imports.
```python
import rhinoscriptsyntax as rs
import os
```

The Timelapse class.
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
        return self.frame
```

The Sphere class.
```python
class Sphere():

    def __init__(self,radius,location=False,color=(255,0,0),path=[]):
        self.location = location if location else path[0]
        self.radius = radius
        self.object = rs.AddSphere(self.location,self.radius)
        self.color = self.set_color(color)
        self.material = None
        self.set_material(color)
        self.path = path
        self.frame = 0

    def move(self,position):
        rs.MoveObject(self.object,tuple([sum(x) for x in zip(position,(-n for n in self.location))]))
        self.location = position
        return position

    def advance(self):
        self.frame += 1
        return self.move(self.path[self.frame])

    def set_color(self,color):
        rs.ObjectColor(self.object,color)
        self.color = color
        return color

    def set_material(self,color):
        if rs.ObjectMaterialIndex(self.object) == -1:
            self.material = rs.AddMaterialToObject(self.object)
        rs.MaterialColor(self.material,color)
        self.color = color
        return color
```

Tests the animation.
```python
def run_test():
    # Set time lapse length
    max_frames = 330
    # Sets folder to store images and creates a time lapse object
    folder = rs.BrowseForFolder(message='Select folder to store frames')
    timelapse = Timelapse(folder=folder,size=(1920,1080),prefix='test',format='png')
    # Creates a point array from base curves to specify a motion path for the spheres to follow
    curves = rs.GetObjects("Select curves for path vector", rs.filter.curve,True,True)
    point_paths = [rs.DivideCurve(curve,max_frames+1) for curve in curves]
    # Creates the sphere objects
    spheres = [Sphere(20,None,(50,50,50),path) for path in point_paths]
    # Run until frame rate hits max frames
    while timelapse.frame < max_frames:
        for sphere in spheres:
            sphere.advance()
        timelapse.screenshot()
```

Run the script.
```python
if __name__=="__main__":
    run_test()
```
