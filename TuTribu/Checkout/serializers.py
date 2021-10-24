from rest_framework import serializers
from Checkout.models import *

class CarritoComprasSerial(serializers.ModelSerializer):
    class Meta:
        model = CarritoCompras
        fields = '__all__'

class ItemsSerial(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = '__all__'

class EnvioSerial(serializers.ModelSerializer):
    class Meta:
        model = Envio
        fields = '__all__'
