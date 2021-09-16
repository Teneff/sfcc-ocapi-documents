import { Localized } from "../utils/Localized";
import { WithCustom } from "../utils";

export interface ProductPromotion extends WithCustom<OCAPI.Custom.ProductPromotion> {
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
   * The promotional price for this product.
   */
  promotional_price: number;
}
