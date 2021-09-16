import { Localized } from "../utils";
import { ProductSearchRefinementValue } from "./ProductSearchRefinementValue";

export interface ProductSearchRefinement {
  /**
   * The id of the search refinement attribute. In the case of an attribute refinement, this is the attribute id. Custom attributes are marked by the prefix "c_" (for example, "c_refinementColor"). In the case of a category refinement, the id must be "cgid". In the case of a price refinement, the id must be "price".
   * mandatory=true, nullable=false
   */
  attribute_id: string;
  /**
   * The localized label of the refinement.
   */
  label: Localized<string>;
  /**
   * The sorted array of refinement values. This array can be empty.
   */
  values: ProductSearchRefinementValue[];
}
