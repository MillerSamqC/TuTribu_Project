from rest_framework import viewsets

from Usuarios.serializers import *

class UsuarioAPI (viewsets.ModelViewSet):
    serializer_class = UserSerial
    queryset = get_user_model().objects.all()


