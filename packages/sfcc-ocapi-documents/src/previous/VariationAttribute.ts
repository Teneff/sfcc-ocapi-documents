import { Localized, WithCustom } from "../utils";
import { VariationAttributeValue } from "./VariationAttributeValue";

export interface VariationAttribute extends WithCustom<OCAPI.Custom.VariationAttribute> {
  /**
   * mandatory=true, minLength=1, nullable=false	The id of the variation attribute.
   */
  id: string;
  /**
   * The localized display name of the variation attribute.
   */
  name: Localized<string>;
  /**
   * The sorted array of variation values. This array can be empty.
   */
  values: VariationAttributeValue[];
}
