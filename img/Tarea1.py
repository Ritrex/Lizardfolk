#Python
import numpy as np
from matplotlib import pyplot as plt
#Esto permite imprimir imagenes  (plt.show(tu imagen))
from skimage import data
#esto permite verlo como arreglo de numeros
from skimage import io 
#esto permite leer tanto desde internet como localmente
#image = load("opencabinet.png")
def toGrayscale(img):
  for pixellist in img:
    for pixel in pixellist:
      r=int(pixel[0])
      g=int(pixel[1])
      b=int(pixel[2])
      pixel[0]=pixel[1]=pixel[2]=(r+g+b)/3

def showresults(img):
  plt.imshow(img)
  plt.show()

def load(src):
  return io.imread(src)

#showresults(toGrayscale(load("opencupboard.png")))
img=toGrayscale(load("/home/nemo/code/mod1/proyecto/img/closedcupboard.png"))
showresults(img)
#showresults(toGrayscale(load("floor.png")))
# erik = io.imread(image)
# # plt.imshow(erik)
# # plt.show()
# blueerik=io.imread(image)
# x=erik.shape[0]
# y=erik.shape[1]
# grayerik=io.imread(image)
# blueerik=io.imread(image)
# greenerik=io.imread(image)
# rederik=io.imread(image)
# negativeerik=io.imread(image)
# brighterik=io.imread(image)
# hcerik=io.imread(image)
# # trust me on this one
# for pixellist in blueerik:
#   for pixel in pixellist:
#     pixel[0]=pixel[1]=0
# plt.imshow(blueerik)
# plt.show()
# for pixellist in greenerik:
#   for pixel in pixellist:
#     pixel[0]=pixel[2]=0
# plt.imshow(greenerik)
# plt.show()
# for pixellist in rederik:
#   for pixel in pixellist:
#     pixel[1]=pixel[2]=0
# plt.imshow(rederik)
# plt.show()
# for pixellist in negativeerik:
#   for pixel in pixellist:
#     pixel[0]=255-pixel[0]
#     pixel[1]=255-pixel[1]
#     pixel[2]=255-pixel[2]
# plt.imshow(negativeerik)
# plt.show()
# for pixellist in grayerik:
#   for pixel in pixellist:
#     r=int(pixel[0])
#     g=int(pixel[1])
#     b=int(pixel[2])
#     pixel[0]=pixel[1]=pixel[2]=(r+g+b)/3
# plt.imshow(grayerik)
# plt.show()
# for pixellist in brighterik:
#   for pixel in pixellist:
#     r=int(pixel[0])+100
#     g=int(pixel[1])+100
#     b=int(pixel[2])+100
#     if(r>255):
#       r-=r%255
#     if(g>255):
#       g-=g%255
#     if(b>255):
#       b-=b%255
#     pixel[0]=r
#     pixel[1]=g
#     pixel[2]=b
# plt.imshow(brighterik)
# plt.show()
# plt.imshow(hcerik)
# plt.show()
# for pixellist in hcerik:
#   ratio=2.2
#   for postiton in range(0,len[pixellist]):
#     r=pixellist[postiton][0]+0
#     g=pixellist[postiton][1]+0
#     b=pixellist[postiton][2]+0
#     pixellist[postiton][0]=pixellist[len(pixellist)-postiton-1][0]
#     pixellist[postiton][1]=pixellist[len(pixellist)-postiton-1][1]
#     pixellist[postiton][2]=pixellist[len(pixellist)-postiton-1][2]
#     pixellist[len(pixellist)-postiton-1][0]=r
#     pixellist[len(pixellist)-postiton-1][1]=g
#     pixellist[len(pixellist)-postiton-1][2]=b
#     # r=((float(pixel[0]))*ratio)+0 
#     # g=((float(pixel[1]))*ratio)+0
#     # b=((float(pixel[2]))*ratio)+0  
#     # if(r>255):
#     #   r-=r%255
#     # if(g>255):
#     #   g-=g%255
#     # if(b>255):
#     #   b-=b%255
#     # pixel[0]=r
#     # pixel[1]=g
#     # pixel[2]=b


# plt.imshow(hcerik)
# plt.show()


#java volatile le indica a la maquina virtual que restrinja el
#acceso  una variable a un solo proceso a la vez

    