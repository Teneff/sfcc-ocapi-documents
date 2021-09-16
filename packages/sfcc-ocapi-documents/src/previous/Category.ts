import { Localized } from "../utils/Localized";
import { WithCustom } from "../utils";

export interface Category extends WithCustom<OCAPI.Custom.Category> {
  /**
   * Array of subcategories. Can be empty.
   */
  categories: Category[];
  /**
   * The localized description of the category.
   */
  description: Localized<string>;
  /**
   * The id of the category.
   */
  id: string;
  /**
   * The URL to the category image.
   */
  image: string;
  /**
   * The localized name of the category.
   */
  name: Localized<string>;
  /**
   * The localized page description of the category.
   */
  page_description: Localized<string>;
  /**
   * The localized page keywords of the category.
   */
  page_keywords: Localized<string>;
  /**
   * The localized page title of the category.
   */
  page_title: Localized<string>;
  /**
   * The id of the parent category.
   */
  parent_category_id: string;
  /**
   * The URL to the category thumbnail.
   */
  thumbnail: string;
}
