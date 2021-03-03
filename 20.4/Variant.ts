export interface Variant {
  /**
   * mandatory=true, minLength=1, nullable=false	The URL addressing the product.
   */
  link: string;
  /**
   * A flag indicating whether the variant is orderable.
   */
  orderable: boolean;
  /**
   * The sales price of the variant.
   */
  price: number;
  /**
   * The sales price of the variant.
   */
  price_per_unit: number;
  /**
   * mandatory=true, maxLength=100, minLength=1, nullable=false	The id (SKU) of the variant.
   */
  product_id: string;
  /**
   * The actual variation attribute id - value pairs.
   */
  variation_values: Record<string, string>;
}
