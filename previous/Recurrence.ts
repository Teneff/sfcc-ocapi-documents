import { DayOfWeek, TimeOfDay } from "../utils";

export interface Recurrence {
  /**
   * The days of week for recurrence.
   */
  day_of_week: DayOfWeek;
  /**
   * The time of the day for recurrence.
   */
  time_of_day: TimeOfDay;
}
