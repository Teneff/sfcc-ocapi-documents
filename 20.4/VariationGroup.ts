import * as Previous from "../20.3";

export interface VariationGroup extends Previous.VariationGroup {
  /**
   * The sales price per unit of the variation group.
   */
  price_per_unit: number;
}
