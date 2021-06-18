import { Localized } from "../utils/Localized";

export interface PromotionLink {
  /**
   * The localized call-out message of the promotion.
   */
  callout_msg: Localized<string>;
  /**
   * The localized name of the promotion.
   */
  name: Localized<string>;
  /**
   * The unique id of the promotion.
   */
  promotion_id: string;
}
