import * as Previous from "../20.3";

export interface Variant extends Previous.Variant {
  /**
   * The sales price of the variant.
   */
  price_per_unit: number;
}
