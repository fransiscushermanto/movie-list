import { AxiosResponse } from "axios";
import { ApiStatus } from "../../model/api";

export type QueryKey = unknown[];

export type QueryType = "infinite" | "single";

type RawQueryReturn<T> = RawUseInfiniteQueryReturn<T> | RawUseQueryReturn<T>;

export type QueryReturn<T extends QueryType, TData = any> = Omit<
  Extract<RawQueryReturn<TData>, { type: T }>,
  "type"
>;

export type QueryValue<T extends QueryType> = QueryReturn<T> | undefined | null;

export interface UseQueryReturn<TData = any>
  extends QueryReturn<"single", TData> {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  status: ApiStatus;
  refetch: (...args: any) => Promise<void>;
}
export type UseInfiniteQueryReturn<TData = any> = QueryReturn<
  "infinite",
  TData
>;

export interface UseQueryOptions {
  enabled?: boolean;
  queryKey?: QueryKey;
  fetchFn?: (...args: any) => Promise<AxiosResponse>;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
  /**
   * @default true;
   */
  invalidateOnUnmount?: boolean;
}

export interface UseInfiniteQueryOptions extends UseQueryOptions {
  getPreviousPageParam?: (data: any, params: any) => unknown;
  getNextPageParam?: (data: any, params: any) => unknown;
}

export interface RawUseQueryReturn<TData = any> {
  type: "single";
  data?: TData;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  status?: ApiStatus;
  refetch?: (...args: any) => Promise<void>;
}

export interface RawUseInfiniteQueryReturn<TData = any>
  extends Omit<RawUseQueryReturn<TData>, "type"> {
  type: "infinite";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  fetchNextPage: () => void;
  fetchPreviousPage: () => void;
}
