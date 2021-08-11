import { Flash } from "../latest";

export type Typed<T> = T extends Record<string, any>
  ? {
      _type?: string;
    } & {
      [K in keyof T]: Typed<T[K]>;
    }
  : T;

export type Response<T> = {
  _v: string;
  _resource_state?: string;
  _flash?: Typed<Flash>[];
} & Typed<T>;
