import { DateTime } from "../utils";
import { Recurrence } from "./Recurrence";

export interface Schedule {
  /**
   * The date to end of validity. ISO8601 date time format: yyyy-MM-dd'T'HH:mm:ssZ.
   */
  end_date: DateTime;
  /**
   * The recurrence of the schedule by day of week and time of day. Not all schedules will support a recurrence.
   */
  recurrence: Recurrence;
  /**
   * The date to start validity. ISO8601 date time format: yyyy-MM-dd'T'HH:mm:ssZ.
   */
  start_date: DateTime;
}
