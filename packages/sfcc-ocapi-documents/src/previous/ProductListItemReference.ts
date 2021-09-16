import { ProductListLink } from "./ProductListLink";
import { WithCustom } from "../utils";

export interface ProductListItemReference
  extends WithCustom<OCAPI.Custom.ProductListItemReference> {
  /**
   * mandatory=true, nullable=false	The id of the product list item.
   */
  id: string;
  /**
   * The link of the product list, the item is assigned
   */
  product_list: ProductListLink;
}
