import Previous from "../20.4";

export interface Master extends Previous.Master {
  /**
   * The minimum sales price per unit of the related variants.
   */
  price_per_unit: number;
  /**
   * The maximum sales price per unit of the related variants.
   */
  price_per_unit_max: number;
}
