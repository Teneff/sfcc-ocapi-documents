import * as Previous from "./previous";

export interface Product extends Previous.Product {
  /**
   * The sales price per unit of the product. In case of complex products like master or set this is the minimum price per unit of related child products.
   */
  price_per_unit: number;
  /**
   * The maximum sales price per unit of related child products in case of complex products like master or set.
   */
  price_per_unit_max: number;
  /**
   * The unitMeasure of the product.
   */
  unit_measure: string;
  /**
   * upc	string	 	The Universal Product Code.
   */
  unit_quantity: number;
}
