import { Discount } from "./Discount";
import { PromotionLink } from "./PromotionLink";
import { ShippingMethod } from "./ShippingMethod";
import { WithCustom } from "../utils";

export interface ApproachingDiscount extends WithCustom<OCAPI.Custom.ApproachingDiscount> {
  /**
   * The total amount needed to receive the discount.
   */
  condition_threshold: number;
  /**
   * The discount the customer can receive if eligible.
   */
  discount: Discount;
  /**
   * The amount the customer basket contributes towards the purchase condition.
   */
  merchandise_total: number;
  /**
   * The link to details of the promotion associated with this discount.
   */
  promotion_link: PromotionLink;
  /**
   * The unique id of the shipment the discount relates to.
   */
  shipment_id: string;
  /**
   * The shipping methods the promotion relates to.
   */
  shipping_methods: ShippingMethod[];
  /**
   * The type of the approaching discount ("order" or "shipping").
   */
  type: string;
}
