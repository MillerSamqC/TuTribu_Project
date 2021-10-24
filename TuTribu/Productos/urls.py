from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('productos', ProductosAPI)


urlpatterns = [
    path('crud/', include(router.urls))
]
