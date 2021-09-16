/**
 * Document representing a suggested term.
 */
export interface SuggestedTerm {
  /**
   * Returns whether this term value is a completion match.
   */
  completed: boolean;
  /**
   * Returns whether this term value is a correction match.
   */
  corrected: boolean;
  /**
   * Returns whether this term value is a exact match.
   */
  exact_match: boolean;
  /**
   * Returns the term value.
   */
  value: string;
}
