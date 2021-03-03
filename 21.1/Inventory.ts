export interface Inventory {
  /**
   * The ats of the product. If it is infinity, the return value is 999999. The value can be overwritten by the OCAPI setting 'product.inventory.ats.max_threshold'.
   */
  ats: number;
  /**
   * A flag indicating whether the product is back orderable.
   */
  backorderable: boolean;
  /**
   * mandatory=true, nullable=false	The inventory id.
   */
  id: string;
  /**
   * A flag indicating the date when the product will be in stock.
   */
  in_stock_date: Date;
  /**
   * A flag indicating whether at least one of products is available to sell.
   */
  orderable: boolean;
  /**
   * A flag indicating whether the product is pre orderable.
   */
  preorderable: boolean;
  /**
   * The stock level of the product. If it is infinity, the return value is 999999. The value can be overwritten by the OCAPI setting 'product.inventory.stock_level.max_threshold'.
   */
  stock_level: number;
}
