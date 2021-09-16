import { ProductListEvent } from "./ProductListEvent";
import { ProductSimpleLink } from "./ProductSimpleLink";
import { PublicProductListItem } from "./PublicProductListItem";
import { WithCustom } from "../utils";

interface ProductListRegistrant {
  /**
   * The first name of the registrant.
   */
  first_name: string;
  /**
   * The last name of the registrant.
   */
  last_name: string;
  /**
   * The role of the registrant.
   */
  role: string;
}

export interface PublicProductList extends WithCustom<OCAPI.Custom.PublicProductList> {
  /**
   * The coRegistrant of this product list.
   */
  co_registrant: ProductListRegistrant;
  /**
   * Returns the value of attribute 'creationDate'.
   */
  creation_date: Date;
  /**
   * The description of this product list.
   */
  description: string;
  /**
   * The event of this product list.
   */
  event: ProductListEvent;
  /**
   * The id of this product list.
   * 	minLength=1
   */
  id: string;
  /**
   * The resource link to the items of this product list.
   */
  items_link: ProductSimpleLink;
  /**
   * Returns the value of attribute 'lastModified'.
   */
  last_modified: Date;
  /**
   * The name of this product list.
   */
  name: string;
  /**
   * The product list items
   */
  product_list_items: PublicProductListItem[];
  /**
   * The abbreviated shipping address of this product list representing what anonymous user can see.
   */
  product_list_shipping_address: ProductListShippingAddress;
  /**
   * Indicates whether the owner made this product list available for access by other customers.
   */
  public: boolean;
  /**
   * The registrant of this product list.
   */
  registrant: ProductListRegistrant;
  /**
   * The type of the product list.
   */
  type: PublicProductListType;
}

interface ProductListShippingAddress {
  /**
   * The id of this address.
   * mandatory=true, minLength=1, nullable=false
   */
  address_id: string;
  /**
   * The city of this address.
   */
  city: string;
  /**
   * The first name of this address.
   */
  first_name: string;
  /**
   * The last name of this address.
   */
  last_name: string;
}

type PublicProductListType =
  | "wish_list"
  | "gift_registry"
  | "shopping_list"
  | "custom_1"
  | "custom_2"
  | "custom_3";
