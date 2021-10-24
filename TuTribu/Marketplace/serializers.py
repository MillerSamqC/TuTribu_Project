from rest_framework import serializers
from .models import *

class EmpresaSerial(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'

class TiendaSerial(serializers.ModelSerializer):
    class Meta:
        model = Tienda
        fields = '__all__'