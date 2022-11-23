import { QueryValue, QueryType } from "./types";

class Query {
  private query: Record<any, any>;

  constructor() {
    this.query = {};
  }

  setQuery<T extends QueryType = "single">(key: string, query: QueryValue<T>) {
    this.query[key] = query;
  }

  getQuery<T extends QueryType = "single">(key: string): QueryValue<T> {
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
