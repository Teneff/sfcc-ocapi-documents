/* eslint-disable @typescript-eslint/no-empty-interface */
// import * as OCAPI from ".";

declare global {
  namespace OCAPI {
    namespace Custom {
      // These open interfaces may be extended in an application-specific manner via declaration merging.
      // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
      interface Basket {}
    }
  }
}
