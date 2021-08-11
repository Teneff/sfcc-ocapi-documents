import * as Previous from "./previous";

export interface Variant extends Previous.Variant {
  /**
   * The sales price of the variant.
   */
  price_per_unit: number;
}
