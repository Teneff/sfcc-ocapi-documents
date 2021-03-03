import Previous from "../20.10";

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
