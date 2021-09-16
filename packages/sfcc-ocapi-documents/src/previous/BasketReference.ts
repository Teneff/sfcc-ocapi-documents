/**
 * Reference to a basket
 */
export interface BasketReference {
  /**
   * The unique identifier for the basket.
   */
  basket_id: string;
  /**
   * The unique identifier for the customer
   * maxLength=100, nullable=false
   */
  customer_id: string;
}
