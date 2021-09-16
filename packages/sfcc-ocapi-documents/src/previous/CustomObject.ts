import { WithCustom } from "../utils";

export interface CustomObject extends WithCustom<OCAPI.Custom.CustomObject> {
  /**
   * The name of the key property for the custom object.
   */
  key_property: string;
  /**
   * The id of the custom object when the type of the key is number.
   */
  key_value_integer: number;
  /**
   * The id of the custom object when the type of the key is string.
   */
  key_value_string: string;
  /**
   * The id of the object type.
   * maxLength=256
   */
  object_type: string;
}
