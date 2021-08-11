import { WithCustom } from "../utils";

export interface ProductType extends WithCustom<OCAPI.Custom.ProductType> {
  /**
   * A flag indicating whether the product is a bundle.
   */
  bundle: boolean;
  /**
   * A flag indicating whether the product is a standard item.
   */
  item: boolean;
  /**
   * A flag indicating whether the product is a master.
   */
  master: boolean;
  /**
   * A flag indicating whether the product is an option.
   */
  option: boolean;
  /**
   * A flag indicating whether the product is a set.
   */
  set: boolean;
  /**
   * A flag indicating whether the product is a variant.
   */
  variant: boolean;
  /**
   * A flag indicating whether the product is a variation group.
   */
  variation_group: boolean;
}
