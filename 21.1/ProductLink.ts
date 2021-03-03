type ProductLinkType =
  | "cross_sell"
  | "replacement"
  | "up_sell"
  | "accessory"
  | "newer_version"
  | "alt_orderunit"
  | "spare_part"
  | "other";

export interface ProductLink {
  /**
   * The semantic id of the product from which this product link is coming.
   */
  source_product_id: string;
  /**
   * The URL addressing the product from which this product link is coming.
   */
  source_product_link: string;
  /**
   * The semantic id of the product to which this product link is pointing.
   */
  target_product_id: string;
  /**
   * The URL addressing the product to which this product link is pointing.
   */
  target_product_link: string;
  /**
   * The type of this product link.
   */
  type: ProductLinkType;
}
