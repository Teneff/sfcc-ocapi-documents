import { WithCustom } from "../utils";

export interface Tag extends WithCustom<OCAPI.Custom.Tag> {
  /**
   * The id of the tag.
   */
  tag_id: string;
}
