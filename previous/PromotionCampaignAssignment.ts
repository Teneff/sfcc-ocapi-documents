import { Campaign } from "./Campaign";
import { Promotion } from "./Promotion";
import { Schedule } from "./Schedule";

export interface PromotionCampaignAssignment {
  /**
   * The campaign
   */
  campaign: Campaign;
  /**
   * maxLength=256, minLength=1	The id of the campaign.
   */
  campaign_id: string;
  /**
   * 	 	The sorted array of assigned coupon ids.
   */
  coupons: string[];
  /**
   * The sorted array of assigned customer groups.
   */
  customer_groups: string[];
  /**
   * maxLength=4000, minLength=0	The description of the promotion campaign assignment.
   */
  description: string;
  /**
   *  	True if the assignment resource is enabled
   */
  enabled: boolean;
  /**
   *  	link for convenience
   */
  link: string;
  /**
   *  	The promotion
   */
  promotion: Promotion;
  /**
   * maxLength=256, minLength=1	The id of the Promotion.
   */
  promotion_id: string;
  /**
   *  	The rank of promotion campaign assignment
   */
  rank: number;
  /**
   *  	The schedule of the assignment resource
   */
  schedule: Schedule;
  /**
   * 	 	The sorted array of assigned source code groups.
   */
  source_code_groups: string[];
}
