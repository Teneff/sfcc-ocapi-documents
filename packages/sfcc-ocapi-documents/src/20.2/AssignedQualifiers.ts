import { WithCustom } from "../utils";

export interface AssignedQualifiers extends WithCustom<OCAPI.Custom.AssignedQualifiers> {
  /**
   * mandatory=true, maxLength=256, minLength=1, nullable=false
   * The qualifier type.
   */
  qualifier_type: string;
  /**
   * mandatory=true, maxLength=256, minLength=1, nullable=false
   * The qualifier value.
   */
  qualifier_value: string;
}
