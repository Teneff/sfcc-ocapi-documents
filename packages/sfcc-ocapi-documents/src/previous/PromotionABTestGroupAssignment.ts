import { WithCustom } from "../utils";
import { Schedule } from "./Schedule";

export interface PromotionABTestGroupAssignment
  extends WithCustom<OCAPI.Custom.PromotionABTestGroupAssignment> {
  /**
   * 	 	The description for the ABTest assigned to the promotion in the promotionabtestgroupassignment
   */
  abtest_description: string;
  /**
   * 	 	The id for the ABTest assigned to the promotion in the promotionabtestgroupassignment
   */
  abtest_id: string;
  /**
   * 	 	True if the assignment resource is enabled
   */
  enabled: boolean;
  /**
   * 	 	The schedule informaiton for the ABTest. Recurrence information is not supported.
   */
  schedule: Schedule;
  /**
   * 	 	The description for the ABTest segment assigned to the promotion in the promotionabtestgroupassignment
   */
  segment_description: string;
  /**
   * 	 	The id for the ABTest segment assigned to the promotion in the promotionabtestgroupassignment
   */
  segment_id: string;
}
