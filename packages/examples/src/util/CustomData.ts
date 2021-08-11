import { Util } from "sfcc-ocapi-documents";

type CustomData = {
  c_attr1: "value 1";
  attr2: boolean;
};
export const obj: Util.WithCustom<CustomData> = {
  c_attr1: "value 1",
  c_attr2: true,
};
