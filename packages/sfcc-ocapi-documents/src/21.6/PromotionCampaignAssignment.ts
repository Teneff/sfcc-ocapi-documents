import * as Previous from "./previous";

export interface PromotionCampaignAssignment extends Previous.PromotionCampaignAssignment {
  /**
   * True if the assigned promotion is coupon based.
   * When set to false, Coupons in the campaign and
   * on the PromotionCampaignAssignment are ignored.
   * The default value is true.
   */
  coupons_based: boolean;

  /**
   * True if the assigned promotion is customer group based.
   * When set to false, Customer Groups in the campaign
   * and on the PromotionCampaignAssignment are ignored.
   * The default value is true.
   */
  customer_groups_based: boolean;

  /**
   * A constant indicating that one or all qualifier conditions
   * must be met in order for the promotion to apply for a
   * given customer. Valid values are "any" and "all".
   */
  required_qualifier: "any" | "all";

  /**
   * True if the assigned promotion is source code group based.
   * When set to false, Source Code Groups in the campaign and
   * on the PromotionCampaignAssignment are ignored.
   * The default value is true.
   */
  source_code_based: boolean;
}
