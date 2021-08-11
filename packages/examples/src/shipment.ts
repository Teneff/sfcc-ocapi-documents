import OCAPI, { Util } from "sfcc-ocapi-documents";

export const shipment: Util.Typed<OCAPI.Shipment> = {
  _type: "shipment",
  adjusted_merchandize_total_tax: 15.16,
  adjusted_shipping_total_tax: 0.62,
  gift: false,
  merchandize_total_tax: 15.16,
  product_sub_total: 94.95,
  product_total: 94.95,
  shipment_id: "me",
  shipment_total: 98.84,
  shipping_method: {
    _type: "shipping_method",
    description: "Stand",
    id: "Standard",
    name: "Stand",
    price: 3.89,
    c_customAttribute: "val",
  },
  shipping_status: "not_shipped",
  shipping_total: 3.89,
  shipping_total_tax: 0.62,
  tax_total: 15.78,
  c_customAttribute: "custom data",
};

export const another: Util.Typed<OCAPI.Shipment> = {
  _type: "shipment",
  adjusted_merchandize_total_tax: 0.0,
  adjusted_shipping_total_tax: 0.0,
  gift: false,
  merchandize_total_tax: 0.0,
  product_sub_total: 0.0,
  product_total: 0.0,
  shipment_id: "me",
  shipment_total: 0.0,
  shipping_status: "not_shipped",
  shipping_total: 0.0,
  shipping_total_tax: 0.0,
  tax_total: 0.0,
  c_customAttribute: "data",
};
