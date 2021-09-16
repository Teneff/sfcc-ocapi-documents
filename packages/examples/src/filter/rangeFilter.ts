import OCAPI from "sfcc-ocapi-documents";

export const rangeFilter1: OCAPI.Filter = {
  range_filter: {
    field: "redemption_count",
    from: 0,
    to: 10,
    from_inclusive: false,
  },
};
