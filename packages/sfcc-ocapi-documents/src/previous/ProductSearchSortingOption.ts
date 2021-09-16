import { Localized } from "../utils";

export interface ProductSearchSortingOption {
  /**
   * The id of the sorting option.
   */
  id: string;
  /**
   * The localized label of the sorting option.
   */
  label: Localized<string>;
}
