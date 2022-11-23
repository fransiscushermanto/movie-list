import { UseQueryReturn } from "./types";

type QueryValue = UseQueryReturn | undefined | null;

class Query {
  private query: Record<any, QueryValue>;

  constructor() {
    this.query = {};
  }

  setQuery(key: string, query: QueryValue) {
    this.query[key] = query;
  }

  getQuery(key: string): QueryValue {
    return this.query[key];
  }

  invalidateQueries(key?: string) {
    if (key) {
      delete this.query[key];
    } else {
      this.query = {};
    }
  }
}

const queryClient = new Query();

export { Query, queryClient };
