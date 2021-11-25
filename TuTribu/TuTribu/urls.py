
from django.contrib import admin
from django.urls import path, include
from Tribus.views import Votacion_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tribus/api/', include('Tribus.urls')),
    path('checkout/api/', include('Checkout.urls')),
    path('marketplace/api/', include('Marketplace.urls')),
    path('productos/api/', include('Productos.urls')),
    path('crud/Votacion/<int:id>', Votacion_detail),
]
