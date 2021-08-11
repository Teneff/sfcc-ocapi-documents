export type Custom = Record<string, unknown>;

type Prefixed<T extends string> = T extends `c_${string}` ? T : `c_${T}`;

export type WithCustom<T extends Custom> = {
  [K in keyof T as Prefixed<string & K>]: T[K];
};
