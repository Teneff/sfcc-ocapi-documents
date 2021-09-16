import { Localized, WithCustom } from "../utils";

export interface SuggestedCategory extends WithCustom<OCAPI.Custom.SuggestedCategory> {
  /**
   * The id of the category.
   */
  id: string;
  /**
   * The URL addressing the category.
   */
  link: string;
  /**
   * The localized name of the category.
   */
  name: Localized<string>;
  /**
   * The name of the parent category.
   */
  parent_category_name: Localized<string>;
}
