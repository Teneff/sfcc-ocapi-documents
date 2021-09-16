import OCAPI from "sfcc-ocapi-documents";

export const retrieve1: OCAPI.Query = {
  text_query: {
    fields: ["customer_email"],
    search_phrase: "example@non.existing.com",
  },
};
