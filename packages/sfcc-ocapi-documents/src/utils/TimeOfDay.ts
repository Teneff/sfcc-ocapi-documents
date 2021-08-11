import { LocalTime } from "./LocalTime";

export type TimeOfDay = {
  /**
   * The time to start from. Time format: HH:mm:ss. Seconds are ignored and set to 0.
   */
  time_from: LocalTime;

  /**
   * The time to end on. Time format: HH:mm:ss. Seconds are ignored and set to 0.
   */
  time_to: LocalTime;
};
