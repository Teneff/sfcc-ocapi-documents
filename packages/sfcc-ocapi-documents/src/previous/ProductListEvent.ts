import { DateTime } from "../utils";

export interface ProductListEvent {
  /**
   * The city where the event takes place.
   */
  city: string;
  /**
   * The country where the event takes place.
   */
  country: string;
  /**
   * The date when the event takes place.
   */
  date: DateTime;
  /**
   * The federal state where the event takes place.
   */
  state: string;
  /**
   * Type of the event to celebrate.
   */
  type: string;
}
