import { inject, Injectable } from "@angular/core";
import { ProductGateway } from "../gateways/product.gateway";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductUseCase {
  private readonly _productGateway = inject(ProductGateway);

  getProducts(): Observable<Product[]>{
    return this._productGateway.getProducts();
  }

  createProduct(product: Product): Observable<Product>{
    return this._productGateway.createProduct(product);
  }
}
