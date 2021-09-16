import { Localized, WithCustom } from "../utils";

type PublicProductListLinkType =
  | "wish_list"
  | "gift_registry"
  | "shopping_list"
  | "custom_1"
  | "custom_2"
  | "custom_3";

export interface PublicProductListLink extends WithCustom<OCAPI.Custom.PublicProductListLink> {
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
   * The link title.
   */
  title: Localized<string>;
  /**
   * The type of the product list.
   */
  type: PublicProductListLinkType;
}
