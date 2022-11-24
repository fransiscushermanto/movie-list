import { useMemo } from "react";
import { useInfiniteQuery } from "../../../hooks/use-query";
import { UseInfiniteQueryOptions } from "../../../hooks/use-query/types";
import axios from "../../../utils/axios";
import { GetMoviesResponse } from "../../../model/movie";

const useGetMovies = (options: UseInfiniteQueryOptions = {}) => {
  const defaultFunction = async (params: any) =>
    axios.get("", {
      params: {
        plot: "full",
        s: "war",
        page: params?.page ?? 1,
      },
    });

  const { data, ...res } = useInfiniteQuery<GetMoviesResponse>({
    ...options,
    queryKey: ["movies"],
    fetchFn: options.fetchFn ?? defaultFunction,
  });

  const movies = useMemo(() => {
    return data?.map((page) => page.Search);
  }, [data]);

  return { movies, ...res };
};

export default useGetMovies;
