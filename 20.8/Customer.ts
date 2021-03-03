import { CustomerAddress } from "./CustomerAddress";
import { CustomerPaymentInstrument } from "./CustomerPaymentInstrument";

type AuthType = "guest" | "registered";

export interface Customer {
  /**
   * The customer's addresses.
   */
  addresses: CustomerAddress[];
  /**
   * The customer's authorization type (indicates if the customer is a guest or a registered customer).
   */
  auth_type: AuthType;
  /**
   * The customer's birthday.
   */
  birthday: Date;
  /**
   * maxLength=256	The customer's company name.
   */
  company_name: string;
  /**
   * Returns the value of attribute 'creationDate'.
   */
  creation_date: Date;
  /**
   * maxLength=28	The customer's number (id). Both registered and guest customers have a customer id.
   */
  customer_id: string;
  /**
   * maxLength=100	The customer's number (id). Only a registered customer has a customer number.
   */
  customer_no: string;
  /**
   * maxLength=256	The customer's email address.
   */
  email: string;
  /**
   * A flag indicating whether this customer is is enabled and can log in.
   */
  enabled: boolean;
  /**
   * maxLength=32	The customer's fax number. The length is restricted to 32 characters.
   */
  fax: string;
  /**
   * maxLength=256	The customer's first name.
   */
  first_name: string;
  /**
   * The customer's gender.
   */
  gender: number;
  /**
   * maxLength=256	The customer's job title.
   */
  job_title: string;
  /**
   * The time when the customer last logged in.
   */
  last_login_time: Date;
  /**
   * Returns the value of attribute 'lastModified'.
   */
  last_modified: Date;
  /**
   * maxLength=256	The customer's last name.
   */
  last_name: string;
  /**
   * The time when the customer last visited.
   */
  last_visit_time: Date;
  /**
   * maxLength=256	The customer's login.
   */
  login: string;
  /**
   * The customer's note.
   */
  note: string;
  /**
   * The customer's payment instruments.
   */
  payment_instruments: CustomerPaymentInstrument[];
  /**
   * maxLength=32	The customer's business phone number.
   */
  phone_business: string;
  /**
   * maxLength=32	The customer's home phone number.
   */
  phone_home: string;
  /**
   * maxLength=32	The customer's mobile phone number.
   */
  phone_mobile: string;
  /**
   * The customer's preferred locale.
   */
  preferred_locale: string;
  /**
   * The time when the customer logged in previously.
   */
  previous_login_time: Date;
  /**
   * The time when the customer last visited the store.
   */
  previous_visit_time: Date;
  /**
   * maxLength=256	The salutation to use for the customer.
   */
  salutation: string;
  /**
   * maxLength=256	The customer's second name.
   */
  second_name: string;
  /**
   * maxLength=256	The customer's suffix (for example, "Jr." or "Sr.").
   */
  suffix: string;
  /**
   * maxLength=256	The customer's title (for example, "Mrs" or "Mr").
   */
  title: string;
}
