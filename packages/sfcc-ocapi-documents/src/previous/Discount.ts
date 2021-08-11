import { WithCustom } from "../utils";

type DiscountType =
  | "percentage"
  | "fixed_price"
  | "amount"
  | "free"
  | "price_book_price"
  | "bonus"
  | "total_fixed_price"
  | "bonus_choice"
  | "percentage_off_options";

export interface Discount extends WithCustom<OCAPI.Custom.Discount> {
  /**
   * The amount that is used with the amount and fixed price types.
   */
  amount: number;
  /**
   * The percentage that is used with percentage types.
   */
  percentage: number;
  /**
   * The price book id that is used with some types.
   */
  price_book_id: string;
  /**
   * mandatory=true, nullable=false	The type of discount.
   */
  type: DiscountType;
}
