import { WithCustom } from "../utils";
import { Localized } from "../utils/Localized";

export interface OptionValue extends WithCustom<OCAPI.Custom.OptionValue> {
    /**
 * A flag indicating whether this option value is the default one.
 */
default: boolean
/**
 * mandatory=true, maxLength=100, minLength=1, nullable=false	The id of the option value.
 */
id: string
/**
 * The localized name of the option value.
 */
name: Localized<string>
/**
 * The effective price of this option value.
 */
price: number
}