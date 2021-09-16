import { Localized } from "../utils/Localized";
import { WithCustom } from "../utils";

export interface RecommendationType extends WithCustom<OCAPI.Custom.RecommendationType> {
  /**
   * The localized display value of the recommendation type.
   */
  display_value: Localized<string>;
  /**
   * The value of the recommendation type.
   */
  value: number;
}
