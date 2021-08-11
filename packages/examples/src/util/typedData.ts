import { Util } from "sfcc-ocapi-documents";

type Data = {
  prop1: string;
  prop2: {
    nestedProp: boolean;
  };
  prop3: {
    nestedProp: boolean;
  };
};
export const typedData: Util.Typed<Data> = {
  _type: "data",
  prop1: "val",
  prop2: {
    _type: "nested",
    nestedProp: true,
  },
  prop3: {
    nestedProp: false,
  },
};
