import * as Previous from "../19.10";

export interface Order extends Previous.Order {
  /**
   * globalPartyId is managed by Customer 360. Its value can be changed.
   */
  global_party_id: string;
}
