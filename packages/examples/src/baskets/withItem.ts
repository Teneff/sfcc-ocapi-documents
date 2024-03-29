import OCAPI, { Util } from "sfcc-ocapi-documents";

export const withItem: Util.Response<OCAPI.Basket> = {
  _v: "21.6",
  _type: "basket",
  _resource_state: "f2167eb91e86fbb73899c52c07e69ba54124660544a37d03482334d108d67847",
  _flash: [
    {
      _type: "flash",
      type: "PaymentMethodRequired",
      message: "No payment method ID was specified. Please provide a valid payment method ID.",
      path: "$.payment_instruments[0].payment_method_id",
    },
    {
      _type: "flash",
      type: "BillingAddressRequired",
      message: "No billing address was specified. Please provide a valid billing address.",
      path: "$.billing_address",
    },
    {
      _type: "flash",
      type: "ShippingAddressRequired",
      message: "No shipping address was specified. Please provide a valid shipping address.",
      path: "$.shipments[0].shipping_address",
      details: {
        shipmentId: "me",
      },
    },
  ],
  adjusted_merchandize_total_tax: 15.16,
  adjusted_shipping_total_tax: 0.62,
  agent_basket: false,
  basket_id: "758a21de8ea5c332f27e6d077f",
  channel_type: "storefront",
  creation_date: "2021-08-11T07:06:27.637Z",
  currency: "EUR",
  customer_info: {
    _type: "customer_info",
    customer_id: "H9sdjsuw82",
    email: "",
  },
  last_modified: "2021-08-11T07:07:34.800Z",
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
      item_id: "098ee6eb7d4f871c65870d8b3c",
      item_text: "product name",
      option_items: [
        {
          _type: "option_item",
          adjusted_tax: 0.0,
          base_price: 0.0,
          bonus_product_line_item: false,
          gift: false,
          item_id: "53e91dad941fac4ee0990c9f96",
          item_text: "Test product",
          option_id: "someOption",
          option_value_id: "NP",
          price: 0.0,
          price_after_item_discount: 0.0,
          price_after_order_discount: 0.0,
          product_id: "_NP",
          product_name: "Test product",
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
          item_id: "4b7df75f1cdbe3bd37dae63267",
          item_text: "Test product",
          option_id: "someOtherOption",
          option_value_id: "NP",
          price: 0.0,
          price_after_item_discount: 0.0,
          price_after_order_discount: 0.0,
          product_id: "_NP",
          product_name: "Test product",
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
      product_id: "M20324_640",
      product_name: "product name",
      quantity: 1,
      shipment_id: "me",
      tax: 15.16,
      tax_basis: 94.95,
      tax_class_id: "FullTax",
      tax_rate: 0.19,
      c_customAttribute: "asiodj",
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
        c_customAttribute: "data",
      },
      shipping_status: "not_shipped",
      shipping_total: 3.89,
      shipping_total_tax: 0.62,
      tax_total: 15.78,
      c_customAttribute: "asdoijio",
    },
  ],
  shipping_items: [
    {
      _type: "shipping_item",
      adjusted_tax: 0.62,
      base_price: 3.89,
      item_id: "c1026c8b33074bc72b3ef44696",
      item_text: "Shipping",
      price: 3.89,
      price_after_item_discount: 3.89,
      shipment_id: "me",
      tax: 0.62,
      tax_basis: 3.89,
      tax_class_id: null,
      tax_rate: 0.19,
      c_type: "inline",
    },
  ],
  shipping_total: 3.89,
  shipping_total_tax: 0.62,
  taxation: "gross",
  tax_total: 15.78,
  c_Info: "data",
};
