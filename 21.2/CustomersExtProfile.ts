import { CustomersExtProfile as CustomersExtProfilePrev } from "../20.10/CustomersExtProfile";

export interface CustomersExtProfile extends CustomersExtProfilePrev {
  /**
   * maxLength=256
   */
  first_name: string;
  /**
   * maxLength=256
   */
  last_name: string;
}
