import { Image } from "./Image";
import { Localized, WithCustom } from "../utils";

/**
 * Document representing a product search hit.
 */
export interface SuggestedProduct extends WithCustom<OCAPI.Custom.SuggestedProduct> {
  /**
   * The ISO 4217 mnemonic code of the currency.
   */
  currency: string;
  /**
   * The first image of the product hit for the configured viewtype.
   */
  image: Image;
  /**
   * The URL addressing the product.
   */
  link: string;
  /**
   * The sales price of the product. In the case of complex products like a master or a set, this is the minimum price of related child products.
   */
  price: number;
  /**
   * The id (SKU) of the product.
   */
  product_id: string;
  /**
   * The localized name of the product.
   */
  product_name: Localized<string>;
}
