import OCAPI from "sfcc-ocapi-documents";

export const termFilter1: OCAPI.Filter = {
  term_filter: {
    field: "id",
    operator: "is",
    values: ["my_id"],
  },
};

export const termFilter2: OCAPI.Filter = {
  term_filter: {
    field: "id",
    operator: "one_of",
    values: ["my_id", "other_id"],
  },
};

export const termFilter3: OCAPI.Filter = {
  term_filter: {
    field: "description",
    operator: "is_null",
  },
};
