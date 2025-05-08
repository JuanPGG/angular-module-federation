import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductUseCase } from '../../../domain/products/usecases/product.usecase';
import { Product } from '../../../domain/products/models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  private readonly _productUseCase = inject(ProductUseCase);
  public products = signal<Product[]>([]);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productUseCase.getProducts().subscribe({
      next: (res) => this.products.set(res),
      error: (err) => console.log(err)
    });
  }

}
