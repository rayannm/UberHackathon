from PIL import Image, ImageDraw
import numpy
import math
import random

# generates coordinates for intersections

size = 100
nodes = []

def generateNodes(nodeNum):
  for i in range(nodeNum):
    x = random.randint(1, size - 1)
    y = random.randint(1, size - 1)
    while ((x,y) in nodes):
      x = random.randint(1, size - 1)
      y = random.randint(1, size - 1)
    nodes.append((x,y))

generateNodes(10)
print(nodes)


# adds points & displays picture

picture = Image.new("1", (size, size), 1)

for node in nodes:
  picture.putpixel(node, 0)

connections = []
distanceThresh = 20

# euclidean distance between nodes

def findDistance(a, b):
  x1, y1 = a
  x2, y2 = b
  return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

# making connections between nodes

with Image.open("1") as im:

    draw = ImageDraw.Draw(im)

    for i in range(len(nodes)):
        for j in range(len(nodes)):
            if (i != j):
                if (findDistance(nodes[i], nodes[j]) < distanceThresh):
                    velocity = random.randrange(10, 50)
                    connections.append((i, j, velocity))
                    draw.line([node[i], node[j]], fill = 'black')


#display
picture.show()

# city is now generated
# a star stuff
