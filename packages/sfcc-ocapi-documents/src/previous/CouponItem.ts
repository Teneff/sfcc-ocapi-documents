import { WithCustom } from "../utils";

type StatusCode =
  | "coupon_code_already_in_basket"
  | "coupon_code_already_redeemed"
  | "coupon_code_unknown"
  | "coupon_disabled"
  | "redemption_limit_exceeded"
  | "customer_redemption_limit_exceeded"
  | "timeframe_redemption_limit_exceeded"
  | "no_active_promotion"
  | "coupon_already_in_basket"
  | "no_applicable_promotion"
  | "applied"
  | "adhoc";

export interface CouponItem extends WithCustom<OCAPI.Custom.CouponItem> {
  /**
   * mandatory=true, maxLength=256	The coupon code.
   */
  code: string;
  /**
   * The coupon item id.
   */
  coupon_item_id: string;
  /**
   * The status of the coupon item.
   */
  status_code: StatusCode;
  /**
   * A flag indicating whether the coupon item is valid. A coupon line item is valid if the status code is 'applied' or 'no_applicable_promotion'.
   */
  valid: boolean;
}
