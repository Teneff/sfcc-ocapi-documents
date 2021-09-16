import { AssignedExperiences } from "./AssignedExperiences";
import { AssignedQualifiers } from "./AssignedQualifiers";
import { DateTime, WithCustom } from "../utils";

export interface Assignment extends WithCustom<OCAPI.Custom.Assignment> {
  /**
   * Whether all qualifier required or not.
   */
  all_qualifier_required: boolean;
  /**
   * mandatory=true, maxItems=20, minItems=1, nullable=false	A list of sites assigned to Assignment
   */
  assigned_sites: string[];
  /**
   * mandatory=true, maxLength=4000, minLength=1, nullable=false	The description.
   */
  description: string;
  /**
   * Whether assignment is enabled or not.
   */
  enabled: boolean;
  /**
   * The date that the Assignment ends.
   */
  end_date: DateTime;
  /**
   * mandatory=true, maxItems=20, minItems=1, nullable=false
   */
  experiences: AssignedExperiences[];
  /**
   * mandatory=true, minLength=1, nullable=false	The assignmetn ID.
   */
  id: string;
  /**
   * maxItems=20, minItems=1
   */
  qualifiers: AssignedQualifiers[];
  /**
   * The date that the Assignment begins.
   */
  start_date: DateTime;
}
