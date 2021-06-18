import { DateTime } from "../utils";
import { Discount } from "./Discount";

export interface PriceAdjustment {
  /**
   * A price adjustment that provides details of the discount that was applied. This is null for custom price adjustments created without discount details.
   */
  applied_discount: Discount;
  /**
   * The coupon code that triggered the promotion, provided the price adjustment was created as the result of a promotion being triggered by a coupon.
   */
  coupon_code: string;
  /**
   * The user who created the price adjustment.
   */
  created_by: string;
  /**
   * Returns the value of attribute 'creationDate'.
   */
  creation_date: DateTime;
  /**
   * A flag indicating whether this price adjustment was created by custom logic. This flag is set to true unless the price adjustment was created by the promotion engine.
   */
  custom: boolean;
  /**
   * The text describing the item in more detail.
   */
  item_text: string;
  /**
   * Returns the value of attribute 'lastModified'.
   */
  last_modified: DateTime;
  /**
   * A flag indicating whether this price adjustment was created in a manual process.
   * For custom price adjustments created using the shop API, this always returns true. Using the scripting API, however, it is possible to set this to true or false, according to the use case.
   */
  manual: boolean;

  /**
   * The adjustment price.
   */
  price: number;
  /**
   * The price adjustment id (uuid).
   */
  price_adjustment_id: string;
  /**
   * The id of the related promotion. Custom price adjustments can be assigned any promotion id so long it is not used by a price adjustment belonging to the same item and is not used by promotion defined in the promotion engine. If not specified, a promotion id is generated.
   */
  promotion_id: string;
  /**
   * The URL addressing the related promotion.
   */
  promotion_link: string;
  /**
   * The reason why this price adjustment was made.
   */
  reason_code: string;
}
