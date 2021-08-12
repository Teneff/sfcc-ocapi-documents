import { WithCustom } from "../utils";
import { Store } from "./Store";

export interface StoreResult extends WithCustom<OCAPI.Custom.StoreResult> {
  /**
   * The number of search results in the current page.
   */
  count: number;

  data: Store[];
  /**
   * The URL of the next result page.
   */
  next: string;
  /**
   * The URL of the previous result page.
   */
  previous: string;
  /**
   * minIntegerValue=0	The zero-based index of the first search result to include in the document.
   */
  start: number;
  /**
   * The total number of search results.
   */
  total: number;
}
