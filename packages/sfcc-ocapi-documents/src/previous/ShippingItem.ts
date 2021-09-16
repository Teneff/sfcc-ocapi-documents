import { PriceAdjustment } from "./PriceAdjustment";
import { WithCustom } from "../utils";

export interface ShippingItem extends WithCustom<OCAPI.Custom.ShippingItem> {
  /**
   * The tax of the product item after adjustments applying.
   */
  adjusted_tax: number;
  /**
   * The base price for the line item, which is the price of the unit before applying adjustments, in the purchase currency. The base price may be net or gross of tax depending on the configured taxation policy.
   */
  base_price: number;
  /**
   * The item identifier. Use this to identify an item when updating the item quantity or creating a custom price adjustment for an item.
   */
  item_id: string;
  /**
   * The text describing the item in more detail.
   */
  item_text: string;
  /**
   * The price of the line item before applying any adjustments. If the line item is based on net pricing then the net price is returned. If the line item is based on gross pricing then the gross price is returned.
   */
  price: number;
  /**
   * Array of price adjustments. Can be empty.
   */
  price_adjustments?: PriceAdjustment[];
  /**
   * The price of the product line item after applying all product-level adjustments. For net pricing the adjusted net price is returned. For gross pricing, the adjusted gross price is returned.
   */
  price_after_item_discount: number;
  /**
   * The identifier of the shipment to which this item belongs.
   */
  shipment_id: string;
  /**
   * The tax of the product item before adjustments applying.
   */
  tax: number;
  /**
   * The price used to calculate the tax for this product item.
   */
  tax_basis: number;
  /**
   * The tax class ID for the product item or null if no tax class ID is associated with the product item.
   */
  tax_class_id: string | null;
  /**
   * The tax rate, which is the decimal tax rate to be applied to the product represented by this item.
   */
  tax_rate: number;
}
