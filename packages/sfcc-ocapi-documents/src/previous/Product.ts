import { Localized } from "../utils/Localized";
import { ProductLink } from "./ProductLink";
import { ProductPromotion } from "./ProductPromotion";
import { ProductType } from "./ProductType";
import { Recommendation } from "./Recommendation";
import { Variant } from "./Variant";
import { VariationAttribute } from "./VariationAttribute";
import { VariationGroup } from "./VariationGroup";
import { Master } from "./Master";
import { Option } from "./Option";
import { Inventory } from "./Inventory";
import { ImageGroup } from "./ImageGroup";
import { BundledProduct } from "./BundledProduct";
import { WithCustom } from "../utils";

export interface Product extends WithCustom<OCAPI.Custom.Product> {
  /**
   * The product's brand.
   */
  brand: string;
  /**
   * The array of all bundled products of this product.
   */
  bundled_products: BundledProduct[];
  /**
   * The ISO 4217 mnemonic code of the currency.
   */
  currency: string;
  /**
   * The European Article Number.
   */
  ean: string;
  /**
   * mandatory=true, maxLength=100, minLength=1, nullable=false	The id (SKU) of the product.
   */
  id: string;
  /**
   * The array of product image groups.
   */
  image_groups: ImageGroup[];
  /**
   * The array of product inventories explicitly requested via 'inventory_ids' query parameter. This property is only returned in context of the 'availability' expansion.
   */
  inventories: Inventory[];
  /**
   * The site default inventory information. This property is only returned in context of the 'availability' expansion.
   */
  inventory: Inventory;
  /**
   * The localized product long description.
   */
  long_description: Localized<string>;
  /**
   * The products manufacturer name.
   */
  manufacturer_name: string;
  /**
   * The products manufacturer sku.
   */
  manufacturer_sku: string;
  /**
   * The master product information. Only for types master, variation group and variant.
   */
  master: Master;
  /**
   * The minimum order quantity for this product.
   */
  min_order_quantity: number;
  /**
   * The localized product name.
   */
  name: Localized<string>;
  /**
   * The array of product options. This array can be empty. Only for type option.
   */
  options: Option[];
  /**
   * The localized products page description.
   */
  page_description: Localized<string>;
  /**
   * The localized products page description.
   */
  page_keywords: Localized<string>;
  /**
   * The localized products page title.
   */
  page_title: Localized<string>;
  /**
   * The sales price of the product. In case of complex products like master or set this is the minimum price of related child products.
   */
  price: number;
  /**
   * The maximum sales of related child products in case of complex products like master or set.
   */
  price_max: number;
  /**
   * The prices map with price book ids and their values.
   */
  prices: Record<string, number>;
  /**
   * The id of the products primary category.
   */
  primary_category_id: string;
  /**
   * The array of source and target products links information.
   */
  product_links: ProductLink[];
  /**
   * The array of active customer product promotions for this product. This array can be empty. Coupon promotions are not returned in this array.
   */
  product_promotions: ProductPromotion[];
  /**
   * Returns a list of recommendations.
   */
  recommendations: Recommendation[];
  /**
   * The array of set products of this product.
   */
  set_products: Product[];
  /**
   * The localized product short description.
   */
  short_description: Localized<string>;
  /**
   * The steps in which the order amount of the product can be increased.
   */
  step_quantity: number;
  /**
   * The product type information. Can be one or multiple of the following values: item,master,variation_group,variant,bundle,set.
   */
  type: ProductType;
  /**
   * The sales unit of the product.
   */
  unit: string;
  /**
   * The array of actual variants. This array can be empty. Only for types master, variation group and variant.
   */
  variants: Variant[];
  /**
   * Sorted array of variation attributes information. This array can be empty. Only for types master, variation group and variant.
   */
  variation_attributes: VariationAttribute[];
  /**
   * The array of actual variation groups. This array can be empty. Only for types master, variation group and variant.
   */
  variation_groups: VariationGroup[];
  /**
   * The actual variation attribute id - value pairs. Only for type variant and variation group.
   */
  variation_values: Record<string, string>;
}
