import { Localized } from "../utils/Localized";
import { WithCustom } from "../utils";

type ProductListLinkType =
  | "wish_list"
  | "gift_registry"
  | "shopping_list"
  | "custom_1"
  | "custom_2"
  | "custom_3";

export interface ProductListLink extends WithCustom<OCAPI.Custom.ProductListLink> {
  /**
   * The description of this product list.
   */
  description: string;
  /**
   * The target of the link.
   */
  link: string;
  /**
   * The name of this product list.
   */
  name: string;
  /**
   * A flag indicating whether the owner made this product list available for access by other customers.
   */
  public: boolean;
  /**
   * The link title.
   */
  title: Localized<string>;
  /**
   * The type of the product list.
   */
  type: ProductListLinkType;
}
