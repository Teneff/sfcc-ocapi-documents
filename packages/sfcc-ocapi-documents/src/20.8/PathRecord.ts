import { WithCustom } from "../utils";

export interface PathRecord extends WithCustom<OCAPI.Custom.PathRecord> {
  /**
   * The id of the category path.
   */
  id: string;
  /**
   * The name of the category path.
   */
  name: string;
}
