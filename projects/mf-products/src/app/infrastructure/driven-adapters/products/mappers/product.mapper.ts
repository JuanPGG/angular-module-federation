import { Product } from "../../../../domain/products/models/product.model";
import { ProductsResponse } from "../models/product.model";

export const productMapper = (products: ProductsResponse[]): Product[] => {
  return products.map((product) => ({
    id: product.id,
    name: product.title,
    description: product.description,
    price: product.price
  }))
}
