import { DateTime, WithCustom } from "../utils";
import { PromotionABTestGroupAssignment } from "./PromotionABTestGroupAssignment";
import { PromotionCampaignAssignment } from "./PromotionCampaignAssignment";
import { Schedule } from "./Schedule";

type ScheduleType = "none" | "campaign" | "abtest" | "multiple";

export interface PromotionAssignmentInformation
  extends WithCustom<OCAPI.Custom.PromotionAssignmentInformation> {
  /**
   * If there is only one assignment, and that assignment is
   * an A/B test segment, the id of the A/B test the segment
   * belongs to. Otherwise, empty.
   */
  abtest_id: string;
  /**
   * If there is only one assignment, and that assignment
   * is an A/B test segment, the id of the A/B test segment. Otherwise, empty.
   */
  abtest_segment_id: string;
  /**
   * true if the individual assignment or the multiple
   * assignments are currently active.
   */
  active: boolean;
  /**
   * A list of currently active A/B tests this is assigned to.
   */
  active_abtest_assignments: PromotionABTestGroupAssignment[];
  /**
   * A list of currently active campaigns this is assigned to.
   */
  active_campaign_assignments: PromotionCampaignAssignment[];
  /**
   * If there is only one assignment, and that assignment is
   * a campaign, the id of the campaign. Otherwise, empty.
   */
  campaign_id: string;
  /**
   * The end date of the container of the assignment (a Campaign or ABTest).
   * If schedule_type is schedule_type : "multiple" or schedule_type : "none",
   * then then result will be null. Also, a null date will also return null.
   */
  end_date: DateTime;
  /**
   * The schedule of the assignment (a Campaign or ABTest).
   * If schedule_type is schedule_type : "multiple" or
   * schedule_type : "none", then then result will be null.
   */
  schedule: Schedule;
  /**
   * If there is only one active assignment, or no active
   * assignments and one upcoming assignment, this is that type
   * of assignment (schedule_type : "campaign" or schedule_type : "abtest").
   * If there are no assignments, it will be schedule_type : "none",
   * otherwise, schedule_type : "multiple".
   */
  schedule_type: ScheduleType;
  /**
   * The start date of the container of the assignment (a Campaign or ABTest).
   * If schedule_type is schedule_type : "multiple" or schedule_type : "none",
   * then then result will be null. Also, a null date will also return null.
   */
  start_date: DateTime;
  /**
   * A list of upcoming A/B tests this is assigned to.
   */
  upcoming_abtest_assignments: PromotionABTestGroupAssignment[];
  /**
   * A list of upcoming campaigns this is assigned to.
   */
  upcoming_campaign_assignments: PromotionCampaignAssignment[];
}
