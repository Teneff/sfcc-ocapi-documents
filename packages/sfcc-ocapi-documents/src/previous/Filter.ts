import type { OperatorWithValue, OperatorWithoutValue, Query } from "./Query";

export type Filter<T extends string = string> =
  | { bool_filter: BoolFilter<T> }
  | { query_filter: QueryFilter<T> }
  | { range2_filter: Range2Filter<T> }
  | { range_filter: RangeFilter<T> }
  | { term_filter: TermFilter<T> };

/**
 * A boolean filter allows you to combine other filters into (possibly recursive) logical expression trees. A boolean filter is configured with a boolean operator (AND, OR, NOT) and a list of filters the operator relates to. If multiple filters are given to a boolean NOT operator, this is interpreted as a NOT upon a boolean AND of the given filters.
 */
interface BoolFilter<T extends string = string> {
  /**
   * A list of filters, which are logically combined by an operator.
   */
  filters: Filter<T>[];

  /**
   * The logical operator the filters are combined with.
   * mandatory=true, nullable=false
   */
  operator: Operator;
}

/**
 * A query filter wraps any query and allows it to be used as a filter.
 */
interface QueryFilter<T extends string = string> {
  /**
   * The query to use as a filter.
   */
  query: Query<T>;
}

/**
 * A Range2Filter allows you to restrict a search result to hits where a range defined by specified attributes has a certain relationship to a specified range.
 *
 * The first range (R1) is defined by a pair of attributes ("from_field" and "to_field") that specify the extent of a range, such as attributes "valid_from" and "valid_to".
 *
 * The second range (R2) is defined by "from_value" and "to_value".
 *
 * The filter mode specifies the method used to compare the two ranges:
 *
 * - overlap: R1 overlaps fully or partially with R2
 * - containing: R1 contains R2
 * - contained: R1 is contained in R2
 *
 * The range filter supports several value types, and relies on the natural sorting of the value type for range interpretation. Value ranges can be open-ended (at one end only). You can configure whether the lower and upper bounds are inclusive or exclusive.
 *
 * A range 2 filter is useful for general restrictions that can be shared between searches (like a static date range) because the filter result is cached in memory. Range filters are not appropriate if the range is expected to be different for every query (for example, if the user controls the date range down to the hour via a UI control). Range filters are inclusive by default.
 */
interface Range2Filter<T extends string = string> {
  /**
   * Compare mode: overlap, containing, or contained. If not specified, the default is overlap.
   */
  filter_mode: FilterMode;

  /**
   * The field name of the field that starts the first range.
   * mandatory=true, nullable=false
   */
  from_field: T;

  /**
   * Indicates whether the lower bound of the second range is inclusive.
   * Set to false to make the lower bound exclusive.
   *
   * @default true
   */
  from_inclusive?: boolean;

  /**
   * The lower bound of the second range. If not specified, the range is open-ended with respect to the lower bound. You can't leave both the lower and upper bounds open-ended.
   */
  from_value?: unknown;

  /**
   * The field name of the field that ends the first range.
   * mandatory=true, nullable=false
   */
  to_field: T;

  /**
   * Indicates whether the upper bound of the second range is inclusive.
   * Set to false to make the lower bound exclusive.
   *
   * @default true
   */
  to_inclusive?: boolean;

  /**
   * The upper bound of the second range. If not specified, the range is
   * open-ended with respect to the upper bound. You can't leave both the
   * upper and lower bounds open-ended.
   */
  to_value?: unknown;
}

/**
 * A range filter allows you to restrict a search result to hits that have values for
 * a given attribute that fall into a given value range. The range filter supports
 * several value types, and relies on the natural sorting of the value type for range
 * interpretation. Value ranges can be open-ended (at one end only). You can configure
 * whether the lower and upper bounds are inclusive or exclusive.
 *
 * A range filter is useful for general restrictions that can be shared between
 * searches (like a static date range) because the filter result is cached in memory.
 * Range filters are not appropriate if the range is expected to be different for
 * every query (for example, if the user controls the date range down to the hour
 * via a UI control). Range filters are inclusive by default.
 */
interface RangeFilter<T extends string = string> {
  /**
   * The search field.
   * mandatory=true, nullable=false
   */
  field: T;

  /**
   * The lower bound of the filter range. If not specified, the range is
   * open-ended with respect to the lower bound. You can't leave both the
   * lower and upper bounds open-ended.
   */
  from?: unknown;

  /**
   * Indicates whether the lower bound of the range is inclusive.
   * Set to false to make the lower bound exclusive.
   * @default true
   */
  from_inclusive?: boolean;

  /**
   * The upper bound of the filter range. If not specified, the range is
   * open-ended with respect to the upper bound. You can't leave both
   * the upper and lower bounds open-ended.
   */
  to?: unknown;

  /**
   * Indicates whether the upper bound of the range is inclusive.
   * Set to false to made the upper bound exclusive.
   *
   * @default true
   */
  to_inclusive?: boolean;
}

/**
 * A term filter allows you to restrict a search result to hits that match (exactly)
 * one of the values configured for the filter. A term filter is useful for general
 * restrictions that can be shared between searches. Use term filters whenever the
 * criteria you filter on is a shared property of multiple searches (for example,
 * like filtering by an order status). Use term filters for fields that have a
 * discrete and small set of values only.
 */
type TermFilter<T extends string = string> = {
  /**
   * mandatory=true, nullable=false The filter field.
   */
  field: T;
} & (
  | {
      /**
       * The operator to compare the field's values with the given ones.
       * mandatory=true, nullable=false
       */
      operator: OperatorWithValue;

      /**
       * The filter values.
       */
      values: (string | boolean)[];
    }
  | {
      /**
       * The operator to compare the field's values with the given ones.
       * mandatory=true, nullable=false
       */
      operator: OperatorWithoutValue;
    }
);

type Operator = "and" | "or" | "not";
type FilterMode = "overlap" | "containing" | "contained";
