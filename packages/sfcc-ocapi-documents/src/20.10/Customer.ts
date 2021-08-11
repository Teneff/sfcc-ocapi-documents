import * as Previous from "./previous";

export interface Customer extends Previous.Customer {
  /**
   * The customer's hashed LoginId which is used for activity tracking for logged in customers in conjunction with visitId. This field is READ-ONLY
   */
  hashed_login?: string;

  /**
   * The customer's visitId. This field is READ-ONLY
   */
  visit_id: string;
}
