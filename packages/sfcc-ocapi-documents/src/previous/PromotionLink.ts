import { Localized } from "../utils/Localized";
import { WithCustom } from "../utils";

export interface PromotionLink extends WithCustom<OCAPI.Custom.PromotionLink> {
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
