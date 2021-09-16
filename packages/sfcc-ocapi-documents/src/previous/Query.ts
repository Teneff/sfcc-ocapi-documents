import type { Filter } from "./Filter";

/**
 * Document representing a query. A query contains a set of objects
 * that define criteria used to select records.
 *
 * A query can contain one of the following:
 * - match_all_query - returns all records.
 * - term_query - matches records where a field (or fields) exactly match some simple value (including null).
 * - text_query - matches records where a field (or fields) contain a search phrase.
 * - boolean_query - formulates a complex boolean expression using query objects as criteria.
 * - filtered_query - allows for filtering of records based on both a query and a filter.
 */
export type Query<T extends string = string> =
  | { bool_query: BoolQuery<T> }
  | { filtered_query: FilteredQuery<T> }
  | { match_all_query: MatchAllQuery }
  | { nested_query: NestedQuery<T> }
  | { term_query: TermQuery<T> }
  | { text_query: TextQuery<T> };

/**
 * A boolean query allows construction of full logical expression trees consisting
 * of other queries (usually term and text queries). A boolean query basically has
 * 3 sets of clauses that 'must', 'should' and / or 'must not' match. If 'must',
 * 'must_not', or 'should' appear in the same boolean query, they are combined
 * logically using the AND operator.
 */
type BoolQuery<T extends string = string> =
  | {
      /**
       * 	List of queries that must match.
       */
      must: Query<T>[];
    }
  | {
      /**
       * List of queries that must not match.
       */
      must_not: Query<T>[];
    }
  | {
      /**
       * List of queries that should match.
       */
      should: Query<T>[];
    };

/**
 * A filtered query allows to filter the result of a (possibly complex) query using a (possibly complex) filter.
 */
interface FilteredQuery<T extends string = string> {
  filter: Filter<T>;
  query: Query<T>;
}

/**
 * A match all query simply matches all documents (namespace and document type). This query comes in handy if you just want to filter a search result or really do not have any constraints.
 */
type MatchAllQuery = Record<string, never>;

/**
 * A nested query queries nested documents that are part of a larger document. The classical example is a product master with variants (in one big document) where you want to constrain a search to masters that have variants that match multiple constraints (like color = blue AND size = M). This query is not compatible with some search types. Example: finds all the documents that has firstname = "John" and lastname = "Doe"
 */
interface NestedQuery<T extends string = string> {
  /**
   * mandatory=true, nullable=false
   */
  path: string;
  query: Query<T>;
  score_mode: "avg" | "total" | "max" | "none";
}

/**
 * A term query matches one (or more) value(s) against one (or more) document field(s). A document is considered a hit if one of the values matches (exactly) with at least one of the given fields. The operator "is" can only take one value, while "one_of" can take multiple values. If multiple fields are specified, they are combined using the OR operator. The less and greater operators are not compatible with some search types. To query based on numeric bounds in those cases, you can use a range filter on a filtered query.
 * **Elastic only:** If used with multiple fields, the query is internally handled as a boolean OR of DisjointMaxQueries (with the dismax matching a value against all fields). The dismax makes sure that a document carrying a single term in multiple fields does not get higher scores than a document matching multiple terms in multiple fields.
 *
 * @example (id="my_id")
 */
type TermQuery<T extends string = string> = {
  /**
   * The document field(s), the value(s) are matched against, combined with the operator.
   * mandatory=true, minItems=1, nullable=false
   */
  fields: T[];
} & (
  | {
      /**
       * Returns the operator to use for the term query.
       * mandatory=true, nullable=false
       */
      operator: OperatorWithValue;
      /**
       * The values, the field(s) are compared against, combined with the operator.
       */
      values: (string | boolean)[];
    }
  | {
      /**
       * Returns the operator to use for the term query.
       * mandatory=true, nullable=false
       */
      operator: OperatorWithoutValue;
    }
);

export type Operator = OperatorWithValue | OperatorWithoutValue;

export type OperatorWithValue = "is" | "one_of" | "less" | "greater" | "not_in" | "neq";
export type OperatorWithoutValue = "is_null" | "is_not_null";

/**
 * A text query is used to match some text (i.e. a search phrase possibly consisting of multiple terms) against one or multiple fields. In case multiple fields are provided, the phrase conceptually forms a logical OR over the fields. In this case, the terms of the phrase basically have to match within the text, that would result in concatenating all given fields.
 */
interface TextQuery<T extends string = string> {
  /**
   * The document fields the search phrase has to match against.
   * mandatory=true, minItems=1, nullable=false
   */
  fields: T[];
  /**
   * A search phrase, which may consist of multiple terms.
   */
  search_phrase: string;
}
