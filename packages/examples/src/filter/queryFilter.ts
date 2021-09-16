import OCAPI from "sfcc-ocapi-documents";

export const queryFilter1: OCAPI.Filter = {
  query_filter: {
    query: {
      term_query: { fields: ["enabled", "active"], operator: "is", values: [false] },
    },
  },
};
