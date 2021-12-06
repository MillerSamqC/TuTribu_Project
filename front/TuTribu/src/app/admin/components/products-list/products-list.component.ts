import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../core/services/products/product.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'prodNombre', 'precio', 'actions'];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
    .subscribe(rta => {
        this.fetchProducts();
      });
  }
}
