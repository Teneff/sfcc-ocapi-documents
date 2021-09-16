import { BonusDiscountLineItem } from "./BonusDiscountLineItem";
import { ChannelType } from "./ChannelType";
import { CouponItem } from "./CouponItem";
import { CustomerInfo } from "./CustomerInfo";
import { GiftCertificateItem } from "./GiftCertificateItem";
import { OrderAddress } from "./OrderAddress";
import { OrderPaymentInstrument } from "./OrderPaymentInstrument";
import { PriceAdjustment } from "./PriceAdjustment";
import { ProductItem } from "./ProductItem";
import { Shipment } from "./Shipment";
import { ShippingItem } from "./ShippingItem";
import { SimpleLink } from "./SimpleLink";
import { DateTime, WithCustom } from "../utils";

type ConfirmationStatus = "not_confirmed" | "confirmed";
type ExportStatus = "not_exported" | "exported" | "ready" | "failed";
type PaymentStatus = "not_paid" | "part_paid" | "paid";
type ShippingStatus = "not_shipped" | "part_shipped" | "shipped";

type Status = "created" | "new" | "open" | "completed" | "cancelled" | "replaced" | "failed";

type Taxation = "gross" | "net";

export interface Order extends WithCustom<OCAPI.Custom.Order> {
  /**
   * The products tax after discounts applying in purchase currency. Adjusted merchandize prices represent the sum of product prices before services such as shipping have been added, but after adjustment from promotions have been added.
   */
  adjusted_merchandize_total_tax: number;
  /**
   * The tax of all shipping line items of the line item container after shipping adjustments have been applied.
   */
  adjusted_shipping_total_tax: number;
  /**
   * The billing address. This property is part of basket checkout information only.
   */
  billing_address: OrderAddress;
  /**
   * The bonus discount line items of the line item container.
   */
  bonus_discount_line_items: BonusDiscountLineItem[];
  /**
   * The sales channel for the order.
   */
  channel_type: ChannelType;
  /**
   * The confirmation status of the order.
   */
  confirmation_status: ConfirmationStatus;
  /**
   * The sorted array of coupon items. This array can be empty.
   */
  coupon_items: CouponItem[];
  /**
   * The name of the user who created the order.
   */
  created_by: string;
  /**
   * Returns the value of attribute 'creationDate'.
   */
  creation_date: DateTime;
  /**
   * The ISO 4217 mnemonic code of the currency.
   */
  currency: string;
  /**
   * The customer information for logged in customers. This property is part of basket checkout information only.
   */
  customer_info: CustomerInfo;
  /**
   * The name of the customer associated with this order.
   */
  customer_name: string;
  /**
   * The export status of the order.
   */
  export_status: ExportStatus;
  /**
   * The external status of the order.
   */
  external_order_status: string;
  /**
   * The sorted array of gift certificate line items. This array can be empty.
   */
  gift_certificate_items: GiftCertificateItem[];
  /**
   * Returns the value of attribute 'lastModified'.
   */
  last_modified: DateTime;
  /**
   * The products total tax in purchase currency. Merchandize total prices represent the sum of product prices before services such as shipping or adjustment from promotions have been added.
   */
  merchandize_total_tax: number;
  /**
   * The notes for the line item container.
   */
  notes: SimpleLink;
  /**
   * The order number of the order.
   */
  order_no: string;
  /**
   * The array of order level price adjustments. This array can be empty.
   */
  order_price_adjustments: PriceAdjustment[];
  /**
   * The order token used to secure the lookup of an order on base of the plain order number. The order token contains only URL safe characters.
   */
  order_token: string;
  /**
   * The total price of the order, including products, shipping and tax. This property is part of basket checkout information only.
   */
  order_total: number;
  /**
   * The payment instruments list for the order.
   */
  payment_instruments: OrderPaymentInstrument[];
  /**
   * The payment status of the order.
   */
  payment_status: PaymentStatus;
  /**
   * The sorted array of product items (up to a maximum of 50 items). This array can be empty.
   */
  product_items: ProductItem[];
  /**
   * The total price of all product items after all product discounts. Depending on taxation policy the returned price is net or gross.
   */
  product_sub_total: number;
  /**
   * The total price of all product items after all product and order discounts. Depending on taxation policy the returned price is net or gross.
   */
  product_total: number;
  /**
   * The array of shipments. This property is part of basket checkout information only.
   */
  shipments: Shipment[];
  /**
   * The sorted array of shipping items. This array can be empty.
   */
  shipping_items: ShippingItem[];
  /**
   * The shipping status of the order.
   */
  shipping_status: ShippingStatus;
  /**
   * The total shipping price of the order after all shipping discounts. Excludes tax if taxation policy is net. Includes tax if taxation policy is gross. This property is part of basket checkout information only.
   */
  shipping_total: number;
  /**
   * The tax of all shipping line items of the line item container before shipping adjustments have been applied.
   */
  shipping_total_tax: number;
  /**
   * The site where the order resides.
   */
  site_id: string;
  /**
   * Gets the source code assigned to this basket.
   */
  source_code: string;
  /**
   * The status of the order.
   */
  status: Status;
  /**
   * The total tax amount of the order. This property is part of basket checkout information only.
   */
  tax_total: number;
  /**
   * The taxation the line item container is based on.
   */
  taxation: Taxation;
}
