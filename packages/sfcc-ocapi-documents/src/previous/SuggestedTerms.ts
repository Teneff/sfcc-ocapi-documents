import { SuggestedTerm } from "./SuggestedTerm";

/**
 * Document representing a list of suggested terms for each term of a search phrase.
 */
export interface SuggestedTerms {
  /**
   * Returns the original term that the suggested terms relates to.
   */
  original_term: string;
  /**
   * Returns the suggested terms.
   */
  terms: SuggestedTerm[];
}
