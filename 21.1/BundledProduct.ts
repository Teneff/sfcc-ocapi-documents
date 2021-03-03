import { Product } from "./Product";

export interface BundledProduct {
  /**
   * The product being bundled.
   */
  product: Product;
  /**
   * For the product being bundled, the quantity added to the bundle.
   */
  quantity: number;
}
