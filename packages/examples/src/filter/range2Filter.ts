import OCAPI from "sfcc-ocapi-documents";

export const range2Filter1: OCAPI.Filter = {
  range2_filter: {
    from_field: "valid_from",
    to_field: "valid_to",
    filter_mode: "overlap",
    from_value: "2007-01-01T00:00:00.000Z",
    to_value: "2017-01-01T00:00:00.000Z",
  },
};
