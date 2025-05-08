import { map, Observable } from "rxjs";
import { ProductGateway } from "../../../domain/products/gateways/product.gateway";
import { Product } from "../../../domain/products/models/product.model";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductsResponse } from "./models/product.model";
import { productMapper } from "./mappers/product.mapper";

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements ProductGateway {
  private readonly _http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this._http
      .get<ProductsResponse[]>('http://api.escuelajs.co/api/v1/products')
      .pipe(map((res) => productMapper(res)));
  }

  createProduct(product: Product): Observable<Product> {
    throw new Error("Method not implemented.");
  }

}
