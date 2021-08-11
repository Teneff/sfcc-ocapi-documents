import OCAPI, { Util } from "sfcc-ocapi-documents";

export const customerCustomFields: Util.Response<OCAPI.Basket> = {
  _v: "21.6",
  _type: "basket",
  _resource_state:
    "d779e067c8973c8738804e6d3e1cbe2d2d07f377ecb4c2bd6baa21e36098ba11",
  _flash: [
    {
      _type: "flash",
      type: "PaymentMethodRequired",
      message:
        "No payment method ID was specified. Please provide a valid payment method ID.",
      path: "$.payment_instruments[0].payment_method_id",
    },
    {
      _type: "flash",
      type: "BillingAddressRequired",
      message:
        "No billing address was specified. Please provide a valid billing address.",
      path: "$.billing_address",
    },
    {
      _type: "flash",
      type: "ShippingAddressRequired",
      message:
        "No shipping address was specified. Please provide a valid shipping address.",
      path: "$.shipments[0].shipping_address",
      details: {
        shipmentId: "me",
      },
    },
  ],
  adjusted_merchandize_total_tax: 15.16,
  adjusted_shipping_total_tax: 0.62,
  agent_basket: false,
  basket_id: "96493f0a147544bf313980dde3",
  channel_type: "storefront",
  creation_date: "2021-08-11T09:03:49.304Z",
  currency: "EUR",
  customer_info: {
    _type: "customer_info",
    customer_id: "acinan1dmhGqG6kUi49nYH7EJ9",
    email: "",
  },
  last_modified: "2021-08-11T09:04:18.947Z",
  merchandize_total_tax: 15.16,
  notes: {
    _type: "simple_link",
    link: "https://example.com",
  },
  order_total: 98.84,
  product_items: [
    {
      _type: "product_item",
      adjusted_tax: 15.16,
      base_price: 94.95,
      bonus_product_line_item: false,
      gift: false,
      item_id: "3fcfee1726131b23d69e11f2f9",
      item_text: "product name",
      option_items: [
        {
          _type: "option_item",
          adjusted_tax: 0.0,
          base_price: 0.0,
          bonus_product_line_item: false,
          gift: false,
          item_id: "8db89f4751fa6f857e856ef090",
          item_text:
            "Test product",
          option_id: "someOption",
          option_value_id: "NP",
          price: 0.0,
          price_after_item_discount: 0.0,
          price_after_order_discount: 0.0,
          product_id: "_NP",
          product_name:
            "Test product",
          quantity: 1,
          shipment_id: "me",
          tax: 0.0,
          tax_basis: 0.0,
          tax_class_id: "FullTax",
          tax_rate: 0.19,
        },
        {
          _type: "option_item",
          adjusted_tax: 0.0,
          base_price: 0.0,
          bonus_product_line_item: false,
          gift: false,
          item_id: "049b5a44ab52b4626fab5cda8f",
          item_text:
            "Test product",
          option_id: "someOtherOption",
          option_value_id: "NP",
          price: 0.0,
          price_after_item_discount: 0.0,
          price_after_order_discount: 0.0,
          product_id: "_NP",
          product_name:
            "Test product",
          quantity: 1,
          shipment_id: "me",
          tax: 0.0,
          tax_basis: 0.0,
          tax_class_id: "FullTax",
          tax_rate: 0.19,
        },
      ],
      price: 94.95,
      price_after_item_discount: 94.95,
      price_after_order_discount: 94.95,
      product_id: "DD1234_55",
      product_name: "siodj",
      quantity: 1,
      shipment_id: "me",
      tax: 15.16,
      tax_basis: 94.95,
      tax_class_id: "FullTax",
      tax_rate: 0.19,
      c_customAttribute: "custom value",
    },
  ],
  product_sub_total: 94.95,
  product_total: 94.95,
  shipments: [
    {
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
        c_customAttribute: "custom data",
      },
      shipping_status: "not_shipped",
      shipping_total: 3.89,
      shipping_total_tax: 0.62,
      tax_total: 15.78,
      c_customAttribute: "mroe custom data",
    },
  ],
  shipping_items: [
    {
      _type: "shipping_item",
      adjusted_tax: 0.62,
      base_price: 3.89,
      item_id: "984bf86b23259ab4deb1812208",
      item_text: "Shipping",
      price: 3.89,
      price_after_item_discount: 3.89,
      shipment_id: "me",
      tax: 0.62,
      tax_basis: 3.89,
      tax_class_id: null,
      tax_rate: 0.19,
      c_carrierCode: "STRD",
      c_type: "inline",
    },
  ],
  shipping_total: 3.89,
  shipping_total_tax: 0.62,
  taxation: "gross",
  tax_total: 15.78,
  c_Info: "more info",
};
