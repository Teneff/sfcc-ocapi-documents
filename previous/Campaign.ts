export interface Campaign {
  /**
   * maxLength=256, minLength=1	The ID of the campaign.
   */
  campaign_id: string;
  /**
   * 	The array of assigned coupon IDs, not sorted
   */
  coupons: string[];
  /**
   * Returns the value of attribute 'creationDate'.
   */
  creation_date: Date;
  /**
   * The array of assigned customer groups, not sorted
   */
  customer_groups: string[];
  /**
   * maxLength=4000, minLength=0	The description of the campaign.
   */
  description: string;
  /**
   * The enabled flag for campaign.
   */
  enabled: boolean;
  /**
   * The date that the Scenario ends
   */
  end_date: Date;
  /**
   * Returns the value of attribute 'lastModified'.
   */
  last_modified: Date;
  /**
   * link for convenience
   */
  link: string;
  /**
   * The array of assigned source code groups, not sorted
   */
  source_code_groups: string[];
  /**
   * The date that the Scenario begins
   */
  start_date: Date;
}
