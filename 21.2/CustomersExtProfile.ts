import * as Previous from "./previous";

export interface CustomersExtProfile extends Previous.CustomersExtProfile {
  /**
   * maxLength=256
   */
  first_name: string;
  /**
   * maxLength=256
   */
  last_name: string;
}
