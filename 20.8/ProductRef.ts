export interface ProductRef {
  /**
   * mandatory=true, nullable=false
   * The ID of the product reference.
   */
  id: string;
  /**
   * mandatory=true, maxLength=100, nullable=false	The link to the product reference.
   */
  link: string;
}
