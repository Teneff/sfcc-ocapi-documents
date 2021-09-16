import { Localized, WithCustom } from "../utils";

export interface ContentFolder extends WithCustom<OCAPI.Custom.ContentFolder> {
  /**
   * The localized content folder description.
   */
  description: Localized<string>;
  /**
   * The array of content subfolders. This array can be empty.
   */
  folders: ContentFolder[];
  /**
   * The id of the content folder.
   * mandatory=true, maxLength=256, minLength=1, nullable=false
   */
  id: string;
  /**
   * The localized content folder name.
   */
  name: Localized<string>;
  /**
   * The localized content folder page description.
   */
  page_description: Localized<string>;
  /**
   * The localized content folder page description.
   */
  page_keywords: Localized<string>;
  /**
   * The localized content folder page title.
   */
  page_title: Localized<string>;
  /**
   * The id of the parent content folder.
   */
  parent_folder_id: string;
}
