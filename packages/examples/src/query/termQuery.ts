import OCAPI from "sfcc-ocapi-documents";

export const termQuery1: OCAPI.Query = {
  term_query: {
    fields: ["id"],
    operator: "is",
    values: ["my_id"],
  },
};

export const termQuery2: OCAPI.Query = {
  term_query: {
    fields: ["id"],
    operator: "one_of",
    values: ["my_id", "other_id"],
  },
};

export const termQuery3: OCAPI.Query = {
  term_query: {
    fields: ["description"],
    operator: "is_null",
  },
};

export const termQuery4: OCAPI.Query = {
  term_query: {
    fields: ["id", "description"],
    operator: "one_of",
    values: ["generic", "keyword"],
  },
};
