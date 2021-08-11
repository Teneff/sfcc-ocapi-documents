import { WithCustom } from "../utils";
export interface AssignedExperiences extends WithCustom<OCAPI.Custom.AssignedExperiences> {
  /**
   * mandatory=true, nullable=false	The experience type.
   */
  experience_type: "promotion" | "pricing";
  /**
   * 	mandatory=true, maxItems=100, minItems=1, nullable=false	A list of experience.
   */
  experience_value: string[];
}
