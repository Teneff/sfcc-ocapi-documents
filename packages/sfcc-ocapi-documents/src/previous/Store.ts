import { Localized, WithCustom } from "../utils";

export interface Store extends WithCustom<OCAPI.Custom.Store> {
  /**
   * The first address of the store.
   * minLength=1
   */
  address1: string;
  /**
   * The second address of the store.
   */
  address2: string;
  /**
   * The city of the store.
   */
  city: string;
  /**
   * The country code of the store.
   */
  country_code: string;
  /**
   * The distance to the given geo location in the unit of attribute distance (miles or kilometers).
   */
  distance: number;
  /**
   * The distance unit the distance attribute is measured in (either in miles or kilometers).
   */
  distance_unit: string;
  /**
   * The email address of the store.
   */
  email: string;
  /**
   * The fax number of the store.
   */
  fax: string;
  /**
   * The id of the store.
   * mandatory=true,
   * maxLength=256,
   * minLength=1,
   * nullable=false
   */
  id: string;
  /**
   * The store image.
   */
  image: string;
  /**
   * The inventory list id associated with this store.
   * maxLength=256
   */
  inventory_id: string;
  /**
   * The latitude of the store.
   * maxNumberValue=90.0
   * minNumberValue=-90.0
   */
  latitude: number;
  /**
   * The longitude of the store.
   * maxNumberValue=180.0,
   * minNumberValue=-180.0
   */
  longitude: number;
  /**
   * The store name.
   */
  name: string;
  /**
   * The phone number of the store.
   */
  phone: string;
  /**
   * Whether this store uses Store Point-of-Sale.
   */
  pos_enabled: boolean;
  /**
   * The postal code of the store.
   */
  postal_code: string;
  /**
   * The state code of the store.
   */
  state_code: string;
  /**
   * The store events.
   */
  store_events: Localized<string>;
  /**
   * The store opening hours.
   */
  store_hours: Localized<string>;
  /**
   * Whether this store should show up in store locator results.
   */
  store_locator_enabled: boolean;
}
