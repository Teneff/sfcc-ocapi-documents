import { OptionItem } from "./OptionItem";
import { PriceAdjustment } from "./PriceAdjustment";
import { ProductListItemReference } from "./ProductListItemReference";
import { WithCustom } from "../utils";

export interface ProductItem extends WithCustom<OCAPI.Custom.ProductItem> {
  /**
   * The tax of the product item after adjustments applying.
   */
  adjusted_tax: number;
  /**
   * The base price for the line item, which is the price of the unit before applying adjustments, in the purchase currency. The base price may be net or gross of tax depending on the configured taxation policy.
   */
  base_price: number;
  /**
   * The id of the bonus discount line item this bonus product relates to.
   */
  bonus_discount_line_item_id?: string;
  /**
   * A flag indicating whether the product item is a bonus.
   */
  bonus_product_line_item: boolean;
  /**
   * The array of bundled product items. Can be empty.
   */
  bundled_product_items?: ProductItem[];
  /**
   * Returns true if the item is a gift.
   */
  gift: boolean;
  /**
   * The gift message.
   */
  gift_message?: string;
  /**
   * maxLength=256	The inventory list id associated with this item.
   */
  inventory_id?: string;
  /**
   * The item identifier. Use this to identify an item when updating the item quantity or creating a custom price adjustment for an item.
   */
  item_id: string;
  /**
   * The text describing the item in more detail.
   */
  item_text: string;
  /**
   * The array of option items. This array can be empty.
   */
  option_items: OptionItem[];
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
   * The price of this product line item after considering all dependent price adjustments and prorating all order-level price adjustments. For net pricing the net price is returned. For gross pricing, the gross price is returned.
   */
  price_after_order_discount: number;
  /**
   * maxLength=100
   */
  product_id: string;
  /**
   * The name of the product.
   */
  product_name: string;
  product_list_item?: ProductListItemReference;
  /**
   * mandatory=true, maxNumberValue=999.0, minNumberValue=0.0	The quantity of the products represented by this item.
   */
  quantity: number;
  /**
   * The id of the shipment which includes the product item.
   */
  shipment_id: string;
  /**
   * The reference to the related shipping item if it exists. This is the case if for example when a surcharge is defined for individual products using a particular a shipping method.
   */
  shipping_item_id?: string;
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
