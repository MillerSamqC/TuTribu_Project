from django.contrib import admin
from Tribus.models import *
from Productos.models import *
from Usuarios.models import *
from Marketplace.models import *
from Checkout.models import *

admin.site.register(Evento)
admin.site.register(Post)
admin.site.register(Reaccion)
admin.site.register(ReaccionPost)
admin.site.register(Comentario)
admin.site.register(Tribu)

