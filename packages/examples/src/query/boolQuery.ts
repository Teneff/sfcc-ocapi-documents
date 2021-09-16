import OCAPI from "sfcc-ocapi-documents";

export const boolQuery1: OCAPI.Query = {
  bool_query: {
    must: [
      { term_query: { fields: ["id"], operator: "is", values: ["foo"] } },
      { text_query: { fields: ["description"], search_phrase: "bar" } },
    ],
  },
};

export const boolQuery2: OCAPI.Query = {
  bool_query: {
    should: [
      { term_query: { fields: ["id"], operator: "is", values: ["foo"] } },
      { text_query: { fields: ["description"], search_phrase: "bar" } },
    ],
  },
};

export const boolQuery3: OCAPI.Query = {
  bool_query: {
    must_not: [
      { term_query: { fields: ["id"], operator: "is", values: ["foo"] } },
      { text_query: { fields: ["description"], search_phrase: "bar" } },
    ],
  },
};

export const boolQuery4: OCAPI.Query = {
  bool_query: {
    must: [
      { text_query: { fields: ["coupon_id"], search_phrase: "limit" } },
      { text_query: { fields: ["description"], search_phrase: "limit per customer" } },
    ],
    must_not: [{ term_query: { fields: ["enabled"], operator: "is", values: [false] } }],
  },
};
