import { WithCustom } from "../utils";

export interface CustomersExtProfile extends WithCustom<OCAPI.Custom.CustomersExtProfile> {
    /**
     * 	maxLength=256
     */
    authentication_provider_id: string;
  
    /**
     * 	maxLength=28
     */
    customer_id: string;
    /**
     * maxLength=256
     */
    email: string;
    /**
     * maxLength=256
     */
    external_id: string;
  }
  