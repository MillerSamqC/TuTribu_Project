from django.db import models
from Marketplace.models import *



class Producto(models.Model):
   
    CATEGORIA = (
    ('BR', 'Bicirunners'),
    ('M','Muppies'),
    ('AL','Anilovers'),
    ('TF', 'Tribufit'),
    ('TV', 'Travellers')
)

    ETIQUETA = (
    ('MP', 'Marca con Proposito'),
    ('N', 'Nuevo'),
    ('MR', 'Mas reconocido')
)

    prodNombre = models.CharField(max_length=200)
    prodID = models.CharField(max_length=200, null=True, blank=True)
    precio = models.IntegerField(default=0)
    descuento = models.FloatField(blank=True, null=True)
    categoria = models.CharField(choices=CATEGORIA, max_length=30)
    etiqueta = models.CharField(choices=ETIQUETA, max_length=30)
    descripcion = models.TextField(null=True, blank=True)
    stock = models.FloatField(null=True, blank=True)
    prodImagen= models.ImageField(null=True, blank=True)
    imagenUrl = models.CharField(max_length=200, default='assets/logo2.jpg')

    def __str__(self):
        return self.prodNombre + " - " + str(self.precio)

    def agregarProducto(self, producto):
        self.producto_lista.append(producto)

        


    