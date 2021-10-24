from rest_framework import serializers
from .models import *

class ProductoSerial(serializers.ModelSerializer):
    class Meta: 
        model = Producto
        fields = '__all__'