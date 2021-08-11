import { Localized, WithCustom } from "../utils";
import { Image } from "./Image";
import { RecommendationType } from "./RecommendationType";

export interface Recommendation extends WithCustom<OCAPI.Custom.Recommendation> {
  /**
   * The localized callout message of the recommendation.
   */
  callout_msg: Localized<string>;
  /**
   * The image of the recommendation.
   */
  image: Image;
  /**
   * The localized long description of the recommendation.
   */
  long_description: Localized<string>;
  /**
   * The localized name of the recommendation.
   */
  name: Localized<string>;
  /**
   * The recommendation type of the recommendation.
   */
  recommendation_type: RecommendationType;
  /**
   * The recommended item id of the recommendation.
   */
  recommended_item_id: string;
  /**
   * The recommended item link of the recommendation.
   */
  recommended_item_link: string;
  /**
   * The localized short description of the recommendation.
   */
  short_description: Localized<string>;
}
