import { Image } from "./Image";
import { Localized } from "../utils/Localized";
import { ProductRef } from "../20.8/ProductRef";
import { ProductType } from "./ProductType";
import { VariationAttribute } from "./VariationAttribute";
import { WithCustom } from "../utils";

export interface ProductSearchHit extends WithCustom<OCAPI.Custom.ProductSearchHit> {
  /**
   * The ISO 4217 mnemonic code of the currency.
   */
  currency: string;
  /**
   * The type information for the search hit.
   */
  hit_type: string;
  /**
   * The first image of the product hit for the configured viewtype.
   */
  image: Image;
  /**
   * The URL addressing the product.
   */
  link: string;
  /**
   * A flag indicating whether the product is orderable.
   */
  orderable: boolean;
  /**
   * The sales price of the product. In case of complex products like master or set this is the minimum price of related child products.
   */
  price: number;
  /**
   * The maximum sales of related child products in case of complex products like master or set.
   */
  price_max: number;
  /**
   * The prices map with price book ids and their values.
   */
  prices: Record<string, number>;
  /**
   * The id (SKU) of the product.
   */
  product_id: string;
  /**
   * The localized name of the product.
   */
  product_name: Localized<string>;
  /**
   * The type information for the product.
   */
  product_type: ProductType;
  /**
   * The first represented product.
   */
  represented_product: ProductRef;
  /**
   * All the represented products.
   */
  represented_products: ProductRef[];
  /**
   * The array of represented variation attributes (for the master product only). This array can be empty.
   */
  variation_attributes: VariationAttribute[];
}
