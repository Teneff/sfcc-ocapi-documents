import { WithCustom } from "../utils";

export interface CustomerProductListItemPurchase
  extends WithCustom<OCAPI.Custom.CustomerProductListItemPurchase> {
  /**
   * The id of this purchase.
   */
  id: string;
  /**
   * The order number of this purchase.
   */
  order_no: string;
  /**
   * The id of the product list item this purchase relates to.
   */
  product_list_item_id: string;
  /**
   * The name of the purchaser.
   */
  purchaser_name: string;
  /**
   * minNumberValue=0.0	The quantity of this product list item purchased.
   */
  quantity: number;
}
