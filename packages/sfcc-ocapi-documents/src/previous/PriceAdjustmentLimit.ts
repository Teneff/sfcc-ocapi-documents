type PriceAdjustmentLimitType = "item" | "shipping" | "order";

export interface PriceAdjustmentLimit {
  /**
   * The value for the currency or null if no currency value is specified.
   */
  amount: number;
  /**
   * Returns the currency of the Price Adjustment Limit or null if not applicable.
   *
   * Will be null if this is a percent limit only.
   *
   * Price adjustment limits can be given up to a fixed amount (unit=a currency unit).
   */
  currency: string;

  /**
   * Returns percentage value of the Price Adjustment Limit or null if not applicable.
   *
   * Will be null if this is a currency limit only.
   */
  percent: number;
  /**
   * The Price Adjustment Limit type - ITEM, SHIPPING or ORDER. It identifies the level at which the Price Adjustment is applicable.
   */
  type: PriceAdjustmentLimitType;
}
