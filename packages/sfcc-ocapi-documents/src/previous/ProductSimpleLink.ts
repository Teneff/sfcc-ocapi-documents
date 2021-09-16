import { Localized } from "../utils";

export type ProductSimpleLink = {
  /**
   * The target of the link.
   */
  link: string;
  /**
   * The link title.
   */
  title: Localized<string>;
};
