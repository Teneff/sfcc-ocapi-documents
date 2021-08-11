import { WithCustom } from "../utils";

export interface VariationGroup extends WithCustom<OCAPI.Custom.VariationGroup> {
  /**
   * The URL addressing the product.
   */
  link: string;
  /**
   * A flag indicating whether the variation group is orderable.
   */
  orderable: boolean;
  /**
   * The sales price of the variation group.
   */
  price: number;
  /**
   * The sales price per unit of the variation group.
   */
  price_per_unit: number;
  /**
   * maxLength=100, minLength=1	The id (SKU) of the variation group.
   */
  product_id: string;
  /**
   * The actual variation attribute id - value pairs.
   */
  variation_values: Record<string, string>;
}
