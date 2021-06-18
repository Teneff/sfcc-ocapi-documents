import { Flash } from "../";

type Typed<T> = T extends Record<keyof any, any>
  ? {
      _type?: string;
    } & {
      [K in keyof T]: Typed<T[K]>;
    }
  : T extends Array<infer R>
  ? Array<Typed<R>>
  : T;

export type Response<T> = Typed<
  T & {
    _v: `${number}.${number}`;
    _resource_state: string;
    _flash: Flash[];
  }
>;
