
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tribus/api/', include('Tribus.urls')),
    path('checkout/api/', include('Checkout.urls')),
    path('marketplace/api/', include('Marketplace.urls')),
    path('productos/api/', include('Productos.urls')),
]
