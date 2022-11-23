import useQuery from "../../../hooks/use-query/use-query";
import axios from "../../../utils/axios";
import { MovieModel } from "../model/movie";

const useGetMovies = () => {
  const { data, ...res } = useQuery({
    queryKey: ["movies"],
    fetchFn: async () =>
      axios.get("", {
        params: {
          plot: "full",
          s: "war",
          page: 2,
        },
      }),
  });

  console.log("tes", data);

  return { movies: data, ...res };
};

export default useGetMovies;
