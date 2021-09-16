import { Product } from "./Product";
import { WithCustom } from "../utils";
import { ProductSimpleLink } from "./ProductSimpleLink";

export interface PublicProductListItem extends WithCustom<OCAPI.Custom.PublicProductListItem> {
  /**
   * 	 	The id of this product list item.
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
   * The type of the item.
   */
  type: "product" | "gift_certificate";
}
