import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from './../../../core/services/products/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const newProduct = this.form.value;
      this.productService.createProduct(newProduct)
      .subscribe( (newProduct) => {
        this.router.navigate(['./admin/productos']);
      });
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      prodNombre: ['', [Validators.required]],
      ratingStars: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      descuento: ['', [Validators.required]],
      categorria: ['', [Validators.required]],
      etiqueta: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagenUrl: ['']
    });
  }

}
