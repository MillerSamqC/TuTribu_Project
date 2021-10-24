from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('empresa', EmpresaAPI)
router.register('tienda', TiendaAPI)

urlpatterns = [
    path('crud/', include(router.urls))
] 