
from django.urls import path, include
from Checkout.views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('checkout', CheckoutAPI)
router.register('items', ItemsAPI)
router.register('envio', EnvioAPI)


urlpatterns = [
    path('crud/', include(router.urls))
]