import { WithCustom } from "../utils";
import { ProductDetailsLink } from "./ProductDetailsLink";

export interface BonusDiscountLineItem extends WithCustom<OCAPI.Custom.BonusDiscountLineItem> {
  /**
   * The list of links to the bonus products the customer can choose from.
   */
  bonus_products: ProductDetailsLink[];
  /**
   * The coupon code that triggered the promotion, if applicable.
   */
  coupon_code: string;
  /**
   * The ID of the line item.
   */
  id: string;
  /**
   * The maximum number of bonus items the user can select for this promotion.
   */
  max_bonus_items: number;
  /**
   * The ID of the promotion which triggered the creation of the line item.
   */
  promotion_id: string;
}
