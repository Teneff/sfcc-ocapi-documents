import { Localized, WithCustom } from "../utils";

export interface SuggestedContent extends WithCustom<OCAPI.Custom.SuggestedContent> {
  /**
   * The id of the content.
   */
  id: string;
  /**
   * The URL addressing the content.
   */
  link: string;
  /**
   * The localized name of the content.
   */
  name: Localized<string>;
}
