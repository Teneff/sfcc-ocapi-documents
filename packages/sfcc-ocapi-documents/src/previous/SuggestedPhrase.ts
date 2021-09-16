import { WithCustom } from "../utils";

/**
 * Document representing a suggested search phrase.
 */
export interface SuggestedPhrase extends WithCustom<OCAPI.Custom.SuggestedPhrase> {
  /**
   * Returns whether this suggested phrase exactly matches the user input search phrase.
   */
  exact_match: boolean;
  /**
   * 	Returns the suggested search phrase.
   */
  phrase: string;
}
