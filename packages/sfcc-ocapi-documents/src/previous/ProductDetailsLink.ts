import { Localized } from "../utils/Localized";
import { WithCustom } from "../utils";

export interface ProductDetailsLink extends WithCustom<OCAPI.Custom.ProductDetailsLink> {
  /**
   * The target of the link.
   */
  link: string;
  /**
   * The description of the product.
   */
  product_description: Localized<string>;
  /**
   * mandatory=true, nullable=false	The id of the product.
   */
  product_id: string;
  /**
   * The name of the product.
   */
  product_name: Localized<string>;
  /**
   * The link title.
   */
  title: Localized<string>;
}
