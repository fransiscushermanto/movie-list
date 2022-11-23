import { FC, ReactNode } from "react";
import { useCallback } from "react";
import { createContext } from "react";
import { Query, queryClient } from "../hooks/use-query/Query";
import { QueryType, QueryValue } from "../hooks/use-query/types";

interface QueryProviderProps {
  children: ReactNode;
}

const StateContext = createContext<Query>(queryClient);

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return (
    <StateContext.Provider value={queryClient}>
      {children}
    </StateContext.Provider>
  );
};

function useQueryState<T extends QueryType = "single">(key: string) {
  const cacheValue = queryClient.getQuery<T>(key);

  const setQueryState = useCallback(
    (value: QueryValue<T>) => {
      queryClient.setQuery(key, value);
    },
    [key],
  );

  const invalidateQueryState = useCallback(() => {
    queryClient.invalidateQueries(key);
  }, [key]);

  return { state: cacheValue, setQueryState, invalidateQueryState };
}

export { QueryProvider, useQueryState };
