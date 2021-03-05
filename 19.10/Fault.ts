export interface Fault {
  /**
   * A map that provides fault arguments. Data can be used to provide error messages on the client side.
   */
  arguments: Record<string, Record<string, string>>;
  /**
   * The localized display message pattern, if the request parameter display_locale was given
   */
  display_message_pattern: string;
  /**
   * The message text of the java exception.
   */
  message: string;
  /**
   * The name of the java exception.
   */
  type: string;
}
