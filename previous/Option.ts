import { Localized } from "../utils/Localized";
import { OptionValue } from "./OptionValue";

export interface Option {
  /**
   * The localized description of the option.
   */
  description: Localized<string>;
  /**
   * mandatory=true, maxLength=100, minLength=1, nullable=false	The id of the option.
   */
  id: string;
  /**
   * The URL to the option image.
   */
  image: string;
  /**
   * The localized name of the option.
   */
  name: Localized<string>;
  /**
   * The array of option values. This array can be empty.
   */
  values: OptionValue[];
}
