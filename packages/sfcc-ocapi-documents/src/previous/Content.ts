import { Localized, WithCustom } from "../utils";

/**
 * Document representing a content asset.
 */
export interface Content extends WithCustom<OCAPI.Custom.Content> {
  /**
   * The localized content asset description.
   */
  description: Localized<string>;
  /**
   * The id of the content asset.
   * maxLength=256, minLength=1, nullable=false mandatory=true
   */
  id: string;
  /**
   * The localized content asset name.
   */
  name: Localized<string>;
  /**
   * The localized content asset page description.
   */
  page_description: Localized<string>;
  /**
   * The localized content asset page description.
   */
  page_keywords: Localized<string>;
  /**
   * The localized content asset page title.
   */
  page_title: Localized<string>;
}
