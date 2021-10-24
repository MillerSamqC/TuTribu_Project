from django.db import models


class Empresa(models.Model):
    nombre = models.CharField(max_length=200)
    NIT = models.CharField(max_length=15)
    direccion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre

class Tienda(models.Model):
    tienda = models.CharField(max_length=50)
    direccionTienda = models.CharField(max_length=40)

    def __str__(self):
        return self.tienda
    
    
    


    


    



