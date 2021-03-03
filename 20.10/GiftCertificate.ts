type Status = "pending" | "issued" | "partially_redeemed" | "redeemed";

export interface GiftCertificate {
  /**
   * The gift certificate original amount.
   */
  amount: number;
  /**
   * The gift certificate balance.
   */
  balance: number;
  /**
   * The gift certificate description.
   */
  description: string;
  /**
   * Is the gift certificate is enabled?
   */
  enabled: boolean;
  /**
   * The masked gift certificate code.
   */
  masked_gift_certificate_code: string;
  /**
   * The merchant ID.
   */
  merchant_id: string;
  /**
   * The message.
   */
  message: string;
  /**
   * The recipient email.
   */
  recipient_email: string;
  /**
   * The recipient name.
   */
  recipient_name: string;
  /**
   * The sender name.
   */
  sender_name: string;
  /**
   * The gift certificate status.
   */
  status: Status;
}
