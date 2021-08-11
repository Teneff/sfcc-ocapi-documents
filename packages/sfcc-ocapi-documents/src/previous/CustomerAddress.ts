import { DateTime, WithCustom } from "../utils";

export interface CustomerAddress extends WithCustom<OCAPI.Custom.CustomerAddress> {
  /**
   * maxLength=256	The first address.
   */
  address1: string;
  /**
   * maxLength=256	The second address.
   */
  address2: string;
  /**
   * maxLength=256	The id of the address as specified by account owner.
   */
  address_id: string;
  /**
   * maxLength=256	The city.
   */
  city: string;
  /**
   * maxLength=256	The company name.
   */
  company_name: string;
  /**
   * maxLength=2	The two-letter ISO 3166-1 (Alpha-2) country code.
   */
  country_code: string;
  /**
   * Returns the value of attribute 'creationDate'.
   */
  creation_date: DateTime;
  /**
   * maxLength=256	The first name.
   */
  first_name: string;
  /**
   * maxLength=256	The full name.
   */
  full_name: string;
  /**
   * maxLength=256	The job title.
   */
  job_title: string;
  /**
   * Returns the value of attribute 'lastModified'.
   */
  last_modified: DateTime;
  /**
   * maxLength=256	The last name.
   */
  last_name: string;
  /**
   * maxLength=32	The phone number.
   */
  phone: string;
  /**
   * maxLength=256	The post box.
   */
  post_box: string;
  /**
   * maxLength=256	The postal code.
   */
  postal_code: string;
  /**
   * The preferred attribute.
   */
  preferred: boolean;
  /**
   * maxLength=256	The salutation.
   */
  salutation: string;
  /**
   * maxLength=256	The second name.
   */
  second_name: string;
  /**
   * maxLength=256	The state code.
   */
  state_code: string;
  /**
   * maxLength=256	The suffix.
   */
  suffix: string;
  /**
   * maxLength=32	The suite.
   */
  suite: string;
  /**
   * maxLength=256	The title.
   */
  title: string;
}
