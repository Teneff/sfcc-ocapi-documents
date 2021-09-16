import { CustomerProductListItem } from "./CustomerProductListItem";
import { ProductListEvent } from "./ProductListEvent";
import { Localized, WithCustom } from "../utils";

/**
 * Result document of product list addresses
 */
type CustomerAddressLink = {
  /**
   * maxLength=256	The id of the address.
   */
  address_id: string;

  /**
   * The target of the link.
   */
  link: string;

  /**
   * The link title.
   */
  title: Localized<string>;
};

type ProductListShippingAddress = {
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
   * The last name of this address
   */
  last_name: string;
};

type CustomerProductListRegistrant = {
  /**
   * The email of the registrant.
   */
  email: string;
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
};

type CustomerProductListItemLink = {
  /**
   * The target of the link.
   */
  link: string;
  /**
   * The link title.
   */
  title: Localized<string>;
};

type CustomerProductListType =
  | "wish_list"
  | "gift_registry"
  | "shopping_list"
  | "custom_1"
  | "custom_2"
  | "custom_3";

export interface CustomerProductList extends WithCustom<OCAPI.Custom.CustomerProductList> {
  /**
   * The coRegistrant of this product list.
   */
  co_registrant: CustomerProductListRegistrant;
  /**
   * Returns the value of attribute 'creationDate'.
   */
  creation_date: Date;
  /**
   * The resource link to the current shipping address of this customer product list.
   */
  current_shipping_address_link: CustomerAddressLink;
  /**
   * The list of customer product list items.
   */
  customer_product_list_items: CustomerProductListItem[];
  /**
   * The description of this product list.
   */
  description: string;
  /**
   * The event of this product list.
   */
  event: ProductListEvent;
  /**
   * minLength=1	The id of this product list.
   */
  id: string;
  /**
   * The resource link to the items of this customer product list.
   */
  items_link: CustomerProductListItemLink;
  /**
   * Returns the value of attribute 'lastModified'.
   */
  last_modified: Date;
  /**
   * The name of this product list.
   */
  name: string;
  /**
   * The resource link to the post event shipping address of this customer product list.
   */
  post_event_shipping_address_link: CustomerAddressLink;
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
  registrant: CustomerProductListRegistrant;
  /**
   * The resource link to the shipping address of this customer product list.
   */
  shipping_address_link: CustomerAddressLink;
  /**
   * The type of the product list.
   */
  type: CustomerProductListType;
}
