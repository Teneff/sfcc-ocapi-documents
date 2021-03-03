import { Image } from "./Image";
import { VariationAttribute } from "./VariationAttribute";

export interface ImageGroup {
  /**
   * The images of the image group.
   */
  images: Image[];
  /**
   * Returns a list of variation attributes applying to this image group.
   */
  variation_attributes: VariationAttribute[];
  /**
   * The image view type.
   */
  view_type: string;
}
