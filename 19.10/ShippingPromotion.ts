import { Localized } from "./Localized";

export interface ShippingPromotion {
  /**
   * The localized call-out message of the promotion.
   */
  callout_msg: Localized<string>;
  /**
   * The URL addressing the promotion.
   */
  link: string;
  /**
   * The unique id of the promotion.
   */
  promotion_id: string;
  /**
   * The localized promotion name.
   */
  promotion_name: Localized<string>;
}
