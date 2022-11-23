import { FC, ReactNode } from "react";
import { useCallback } from "react";
import { createContext } from "react";
import { Query, queryClient } from "../hooks/use-query/Query";
import { UseQueryReturn } from "../hooks/use-query/types";

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

function useQueryState(key: string) {
  const cacheValue = queryClient.getQuery(key);

  const setQueryState = useCallback(
    (value: UseQueryReturn) => {
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
