from django.db import models
from Productos.models import *
from Usuarios.models import *



class CarritoCompras(models.Model):
    #usuario = models.ForeignKey(Cuenta, on_delete=models.SET_DEFAULT)
    orderId = models.CharField(max_length=200)
    fecha = models.DateTimeField(auto_now_add=True)
    producto = models.CharField(max_length=200) 
    dar = models.IntegerField(null=True, blank=True)

    def agregarProducto(self, prodNombre, cantidad):
        if prodNombre in self.listaCompras:
            self.listaCompras[prodNombre] += cantidad
        else:
            self.listaCompras[prodNombre] = cantidad

        self.total(prodNombre, cantidad)

    def eliminarProducto(self, prodNombre, cantidad):
        if cantidad >= self.listaCompras[prodNombre]:
            self.total(prodNombre, self.listaCompras[prodNombre], operador=-1)
            del self.listaCompras[prodNombre]
        else:
            self.listaCompras[prodNombre] -= cantidad
            self.total(prodNombre, cantidad, operador=-1)
    

    def total(self, prod, cantidad, operador=1):
        precioUnitarioProd = self.productos[prod]['precio de venta']
        subtotal = cantidad * precioUnitarioProd
        self._total += operador * subtotal

class Items(models.Model):
    carrito = models.ForeignKey(CarritoCompras, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.SET_NULL, null=True)
    cantidad = models.IntegerField(default=0)

    def __str__(self):
        return self.carrito.__str__() + " - " + self.producto.__str__()

    def subtotal(self):
        return self.cantidad * self.producto.precio    

class Envio(models.Model):
    carrito = models.ForeignKey(CarritoCompras, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    direccion = models.CharField(max_length=50)
    ciudad = models.CharField(max_length=50)
    pais = models.CharField(max_length=50)
    departamento = models.CharField(max_length=50)
   #metodoPago = models.CharField(max_length=200)
    
    def __str__(self):
        return self.carrito.__str__()

    


    


