import { Localized } from "./Localized";

export interface RecommendationType {
  /**
   * The localized display value of the recommendation type.
   */
  display_value: Localized<string>;
  /**
   * The value of the recommendation type.
   */
  value: number;
}
