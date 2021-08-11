import { WithCustom } from "../utils";

export interface CustomerInfo extends WithCustom<OCAPI.Custom.CustomerInfo> {
  /**
   * maxLength=100	The customer's number (id).
   */
  customer_id: string;
  /**
   * customer_no	string	maxLength=100	The customer's number (id).
   */
  customer_name?: string;
  /**
   * mandatory=true, nullable=false	The customer's email address.
   */
  email: string;
}
