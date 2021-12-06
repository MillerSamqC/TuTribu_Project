from Productos.models import Producto
from django.shortcuts import render, get_object_or_404, redirect
from django.db.models import Q 

from .models import ProductImage, ProductReview

def product_detail(request, category_slug):
    if request.method == 'POST' and request.user.is_authenticated:
        estrellas = request.POST.get('estrellas', 3)
        content = request.POST.get('content', '')

        review = ProductReview.objects.create(producto=Producto, user=request.user, estrellas=estrellas, content=content)

        return redirect('product detail', category_slug=category_slug)
