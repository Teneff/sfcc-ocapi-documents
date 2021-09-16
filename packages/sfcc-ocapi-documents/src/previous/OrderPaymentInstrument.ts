import { WithCustom } from "../utils";

export interface OrderPaymentInstrument extends WithCustom<OCAPI.Custom.OrderPaymentInstrument> {
  /**
   * The payment transaction amount.
   */
  amount: number;
  /**
   * The authorization status of the payment transaction.
   */
  authorization_status: unknown;
  /**
   * maxLength=256	The bank routing number.
   */
  bank_routing_number: string;
  /**
   * The masked gift certificate code.
   */
  masked_gift_certificate_code: string;
  /**
   * The payment bank account.
   */
  payment_bank_account: PaymentBankAccount;
  /**
   * The payment card.
   */
  payment_card: OrderPaymentCard;
  /**
   * The payment instrument ID.
   */
  payment_instrument_id: string;
  /**
   * maxLength=256	The payment method id. Optional if a customer payment instrument id is specified.
   */
  payment_method_id: string;
}

type PaymentBankAccount = {
  /**
   * The drivers license.
   * maxLength=256
   */
  drivers_license: string;
  /**
   * The driver license state code.
   * maxLength=256
   */
  drivers_license_state_code: string;
  /**
   * The holder of the bank account.
   * maxLength=256
   */
  holder: string;
  /**
   * The payment bank account number.
   * maxLength=256
   */
  number: string;
};

type OrderPaymentCard = {
  /**
   * 	maxLength=256
   */
  card_type: string;
  /**
   * 	 	A flag indicating if the credit card is expired.
   */
  credit_card_expired: boolean;
  /**
   *
   */
  credit_card_token: string;
  /**
   *
   */
  expiration_month: number;
  /**
   *
   */
  expiration_year: number;
  /**
   * 	maxLength=256
   */
  holder: string;
  /**
   * 	maxLength=256
   */
  issue_number: string;
  /**
   * 	maxLength=4000
   */
  number: string;
  /**
   * 	maxLength=4	The security code for the payment card.
   */
  security_code: string;
  /**
   * 	maxIntegerValue=12, minIntegerValue=1
   */
  valid_from_month: number;
  /**
   *
   */
  valid_from_year: number;
};
