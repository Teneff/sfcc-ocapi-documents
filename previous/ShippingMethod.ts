import { Localized } from "../utils";
import { ShippingPromotion } from "./ShippingPromotion";

export interface ShippingMethod {
  /**
   * The localized description of the shipping method.
   */
  description: Localized<string>;
  /**
   * The external shipping method.
   */
  external_shipping_method: string;
  /**
   * mandatory=true, maxLength=256, nullable=false	The shipping method id.
   */
  id: string;
  /**
   * The localized name of the shipping method.
   */
  name: Localized<string>;
  /**
   * The shipping cost total, including shipment level costs and product level fix and surcharge costs.
   */
  price: number;
  /**
   * The array of active customer shipping promotions for this shipping method. This array can be empty.
   */
  shipping_promotions: ShippingPromotion[];
}
