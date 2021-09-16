import OCAPI from "sfcc-ocapi-documents";

export const filteredQuery1: OCAPI.Query = {
  filtered_query: {
    query: {
      text_query: { fields: ["coupon_id"], search_phrase: "disabled" },
    },
    filter: {
      term_filter: {
        field: "enabled",
        operator: "is",
        values: [false],
      },
    },
  },
};

export const filteredQuery2: OCAPI.Query = {
  filtered_query: {
    query: { match_all_query: {} },
    filter: {
      bool_filter: {
        operator: "and",
        filters: [
          { term_filter: { field: "id", operator: "is", values: ["myId"] } },
          { term_filter: { field: "coupon_id", operator: "is", values: ["couponOne"] } },
        ],
      },
    },
  },
};

export const filteredQuery3: OCAPI.Query = {
  filtered_query: {
    query: { match_all_query: {} },
    filter: {
      bool_filter: {
        operator: "or",
        filters: [
          { term_filter: { field: "id", operator: "is", values: ["holidaySale"] } },
          { range_filter: { field: "redemption_count", from: 1, to: 20 } },
        ],
      },
    },
  },
};

export const filteredQuery4: OCAPI.Query = {
  filtered_query: {
    query: { match_all_query: {} },
    filter: {
      bool_filter: {
        operator: "not",
        filters: [
          { term_filter: { field: "enabled", operator: "is", values: [false] } },
          { term_filter: { field: "coupon_id", operator: "is", values: ["special"] } },
        ],
      },
    },
  },
};

export const filteredQuery5: OCAPI.Query = {
  filtered_query: {
    query: { text_query: { fields: ["coupon_id"], search_phrase: "disabled" } },
    filter: {
      query_filter: {
        query: {
          term_query: { fields: ["enabled", "active"], operator: "is", values: [false] },
        },
      },
    },
  },
};
