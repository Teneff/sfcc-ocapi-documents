import { DateTime, WithCustom } from "../utils";

export interface Note extends WithCustom<OCAPI.Custom.Note> {
  /**
   * The author of the note.
   */
  created_by: string;
  /**
   * The creation date of the note.
   */
  creation_date: DateTime;
  /**
   * The ID of the note.
   */
  id: string;
  /**
   * The note's subject.
   * maxLength=256
   */
  subject: string;
  /**
   * The note's text.
   * maxLength=4000
   */
  text: string;
}
