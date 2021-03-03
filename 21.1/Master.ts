export interface Master {
  /**
   * mandatory=true, minLength=1, nullable=false	The URL addressing the master product.
   */
  link: string;
  /**
   * mandatory=true, maxLength=100, minLength=1, nullable=false	The id (SKU) of the master product.
   */
  master_id: string;
  /**
   * A flag indicating whether at least one of the variants is orderable.
   */
  orderable: boolean;
  /**
   * The minimum sales price of the related variants.
   */
  price: number;
  /**
   * The maximum sales of related variants.
   */
  price_max: number;
  /**
   * The minimum sales price per unit of the related variants.
   */
  price_per_unit: number;
  /**
   * The maximum sales price per unit of the related variants.
   */
  price_per_unit_max: number;
}
