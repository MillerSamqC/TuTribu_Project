from Usuarios.models import Perfil
from django.db.models.deletion import CASCADE
from Productos.models import Producto
from django.db import models
from django.contrib.auth.models import get_user_model
import pandas as pd
from bs4 import BeautifulSoup
import requests
import time

class ProductImage(models.Model):
    product = models.ForeignKey(Producto, related_name='images', on_delete=models.CASCADE)
    image = models.ForeignKey(Producto, related_name='images', blank=True, null=True)

    def get_rating(self):
        total = sum(int(review['estrellas']) for review in self.reviews.values())

        return total/ self.reviews.count()


class ProductReview(models.Model):
    product = models.ForeignKey(Producto, related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(Perfil, related_name='reviews', on_delete=models.CASCADE)

    content = models.TextField(blank=True, null=True)
    stars = models.IntegerField()
    date_added = models.DateField(auto_now_add=True)

class Recomendaciones(models.Model):

    def recomendar():
        html_text = requests.get('https://www.google.com').text
        soup = BeautifulSoup(html_text, 'lxml')
        recomienda = soup.find_all('li', class_= 'clearfix recomienda-bx wht-shd-bx')
        for index, recomienda in enumerate(recomienda):

            recomienda_date = recomienda.find('span', 'sim-posted').span.text
            if 'few' in recomienda_date:
                company_name = recomienda.find('h3', class_ = 'recomiendalist-comp-name').text.replace(' ', '')
                search = recomienda.find('span', class_ = 'srp-searcg').text.replace(' ', '')
                more_info = recomienda.header.h2.a['href']
                print(f'Company Name: {company_name.strip()}')
                print(f'Recomendacion: {search.strip()}')
                print(f'More info: {more_info}')


    