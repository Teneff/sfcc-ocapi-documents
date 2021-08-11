import { WithCustom } from "../utils";

export interface SimpleLink extends WithCustom<OCAPI.Custom.SimpleLink> {
    /**
     * The link to the resource.
     */
    link: string
}