import { Locale } from "./Locale";

export interface Site {
  /**
   * The list of allowed currencies.
   */
  allowed_currencies: string[];
  /**
   * A list of all allowed site locales.
   */
  allowed_locales: Locale[];
  /**
   * The currency mnemonic of the site.
   */
  default_currency: string;
  /**
   * The default locale of the site.
   */
  default_locale: string;
  /**
   * The HTTP DIS base URL.
   */
  http_dis_base_url: string;
  /**
   * The configured HTTP host name. If no host name is configured the instance host name is returned.
   */
  http_hostname: string;
  /**
   * The HTTP URL to the library content location of the site.
   */
  http_library_content_url: string;
  /**
   * The HTTP URL to the site content location.
   */
  http_site_content_url: string;
  /**
   * The HTTPS DIS base URL.
   */
  https_dis_base_url: string;
  /**
   * The configured HTTPS host name. If no host name is configured the instance host name is returned.
   */
  https_hostname: string;
  /**
   * The HTTPS URL to the library content location of the site.
   */
  https_library_content_url: string;
  /**
   * The HTTPS URL to the site content location.
   */
  https_site_content_url: string;
  /**
   * The id of the site.
   */
  id: string;
  /**
   * The descriptive name for the site.
   */
  name: string;
  /**
   * The site status online/offline.
   */
  status: "online" | "offline";
  /**
   * The time zone of the site (for example, USA/Eastern).
   */
  timezone: string;
  /**
   * The time zone offset from UTC for the current time in milliseconds (for example, -14400000).
   */
  timezone_offset: number;
}
