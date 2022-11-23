import { useCallback, useEffect, useMemo, useState } from "react";
import { useQueryState } from "../../context/QueryContext";
import { ApiStatus } from "../../model/api";
import { UseInfiniteQueryReturn, UseInfiniteQueryOptions } from "./types";

const useInfiniteQuery = <TData = unknown>({
  enabled = true,
  queryKey,
  fetchFn,
  onSuccess,
  onError,
  getNextPageParam,
  getPreviousPageParam,
}: UseInfiniteQueryOptions): UseInfiniteQueryReturn<TData[]> => {
  const key = queryKey?.toString() ?? "";
  const { state, setQueryState, invalidateQueryState } =
    useQueryState<"infinite">(key);
  const [hasNextPage, setHasNextPage] = useState(state?.hasNextPage ?? false);
  const [hasPreviousPage, setHasPreviousPage] = useState(
    state?.hasPreviousPage ?? false,
  );
  const [isLoading, setIsLoading] = useState(state?.isLoading ?? true);
  const [isError, setIsError] = useState(state?.isError ?? false);
  const [isSuccess, setIsSuccess] = useState(state?.isSuccess ?? false);
  const [data, setData] = useState<TData[]>(state?.data);
  const [status, setStatus] = useState<ApiStatus>(
    state?.status ?? data ? "success" : "loading",
  );
  const [currentPage, setCurrentPage] = useState(1);

  const fetch = useCallback(
    async (params: { page?: any } = { page: 1 }) => {
      setIsLoading(true);
      setStatus("loading");
      try {
        const { data } = (await fetchFn?.(params)) ?? {};
        setIsSuccess(true);
        setStatus("success");
        setData((prev) => [...(prev ?? []), data]);
        setHasNextPage(Boolean(getNextPageParam?.(data, params)));
        setHasPreviousPage(Boolean(getPreviousPageParam?.(data, params)));
        setCurrentPage(params.page);
        onSuccess?.(data);
      } catch (_err) {
        const error = _err as Error;
        setIsError(true);
        setStatus("error");
        onError?.(error);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchFn, onError, onSuccess],
  );

  const fetchNextPage = useCallback(() => {
    fetch({ page: currentPage + 1 });
  }, [currentPage, fetch]);

  const fetchPreviousPage = useCallback(() => {
    fetch({ page: currentPage - 1 });
  }, [currentPage, fetch]);

  const queryValue: UseInfiniteQueryReturn = useMemo(
    () => ({
      isLoading,
      isError,
      isSuccess,
      data,
      status,
      refetch: fetch,
      fetchNextPage,
      fetchPreviousPage,
      hasNextPage,
      hasPreviousPage,
    }),
    [
      isLoading,
      isError,
      isSuccess,
      data,
      status,
      fetch,
      fetchNextPage,
      fetchPreviousPage,
      hasNextPage,
      hasPreviousPage,
    ],
  );

  useEffect(() => {
    if (enabled && !state?.data) {
      fetch();
    } else {
      setIsLoading(false);
    }
  }, [enabled, state?.data]);

  useEffect(() => {
    setQueryState(queryValue);
  }, [queryValue, setQueryState]);

  useEffect(() => {
    return () => {
      invalidateQueryState();
    };
  }, [invalidateQueryState]);

  return queryValue;
};

export default useInfiniteQuery;
