import { AxiosResponse } from "axios";
import { ApiStatus } from "../../model/api";

type QueryKey = unknown[];

export interface UseQueryOptions {
  enabled?: boolean;
  queryKey: QueryKey;
  fetchFn: (...args: any) => Promise<AxiosResponse>;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export interface UseQueryReturn<TData = any> {
  data: TData;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  status: ApiStatus;
  refetch: (...args: any) => Promise<void>;
}
