from django.db import models

from django.contrib.auth import get_user_model
from django.db.models.fields import IntegerField
from django.db.models.fields.files import ImageField


class Perfil (models.Model):
    usuario = models.ForeignKey(get_user_model(), on_delete = models.CASCADE)
    nombres = models.CharField(max_length = 200)
    apellidos = models.CharField(max_length = 200)
    direccion = models.CharField(max_length = 200)
    pais = models.CharField(max_length = 200)
    departamento = models.CharField(max_length = 200)
    ciudad = models.CharField(max_length = 200)
    edad = models.IntegerField(blank = True, null = True)
    telefono = models.CharField(max_length = 10)
    avatar = ImageField()
    #tribu = models.CharField(max_length=200)

    def __str__(self):
        return self.usuario.email



