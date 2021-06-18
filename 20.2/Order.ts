import * as Previous from "./previous";

export interface Order extends Previous.Order {
  /**
   * globalPartyId is managed by Customer 360. Its value can be changed.
   */
  global_party_id: string;
}
