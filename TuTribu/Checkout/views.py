
from Checkout.serializers import *
from rest_framework import viewsets

class CheckoutAPI(viewsets.ModelViewSet):
    serializer_class = CarritoComprasSerial
    queryset = CarritoCompras.objects.all()


class ItemsAPI(viewsets.ModelViewSet):
    serializer_class = ItemsSerial
    queryset = Items.objects.all()

class EnvioAPI(viewsets.ModelViewSet):
    serializer_class = EnvioSerial
    queryset = Envio.objects.all()