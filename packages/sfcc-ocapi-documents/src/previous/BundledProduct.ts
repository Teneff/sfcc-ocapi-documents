import { Product } from "./Product";
import { WithCustom } from "../utils";

export interface BundledProduct extends WithCustom<OCAPI.Custom.BundledProduct> {
  /**
   * The product being bundled.
   */
  product: Product;
  /**
   * For the product being bundled, the quantity added to the bundle.
   */
  quantity: number;
}
