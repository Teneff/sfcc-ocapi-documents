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

type DiscountAmount =
  | {
      /**
       * The amount that is used with the amount and fixed price types.
       */
      amount: number;
    }
  | {
      /**
       * The percentage that is used with percentage types.
       */
      percentage: number;
    };

export type Discount = WithCustom<OCAPI.Custom.Discount> &
  DiscountAmount & {
    /**
     * The price book id that is used with some types.
     */
    price_book_id?: string;
    /**
     * mandatory=true, nullable=false	The type of discount.
     */
    type: DiscountType;
  };
