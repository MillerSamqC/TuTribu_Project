from .serializers import *
from rest_framework import viewsets

class EmpresaAPI(viewsets.ModelViewSet):
    serializer_class = EmpresaSerial
    queryset = Empresa.objects.all()

class TiendaAPI(viewsets.ModelViewSet):
    serializer_class = TiendaSerial
    queryset = Tienda.objects.all()