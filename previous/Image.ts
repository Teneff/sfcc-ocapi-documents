import { Localized } from "../utils/Localized";

export interface Image {
  /**
   * The localized alternative text of the image.
   */
  alt: Localized<string>;
  /**
   * Base URL for dynamic image service address. This is only shown, if the image is stored on the server and DIS is enabled.
   */
  dis_base_link: string;
  /**
   * mandatory=true, minLength=1, nullable=false	The URL of the actual image.
   */
  link: string;
  /**
   * The localized title of the image.
   */
  title: Localized<string>;
}
