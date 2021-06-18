import * as Previous from "./previous";

export interface VariationGroup extends Previous.VariationGroup {
  /**
   * The sales price per unit of the variation group.
   */
  price_per_unit: number;
}
