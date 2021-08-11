import { WithCustom } from "../utils";

export interface ProductRef extends WithCustom<OCAPI.Custom.ProductRef> {
  /**
   * mandatory=true, nullable=false
   * The ID of the product reference.
   */
  id: string;
  /**
   * mandatory=true, maxLength=100, nullable=false	The link to the product reference.
   */
  link: string;
}
