import OCAPI from "sfcc-ocapi-documents";

export const nestedQuery1: OCAPI.Query = {
  bool_query: {
    must: [
      {
        nested_query: {
          path: "order.shipping_addresses",
          query: {
            bool_query: {
              must: [
                {
                  bool_query: {
                    must: [
                      {
                        term_query: {
                          fields: ["order.shipping_addresses.first_name"],
                          operator: "is",
                          values: ["John"],
                        },
                      },
                    ],
                  },
                },
                {
                  bool_query: {
                    must: [
                      {
                        term_query: {
                          fields: ["order.shipping_addresses.last_name"],
                          operator: "is",
                          values: ["Doe"],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          score_mode: "avg",
        },
      },
    ],
  },
};

export const nestedQuery2: OCAPI.Query = {
  bool_query: {
    must: [
      {
        nested_query: {
          path: "order.shipping_addresses",
          query: {
            bool_query: {
              must: [
                {
                  bool_query: {
                    must: [
                      {
                        term_query: {
                          fields: ["order.shipping_addresses.first_name"],
                          operator: "is",
                          values: ["John"],
                        },
                      },
                    ],
                  },
                },
                {
                  bool_query: {
                    must: [
                      {
                        term_query: {
                          fields: ["order.shipping_addresses.last_name"],
                          operator: "is",
                          values: ["Doe"],
                        },
                      },
                    ],
                    must_not: [
                      {
                        term_query: {
                          fields: ["order.shipping_addresses.last_name"],
                          operator: "is",
                          values: ["Doe"],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          score_mode: "avg",
        },
      },
    ],
  },
};
