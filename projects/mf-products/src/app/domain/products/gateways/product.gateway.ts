import { Observable } from "rxjs";
import { Product } from "../models/product.model";

export abstract class ProductGateway {
  abstract getProducts(): Observable<Product[]>;
  abstract createProduct(product: Product): Observable<Product>;
}
