import * as Previous from "./previous";

type CatalogCategoryId = string | unknown;

export interface Product extends Previous.Product {
  /**
   * The classification category (default category) of the product
   */
  classification_category: CatalogCategoryId;

  /**
   *
   */
  localized_tax_class_id: string[];

  /**
   * The price per unit of the product
   */
  price_per_unit: number;

  /**
   * The catalog categories that are primary for the product
   */
  primary_categories: CatalogCategoryId[];

  /**
   * The catalog categories that the product is assigned to
   */
  tax_class_id: string | null;

  /**
   * The time when product is valid from.
   */
  valid_from: Previous.SiteSpecific<Date>;

  /**
   * The time when product is valid to.
   */
  valid_to: Previous.SiteSpecific<Date>;
}
