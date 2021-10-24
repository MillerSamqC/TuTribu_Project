from .serializers import *
from rest_framework import viewsets

class ProductosAPI(viewsets.ModelViewSet):
    serializer_class = ProductoSerial
    queryset = Producto.objects.all()
