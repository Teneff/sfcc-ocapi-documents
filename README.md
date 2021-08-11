# SFCC Shop API documents

TypeScript types based on the [official OCAPI documentation][doc-index]

---

## Usage

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

## [Examples can be found here](./packages/examples)

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
the ISO 8601 standard: "2012-03-19T07:22Z".
```typescript
    import { Util } from 'sfcc-ocapi-documents'
    const dateTime: Util.DateTime = "2012-03-19T07:22Z";
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
### WithCustom<T>
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

### Typed<T>
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
### Response<T>
Adds `_v: string`, `_resource_state?: string;` and `_flash?: Typed<Flash>[];` to the given object and ensures the rest of the properties are `Typed`

## Contribution
PRs are welcome for adding missing interfaces or versions


[doc-index]: https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/OCAPI/current/shop/Documents/index.html
