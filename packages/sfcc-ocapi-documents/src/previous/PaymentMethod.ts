import { Localized } from "../utils";

interface PaymentCardSpec {
  /**
   * The type of the payment card.
   */
  card_type: string;
  /**
   * A flag indicating whether the card number is verified using the Luhn checksum algorithm.
   */
  checksum_verification_enabled: boolean;
  /**
   * The localized description of the payment card.
   */
  description: Localized<string>;
  /**
   * The URL to the image that represents the payment card.
   */
  image: string;
  /**
   * The localized name of the payment card.
   */
  name: Localized<string>;
  /**
   * The sorted list of number lengths (individual lengths as well as length ranges).
   */
  number_lengths: [string];
  /**
   * The sorted list of number prefixes (individual prefixes as well as prefix ranges).
   */
  number_prefixes: [string];
  /**
   * The length of the security code for this card.
   */
  security_code_length: number;
}

type CREDIT_CARD = "CREDIT_CARD";

export interface PaymentMethod<T extends string = string> {
  /**
   * The id of the payment method or card.
   * mandatory=true, maxLength=256, nullable=false
   */
  id: T;
  /**
   * The sorted array of payment cards (included only when the system payment method is CREDIT_CARD).
   */
  cards: T extends CREDIT_CARD ? PaymentCardSpec[] : never;
  /**
   * The localized description of the payment method or card.
   */
  description: Localized<string>;
  /**
   * The URL to the image that represents the payment method or card.
   */
  image: string;
  /**
   * The localized name of the payment method or card.
   */
  name: Localized<string>;
  /**
   * The payment processor ID.
   */
  payment_processor_id: string;
}
