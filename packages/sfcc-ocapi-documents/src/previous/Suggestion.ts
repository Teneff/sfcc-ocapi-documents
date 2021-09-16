import { WithCustom } from "../utils";
import { SuggestedCategory } from "./SuggestedCategory";
import { SuggestedContent } from "./SuggestedContent";
import { SuggestedPhrase } from "./SuggestedPhrase";
import { SuggestedProduct } from "./SuggestedProduct";
import { SuggestedTerms } from "./SuggestedTerms";

export interface Suggestion extends WithCustom<OCAPI.Custom.Suggestion> {
  /**
   * The sorted list of suggested brands. This list can be empty.
   */
  brands: string[];
  /**
   * The sorted list of suggested categories. This list can be empty.
   */
  categories: SuggestedCategory[];
  /**
   * The sorted list of suggested content. This list can be empty.
   */
  content: SuggestedContent[];
  /**
   * The sorted list of suggested custom suggestions. This list can be empty.
   */
  custom_suggestions: string[];
  /**
   * The sorted list of suggested products. This list can be empty.
   */
  products: SuggestedProduct[];
  /**
   * A list of suggested phrases. This list can be empty.
   */
  suggested_phrases: SuggestedPhrase[];
  /**
   * A list of suggested terms. This list can be empty.
   */
  suggested_terms: SuggestedTerms[];
}
