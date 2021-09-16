import { Localized } from "../utils";

/**
 * Document representing a product search refinement value.
 */
export interface ProductSearchRefinementValue {
  /**
   * The localized description of the refinement value.
   */
  description: Localized<string>;
  /**
   * The number of search hits when selecting the refinement value. Can be 0.
   */
  hit_count: number;
  /**
   * The localized label of the refinement value.
   */
  label: Localized<string>;
  /**
   * The optional presentation id associated with the refinement value. The presentation id can be used, for example, to associate an id with an HTML widget.
   */
  presentation_id: string;
  /**
   * The refinement value. In the case of an attribute refinement, this is the bucket, the attribute value, or a value range. In the case of a category refinement, this is the category id. In the case of a price refinement,k this is the price range. Ranges are enclosed by parentheses and separated by ".."; for example, "(100..999)" and "(Aa..Fa)" are valid ranges.
   */
  value: string;
  /**
   * The array of hierarchical refinement values. This array can be empty.
   */
  values: ProductSearchRefinementValue[];
}
