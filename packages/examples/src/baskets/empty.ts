import OCAPI, { Util } from "sfcc-ocapi-documents";

export const emptyBasket: Util.Response<OCAPI.Basket> = {
  _v: "21.6",
  _type: "basket",
  _resource_state:
    "b9b81f3aa9377353a69fb421ed5076028e87998596e38ef27744f997de5342b2",
  _flash: [
    {
      _type: "flash",
      type: "ProductItemsRequired",
      message: "Product items are required.",
      path: "$.product_items",
    },
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
    {
      _type: "flash",
      type: "ShippingMethodRequired",
      message:
        "No shipping method ID was specified. Please provide a valid shipping method ID.",
      path: "$.shipments[0].shipping_method",
      details: {
        shipmentId: "me",
      },
    },
  ],
  adjusted_merchandize_total_tax: 0.0,
  adjusted_shipping_total_tax: 0.0,
  agent_basket: false,
  basket_id: "38b800384096280a1db037ab89",
  channel_type: "storefront",
  creation_date: "2021-08-11T05:19:29.409Z",
  currency: "EUR",
  customer_info: {
    _type: "customer_info",
    customer_id: "cdvatLU7OXDtHq57LblJQQ1Huv",
    email: "",
  },
  last_modified: "2021-08-11T05:19:29.507Z",
  merchandize_total_tax: 0.0,
  notes: {
    _type: "simple_link",
    link: "https://example.com",
  },
  order_total: 0.0,
  product_sub_total: 0.0,
  product_total: 0.0,
  shipments: [
    {
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
      c_customAttribute: "asdoi",
    },
  ],
  shipping_items: [
    {
      _type: "shipping_item",
      adjusted_tax: 0.0,
      base_price: 0.0,
      item_id: "4fa0a5f8a74f0dfe2fe1ba21f6",
      item_text: "Shipping",
      price: 0.0,
      price_after_item_discount: 0.0,
      shipment_id: "me",
      tax: 0.0,
      tax_basis: 0.0,
      tax_class_id: "CustomRate",
      tax_rate: 0.0,
    },
  ],
  shipping_total: 0.0,
  shipping_total_tax: 0.0,
  taxation: "gross",
  tax_total: 0.0,
  c_Info: "more info",
};
