import OCAPI from "sfcc-ocapi-documents";

export const boolFilter1: OCAPI.Filter = {
  bool_filter: {
    operator: "and",
    filters: [
      { term_filter: { field: "id", operator: "is", values: ["myId"] } },
      { term_filter: { field: "coupon_id", operator: "is", values: ["couponOne"] } },
    ],
  },
};

export const boolFilter2: OCAPI.Filter = {
  bool_filter: {
    operator: "or",
    filters: [
      { term_filter: { field: "id", operator: "is", values: ["holidaySale"] } },
      { range_filter: { field: "redemption_count", from: 1, to: 20 } },
    ],
  },
};
