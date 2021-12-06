import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';

import { ProductService } from './../../../core/services/products/product.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  /*@Input() product!: Product;*/

  products: Product[] = [];
    /*
    {
      id: '1',
      image: './../../../../assets/casco.jpg',
      title: 'Casco Ciclismo Armor On Trail Bicicletas Ruta Mtb Luz Integr',
      ratingStars: 0,
      price: 75_050,
      offerPrice: 79_000,
      description: 'bla bla bla bla bla bla bla bla bla bla'
    },
    {
      id: '2',
      image: './../../../../assets/lampara.jpg',
      title: 'Luz Trasera + Delantera Led Bicicletas Ruta Mtb',
      ratingStars: 5,
      price: 29_500,
      offerPrice: 28_025,
      description: 'bla bla bla bla bla bla bla bla bla bla'
    },
    {
      id: '3',
      image: './../../../../assets/pedales.jpg',
      title: 'Pedales Gw Doble Propósito Bicicletas Ruta Mtb',
      ratingStars: 5,
      price: 149_900,
      offerPrice: 149_900,
      description: 'bla bla bla bla bla bla bla bla bla bla'
    },
    {
      id: '4',
      image: './../../../../assets/pedalesShimano.jpg',
      title: 'Pedales Bicicleta Shimano Original Spd Pd-m520 Ciclismo Mtb',
      ratingStars: 5,
      price: 178_900,
      offerPrice: 178_900,
      description: 'bla bla bla bla bla bla bla bla bla bla'
    },
    {
      id: '5',
      image: './../../../../assets/bicicleta.jpg',
      title: 'Bicicletas Roadmaster Tornado Rin 29 24 Vel Shimano Palanca',
      ratingStars: 0,
      price: 1_849_900,
      offerPrice: 1_849_900,
      description: 'bla bla bla bla bla bla bla bla bla bla'
    },
    {
      id: '6',
      image: './../../../../assets/velocimetro.jpg',
      title: 'Velocímetro Odometro Computador Bicicleta 27 Fun Inalambrico',
      ratingStars: 0,
      price: 1_849_900,
      offerPrice: 1_849_900,
      description: 'bla bla bla bla bla bla bla bla bla bla'
    },
    {
      id: '7',
      image: './../../../../assets/lampara2.jpg',
      title: 'Luz Linterna Bicicleta Delantera Zoom 1000lm Indicadoras',
      ratingStars: 4,
      price: 35_000,
      offerPrice: 28_900,
      description: 'bla bla bla bla bla bla bla bla bla bla'
    },
    {
      id: '8',
      image: './../../../../assets/lampara2.jpg',
      title: 'Luz Linterna Bicicleta Delantera Zoom 1000lm Indicadoras',
      ratingStars: 4,
      price: 35_000,
      offerPrice: 28_900,
      description: 'bla bla bla bla bla bla bla bla bla bla'
    },*/


  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log("Product");
    console.log(id);
  }

  fetchProducts() {
    this.productService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }
}
