export interface OrderPaymentInstrument {
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
  payment_bank_account: unknown;
  /**
   * The payment card.
   */
  payment_card: unknown;
  /**
   * The payment instrument ID.
   */
  payment_instrument_id: string;
  /**
   * maxLength=256	The payment method id. Optional if a customer payment instrument id is specified.
   */
  payment_method_id: string;
}
