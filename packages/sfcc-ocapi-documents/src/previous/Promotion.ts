import { Localized } from "../utils/Localized";
import { PromotionAssignmentInformation } from "./PromotionAssignmentInformation";
import { Tag } from "./Tag";
import { DateTime, WithCustom } from "../utils";

type PromotionClass = "product" | "shipping" | "order";

export interface Promotion extends WithCustom<OCAPI.Custom.Promotion> {
  /**
   * Determines whether or not this promotion is archived.
   * This attribute is allowed to be updated when using the
   * Open Commerce API to update multiple promotions at once.
   */
  archived: boolean;
  /**
   * Information about the assignments and assignment
   * schedules of this promotion
   */
  assignment_information: PromotionAssignmentInformation;
  /**
   * The localized callout message of the promotion.
   */
  callout_msg: Localized<string>;
  /**
   * Returns the value of attribute 'creationDate'.
   */
  creation_date: DateTime;
  /**
   * maxLength=3	The ISO 4217 mnemonic code of the currency
   * this promotion is restricted to. If not populated,
   * then there is no currency restriction on the promotion.
   */
  currency_code: string;
  /**
   * Determines whether or not this promotion ignores
   * the global product exclusions for promotions.
   */
  disable_globally_excluded: boolean;
  /**
   * Determines whether or not this promotion is enabled.
   * This attribute is allowed to be updated when using
   * the Open Commerce API to update multiple promotions at once.
   */
  enabled: boolean;
  /**
   * Determines if the promotion can be combined with other
   * promotions of the same promotion class or if it cannot
   * be combined with any other promotions. This attribute
   * is allowed to be updated when using the Open Commerce API
   * to update multiple promotions at once.
   */
  exclusivity: "no" | "class" | "global";
  /**
   * The id for the promotion.
   */
  id: string;
  /**
   * Returns the value of attribute 'lastModified'.
   */
  last_modified: DateTime;
  /**
   * A URL that is used to get the details of this promotion.
   */
  link: string;
  /**
   * The user supplied name of this promotion, which can be localized
   */
  name: Localized<string>;
  /**
   * The class of the promotion. If the promotion class is modified,
   * then the promotion rule and all of its values, such as whether
   * or not to disable global product exclusions, will be reset.
   */
  promotion_class: PromotionClass;
  /**
   * Returns the list of tags assigned to this promotion.
   * If used to set the tags on a promotion, the promotion
   * will only have the tags passed in the input.
   * Any existing tags will be removed.
   */
  tags: Tag[];
}
