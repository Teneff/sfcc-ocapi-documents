import { Image } from "./Image";
import { Localized } from "./Localized";

export interface VariationAttributeValue {
  /**
   * The localized description of the variation value.
   */
  description: Localized<string>;
  /**
   * The first product image for the configured viewtype and this variation value.
   */
  image: Image;
  /**
   * The first product image for the configured viewtype and this variation value. (typically the swatch image)
   */
  image_swatch: Image;
  /**
   * The localized display name of the variation value.
   */
  name: Localized<string>;
  /**
   * A flag indicating whether at least one variant with this variation attribute value is available to sell.
   */
  orderable: boolean;
  /**
   * mandatory=true, minLength=1, nullable=false	The actual variation value.
   */
  value: string;
}
