import * as Previous from "../20.2";

export interface Customer extends Previous.Customer {
  /**
   * globalPartyId is managed by Customer 360. Its value can be changed.
   */
  global_party_id: string;
}
