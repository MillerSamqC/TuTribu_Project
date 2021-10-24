from django.db import models
from django.db.models.fields import CharField, IntegerField
from django.db.models import base


# Create your models here.
class Tribu(models.Model):
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(null = True, blank = True)

    def __str__(self):
        return self.nombre

class Post(models.Model):
    postId =  models.CharField(max_length=40) # En este atributo se debe asignar un ID al Post (Decidir si es numérico, alfanumérico o que onda)
    post_fecha_pub = models.DateField(auto_now_add=True)
    postTitulo = models.TextField(null=True, blank=True)
    postDescripcion = models.TextField()
    postImagen = models.ImageField(null=True, blank=True)
    #postTribu = models.ForeignKey(Tribu, on_delete=models.CASCADE)
    numLikes = models.IntegerField(default=0)
    numDislikes = models.IntegerField(default=0)
    numLoves = models.IntegerField(default=0)
    numHates = models.IntegerField(default = 0)


    def __str__(self):  #Facilita la interpretación del contenido a través del dato clave
        return self.postTribu.nombre
    

class Reaccion(models.Model):
    #reactLike = models
    accion = models.CharField(max_length=200)
    imagen = models.ImageField()

    def __str__(self):
        return self.accion

class ReaccionPost(models.Model):
    #reaccion = models.ForeignKey(Reaccion, on_delete=models.SET_NULL, null=True)
    #post = models.ForeignKey(Post, on_delete=models.CASCADE)
    numLikes = models.IntegerField(default=0)
    numDislikes = models.IntegerField(default=0)
    numLoves = models.IntegerField(default=0)
    numHates = models.IntegerField(default = 0)

    #def __str__(self):
        #return self.reaccion

    def numLikes(self):
        self.numLikes +=1
        self.save()

    def numDislikes(self):
        self.numDislikes += 1
        self.save()

    def numLoves(self):
        self.numLoves +=1
        self.save()

    def numHates(self):
        self.numHates += 1
        self.save()


class Comentario(models.Model):
    usuario = models.CharField(max_length=100)
    idPost = models.IntegerField(default=0)
    fecha = models.DateField(auto_now_add=True)
    #post = models.ForeignKey(Post, on_delete=models.CASCADE)
    contenido = models.TextField()

    def __str__(self):
        return self.idPost

class Evento(models.Model):
    nuevo_Evento = models.CharField(max_length=100)
    definir_Evento = models.CharField(max_length=200)
    fecha_Evento = models.DateField()
    horas_evento= models.TimeField(null=True, blank=True)
    costo = models.FloatField(default=0)
    añadir_comentarios = models.TextField(max_length=200)
    localizacion_Evento = models.CharField(max_length=200)
    imagen_Evento = models.ImageField(null=True, blank=True)
    archivoInfo = models.FileField(null=True, blank=True)
    
    def __str__(self):
        return self.nuevo_Evento

class Locacion(models.Model):
    pass

class ChatsPV(models.Model):
    pass
