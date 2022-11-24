import { useParams } from "react-router-dom";
import { useQuery } from "../../../hooks/use-query";
import { UseQueryOptions } from "../../../hooks/use-query/types";
import { DetailMovieModel } from "../../../model/movie";
import axios from "../../../utils/axios";

const useGetMovie = (options: UseQueryOptions = {}) => {
  const { imdbID } = useParams();

  const defaultFunction = async (params: any) =>
    axios.get("", {
      params: {
        i: imdbID,
        plot: "short",
      },
    });

  return useQuery<DetailMovieModel>({
    ...options,
    queryKey: ["movie", imdbID],
    fetchFn: options.fetchFn ?? defaultFunction,
  });
};

export default useGetMovie;
