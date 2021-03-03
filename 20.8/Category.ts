import * as Previous from "../20.4";
import { PathRecord } from "./PathRecord";

export interface Category extends Previous.Category {
  /**
   * List of parent categories
   */
  parent_category_tree: PathRecord[];
}
