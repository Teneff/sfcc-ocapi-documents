import { Product } from "./Product";
import { ProductSimpleLink } from "./ProductSimpleLink";
import { WithCustom } from "../utils";

export interface CustomerProductListItem extends WithCustom<OCAPI.Custom.CustomerProductListItem> {
  /**
   * The id of this product list item.
   */
  id: string;
  /**
   * The priority of the item.
   */
  priority: number;
  /**
   * The product item
   */
  product: Product;
  /**
   * A link to the product.
   */
  product_details_link: ProductSimpleLink;
  /**
   * The id of the product.
   */
  product_id: string;
  /**
   * Is this product list item available for access by other customers?
   */
  public: boolean;
  /**
   * The quantity of products already purchased.
   */
  purchased_quantity: number;
  /**
   * The quantity of this product list item.
   * minNumberValue=0.0
   */
  quantity: number;
  /**
   * 	The type of the item.
   */
  type: "product" | "gift_certificate";
}
