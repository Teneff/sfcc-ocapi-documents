/**
 * Document that describes a single locale.
 */
export interface Locale {
  /**
   * The uppercase ISO 3166 2-letter country/region code for this Locale. If no country has been specified for this Locale, this value is an empty string.
   */
  country: string;
  /**
   * Flag that is true if this locale is the default to use if a locale is not specified.
   */
  default: boolean;
  /**
   * The display name of this Locale's country, in this Locale's language, not in the session locale's language. If no country has been specified for this Locale, this value is an empty string.
   */
  display_country: string;
  /**
   * The display name of this Locale's language, in this Locale's language, not in the session locale's language. If no country has been specified for this Locale, this value is an empty string.
   */
  display_language: string;
  /**
   * The display name of this Locale, in this Locale's language, not in the session locale's language. If no display name has been specified for this Locale, this value is an empty string.
   */
  display_name: string;
  /**
   * The identifier of the Locale. Combines the language and the country key, concatenated with "-". For example: "en-US". This attribute is the primary key of the class.
   */
  id: string;
  /**
   * The uppercase ISO 3166 3-letter country/region code for this Locale. If no country has been specified for this Locale, this value is an empty string.
   */
  iso3_country: string;
  /**
   * The 3-letter ISO 639 language code for this Locale. If no language has been specified for this Locale, this value is an empty string.
   */
  iso3_language: string;
  /**
   * The lowercase ISO 639 language code for this Locale. If no language has been specified for this Locale, this value is an empty string.
   */
  language: string;
  /**
   * The display name of the Locale. Uses the current request locale to localize the value.
   */
  name: string;
}
