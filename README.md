# SFCC Shop API documents

TypeScript types based on the [official OCAPI documentation][doc-index]

[![NPM version][npm-img-latest]][npm-url]
[![Build Status][build-img]][build-url]
[![GitHub issues][issues-image]][issues-url]
[![GitHub stars][github-stars-img]][github-stars-url]

---
- [SFCC Shop API documents](#sfcc-shop-api-documents)
  - [Usage](#usage)
    - [Installation](#installation)
    - [For the **latest** OCAPI version](#for-the-latest-ocapi-version)
    - [For other versions](#for-other-versions)
    - [Additional OCAPI response attributes](#additional-ocapi-response-attributes)
  - [Supported](#supported)
    - [OCAPI versions](#ocapi-versions)
      - [Usage](#usage-1)
    - [Documents](#documents)
  - [Examples can be found here](#examples-can-be-found-here)
  - [Extending the Document objects](#extending-the-document-objects)
  - [Utility types](#utility-types)
    - [Date](#date)
    - [DateTime](#datetime)
    - [DayOfWeek](#dayofweek)
    - [LocalTime](#localtime)
    - [Localized](#localized)
    - [TimeOfDay](#timeofday)
    - [WithCustom&lt;T&gt;](#withcustomt)
    - [Typed&lt;T&gt;](#typedt)
    - [Response&lt;T&gt;](#responset)
  - [Contribution](#contribution)

## Usage

### Installation

using npm:
```shell
npm install sfcc-ocapi-documents
```

using yarn:
```sh
yarn add sfcc-ocapi-documents
```

### For the **latest** OCAPI version
```typescript
    import OCAPI from 'sfcc-ocapi-documents'

    const basket: OCAPI.Basket 
```


### For other versions 
```typescript
    import OCAPI from 'sfcc-ocapi-documents/20.10'

    const basket: OCAPI.Basket = {...}
```

### Additional OCAPI response attributes
```typescript
    import OCAPI, {Util} from 'sfcc-ocapi-documents/20.10'

    const basket: Util.Response<OCAPI.Basket> = {...}
```

## Supported

### OCAPI versions
- `latest`
- `previous`
- `20.2`
- `20.3`
- `20.4`
- `20.8`
- `20.9`
- `20.10`
- `21.2`
- `21.6`
- `21.8`
  
#### Usage
```typescript
    // latest
    import OCAPI from 'sfcc-ocapi-documents'
    // equivalent to above
    import OCAPI from 'sfcc-ocapi-documents/latest'

    // specific version 
    import OCAPI from 'sfcc-ocapi-documents/21.2'
```

### Documents
- ApproachingDiscount
- Basket
- BasketReference
- BonusDiscountLineItem
- BundledProduct
- Category
- ChannelType
- CouponItem
- Content
- CustomObject
- ContentFolder
- Customer
- CustomerAddress
- CustomerInfo
- CustomerPaymentInstrument
- CustomerProductList
- CustomerProductListItem
- CustomerProductListItemPurchase
- Discount
- Fault
- Flash
- GiftCertificate
- GiftCertificateItem
- Image
- ImageGroup
- Inventory
- Master
- Note
- Option
- OptionItem
- OptionValue
- Order
- OrderAddress
- OrderPaymentInstrument
- PaymentMethod
- PriceAdjustment
- PriceAdjustmentLimit
- PublicProductList
- PublicProductListLink
- PublicProductListItem
- Product
- ProductDetailsLink
- ProductItem
- ProductLink
- ProductListItemReference
- ProductListLink
- ProductListEvent
- ProductPromotion
- ProductSearchHit
- ProductSearchRefinement
- ProductType
- PromotionCampaignAssignment
- PromotionLink
- Promotion
- Recommendation
- RecommendationType
- Shipment
- ShippingItem
- ShippingMethod
- ShippingPromotion
- SimpleLink
- SiteSpecific
- Store
- StoreResult
- Suggestion
- Taxation
- Variant
- Query
- Filter
- VariationAttribute
- VariationAttributeValue
- VariationGroup
- ProductSearchSortingOption
- Locale
- ProductSearchRefinementValue
- ProductSimpleLink
- Site
- SuggestedCategory
- SuggestedContent
- SuggestedPhrase
- SuggestedProduct
- SuggestedTerm
- SuggestedTerms

## [Examples can be found here](./packages/examples/src)

## Extending the Document objects
To add custom properties to the documents you can create a OCAPI.d.ts ([example](./packages/examples/src/OCAPI.d.ts)). If the keys of the interface are not prefixed with `c_` - they will be automatically prefixed

```typescript
declare namespace OCAPI {
  namespace Custom {
    interface ProductItem {
        customAttribute: boolean
        c_otherCustomAttribute: boolean
    }
  }
}
```

## Utility types

### Date
Dash separated numbers
```typescript
    import { Util } from 'sfcc-ocapi-documents'
    const date: Util.Date = '2020-10-10';
```
### DateTime
the ISO 8601 standard: "2012-03-19T07:22:59Z".
```typescript
    import { Util } from 'sfcc-ocapi-documents'
    export const dateTime: Util.DateTime = "2012-03-19T07:22:59Z";
```
### DayOfWeek
Lowercase day of the week
```typescript
    import { Util } from 'sfcc-ocapi-documents'
    const day: Util.DayOfWeek = "friday";
```
### LocalTime
```typescript
    import { Util } from 'sfcc-ocapi-documents'
    const time: Util.LocalTime = "23:59:59";
```
### Localized
Placeholder indicating the value may be localized
```typescript
    import { Util } from 'sfcc-ocapi-documents'
    const str: Util.Localized<string> = "супер кул";
```
### TimeOfDay
Object indicating time interval
```typescript
    import { Util } from 'sfcc-ocapi-documents'
    const timeOfDay: Util.TimeOfDay = {
        time_from: "11:59:59",
        time_to: "23:59:59"
    };
```
### WithCustom&lt;T&gt;
Ensures the keys of the given object are prefixed with `c_`
```typescript
    import { Util } from 'sfcc-ocapi-documents'
    type CustomData = {
        c_attr1: "value 1",
        attr2: boolean
    }
    const obj: Util.WithCustom<CustomData> = {
        c_attr1: "value 1",
        c_attr2: true
    }
```

### Typed&lt;T&gt;
If given an object ensures it has optional `_type` property with `string` value and all of it's nested objects
```typescript
    import { Util } from 'sfcc-ocapi-documents'
    type Data = {
        prop1: string
        prop2: {
            nestedProp: boolean
        },
        prop3:  {
            nestedProp: boolean
        }
    }
    const typedData: Util.Typed<Data> = {
        _type: "data",
        prop1: "val",
        prop2: {
            _type: "nested",
            nestedProp: true
        },
        prop3: {
            nestedProp: false
        }
    }
```
### Response&lt;T&gt;
Adds `_v: string`, `_resource_state?: string;` and `_flash?: Typed<Flash>[];` to the given object and ensures the rest of the properties are `Typed`

## Contribution
PRs are welcome for adding missing interfaces or versions


[doc-index]: https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/OCAPI/current/shop/Documents/index.html
[npm-img-latest]: https://img.shields.io/npm/v/sfcc-ocapi-documents/latest.svg?logo=npm&style=flat
[npm-url]: https://www.npmjs.com/package/sfcc-ocapi-documents
[build-img]: https://github.com/teneff/sfcc-ocapi-documents/actions/workflows/build.yml/badge.svg?branch=master
[build-url]: https://github.com/teneff/sfcc-ocapi-documents/actions?query=branch%3Amaster
[issues-image]: https://img.shields.io/github/issues/Teneff/sfcc-ocapi-documents/bug.svg?logo=github&style=flat
[issues-url]: https://github.com/teneff/sfcc-ocapi-documents/issues
[github-stars-img]: https://img.shields.io/github/stars/teneff/sfcc-ocapi-documents.svg?logo=github&logoColor=fff
[github-stars-url]: https://github.com/teneff/sfcc-ocapi-documents/stargazers