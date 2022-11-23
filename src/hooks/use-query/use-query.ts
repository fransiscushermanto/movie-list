import { useCallback, useEffect, useMemo, useState } from "react";
import { useQueryState } from "../../context/QueryContext";
import { ApiStatus } from "../../model/api";
import { UseQueryOptions, UseQueryReturn } from "./types";

const useQuery = <TData = unknown>({
  enabled = true,
  queryKey,
  fetchFn,
  onSuccess,
  onError,
}: UseQueryOptions): UseQueryReturn<TData> => {
  const key = queryKey.toString();
  const { state, setQueryState, invalidateQueryState } = useQueryState(key);
  const [isLoading, setIsLoading] = useState<boolean>(state?.isLoading ?? true);
  const [isError, setIsError] = useState<boolean>(state?.isError ?? false);
  const [isSuccess, setIsSuccess] = useState<boolean>(
    state?.isSuccess ?? false,
  );
  const [data, setData] = useState<TData>(state?.data);
  const [status, setStatus] = useState<ApiStatus>(
    state?.status ?? data ? "success" : "loading",
  );

  const fetch = useCallback(
    async (params?: any) => {
      setIsLoading(true);
      setStatus("loading");
      try {
        const { data } = await fetchFn(params);
        setIsSuccess(true);
        setStatus("success");
        setData(data);
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

  const queryValue: UseQueryReturn = useMemo(
    () => ({ isLoading, isError, isSuccess, data, status, refetch: fetch }),
    [isLoading, isError, isSuccess, data, status, fetch],
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

  return { data, isLoading, isSuccess, isError, status, refetch: fetch };
};

export default useQuery;
