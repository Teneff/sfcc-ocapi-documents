import * as Previous from "./previous";
import { PathRecord } from "./PathRecord";

export interface Category extends Previous.Category {
  /**
   * List of parent categories
   */
  parent_category_tree: PathRecord[];
}
