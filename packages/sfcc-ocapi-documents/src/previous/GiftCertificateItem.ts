import { WithCustom } from "../utils";

export interface GiftCertificateItem extends WithCustom<OCAPI.Custom.GiftCertificateItem> {
  /**
   * mandatory=true, nullable=false	The certificate item amount.
   */
  amount: number;
  /**
   * Id used to identify this item
   */
  gift_certificate_item_id: string;
  /**
   * maxLength=4000	The certificate's message.
   */
  message: string;
  /**
   * mandatory=true, minLength=1, nullable=false	The recipient's email.
   */
  recipient_email: string;
  /**
   * The recipient's name.
   */
  recipient_name: string;
  /**
   * The sender's name.
   */
  sender_name: string;
  /**
   * The shipment id.
   */
  shipment_id: string;
}
