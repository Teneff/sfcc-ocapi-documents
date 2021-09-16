import { OrderAddress } from "./OrderAddress";
import { ShippingMethod } from "./ShippingMethod";
import { WithCustom } from "../utils";

type ShippingStatus = "not_shipped" | "shipped";

export interface Shipment extends WithCustom<OCAPI.Custom.Shipment> {
  /**
   * The products tax after discounts applying in purchase currency. Adjusted merchandize prices represent the sum of product prices before services such as shipping have been added, but after adjustment from promotions have been added.
   * Note that order level adjustments are considered if Discount Taxation preference is set to "Tax Products and Shipping Only Based on Adjusted Price".
   */
  adjusted_merchandize_total_tax: number;

  /**
   * The tax of all shipping line items of the line item container after shipping adjustments have been applied.
   */
  adjusted_shipping_total_tax: number;
  /**
   * A flag indicating whether the shipment is a gift.
   */
  gift: boolean;
  /**
   * The gift message.
   */
  gift_message?: string;
  /**
   * The products total tax in purchase currency. Merchandize total prices represent the sum of product prices before services such as shipping or adjustment from promotions have been added.
   */
  merchandize_total_tax: number;
  /**
   * The total price of all product items after all product discounts. Depending on taxation policy the returned price is net or gross.
   */
  product_sub_total: number;
  /**
   * The total price of all product items after all product and order discounts. Depending on taxation policy the returned price is net or gross.
   */
  product_total: number;
  /**
   * The order specific id to identify the shipment.
   */
  shipment_id: string;
  /**
   * Returns the shipment number for this shipment. This number is automatically generated.
   */
  shipment_no?: string;
  /**
   * The total price of the shipment, including products, shipping and tax.
   * Note that order level adjustments are not considered.
   */
  shipment_total: number;

  /**
   * The shipping address.
   */
  shipping_address?: OrderAddress;
  /**
   * The shipping method.
   */
  shipping_method?: ShippingMethod;
  /**
   * The shipping status of the shipment.
   */
  shipping_status: ShippingStatus;
  /**
   * The total shipping price of the shipment after all shipping discounts. Excludes tax if taxation policy is net. Includes tax if taxation policy is gross.
   */
  shipping_total: number;
  /**
   * The tax of all shipping line items of the line item container before shipping adjustments have been applied.
   */
  shipping_total_tax: number;
  /**
   * The total tax amount of the shipment.
   * Note that order level adjustments are considered if Discount Taxation preference is set to "Tax Products and Shipping Only Based on Adjusted Price".
   */
  tax_total: number;

  /**
   * The tracking number of the shipment.
   */
  tracking_number?: string;
}
