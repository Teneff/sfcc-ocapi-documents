/**
 * Document representing an optional flash message.
 */
export interface Flash {
  /**
   * maxItems=10	An optional map containing details about this message.
   */
  details?: Record<string, unknown>;
  /**
   * maxLength=400	A short message with information for the user.
   */
  message: string;
  /**
   * maxLength=200	A reference to an element in the document in the form of a path.
   */
  path: string;
  /**
   * mandatory=true, maxLength=100, nullable=false	The type of the message.
   */
  type: string;
}
