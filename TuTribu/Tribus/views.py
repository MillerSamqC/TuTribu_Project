from rest_framework import viewsets
from rest_framework.serializers import Serializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


from Tribus.serializers import *

# Create your views here.

class TribuAPI(viewsets.ModelViewSet):
    serializer_class = TribuSerial
    queryset = Tribu.objects.all() #Contiene los objetos que se desean enviar a través del API

class PostAPI(viewsets.ModelViewSet):
    serializer_class = PostSerial
    queryset = Post.objects.all()

class ReaccionAPI(viewsets.ModelViewSet):
    serializer_class = ReaccionSerial
    queryset = Reaccion.objects.all()

class ReaccionPostAPI(viewsets.ModelViewSet):
    serializer_class = ReaccionPostSerial
    queryset = ReaccionPost.objects.all()
    
class ComentarioAPI(viewsets.ModelViewSet):
    serializer_class = ComentarioSerial
    queryset = Comentario.objects.all()

class EventoAPI(viewsets.ModelViewSet):
    serializer_class = EventoSerial
    queryset = Evento.objects.all()

class AvatarAPI(viewsets.ModelViewSet):
    serializer_class = AvatarNTSerial
    queryset = AvatarNT.objects.all()

class AperturaAPI(viewsets.ModelViewSet):
    serializer_class = AperturaVotacionSerial
    queryset = AperturaVotacion.objects.all()
    
@api_view(['GET', 'PUT', 'DELETE'])
def Votacion_detail(request, id):
    """
    Retrieve, update or delete a code Votacion.
    """
    try:
        Votacion = AperturaVotacion.objects.get(pk=id)
        Votacion.compEstado()
    except AperturaVotacion.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AperturaVotacionSerial(Votacion)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AperturaVotacionSerial(Votacion, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Votacion.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
