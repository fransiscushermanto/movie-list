import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "../../../hooks/use-query";
import { UseInfiniteQueryOptions } from "../../../hooks/use-query/types";
import axios from "../../../utils/axios";
import { MovieResponse } from "../model/movie";

const mock = [
  {
    Title: "Korea: The Forgotten War",
    Year: "1987",
    imdbID: "tt0479940",
    Type: "movie",
    Poster: "N/A",
  },
  {
    Title: "OCD: The War Inside",
    Year: "2001",
    imdbID: "tt0354777",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTYwMGI4NjAtMTBiNS00MmRiLWE1ZDgtZDAzODA5ZGNkNjIxXkEyXkFqcGdeQXVyMjI3MDczMjI@._V1_SX300.jpg",
  },
  {
    Title: "After the War",
    Year: "1989",
    imdbID: "tt0278167",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTIyNDk3MDU3N15BMl5BanBnXkFtZTcwNjIxODIyMQ@@._V1_SX300.jpg",
  },
  {
    Title: "Life Goes to War: Hollywood and the Home Front",
    Year: "1977",
    imdbID: "tt0206089",
    Type: "movie",
    Poster: "N/A",
  },
  {
    Title: "Martian Mania: The True Story of The War of the Worlds",
    Year: "1998",
    imdbID: "tt0176972",
    Type: "movie",
    Poster: "N/A",
  },
  {
    Title: "Because of That War",
    Year: "1988",
    imdbID: "tt0123474",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA5MTIwMjU0M15BMl5BanBnXkFtZTcwOTgzMDIyMQ@@._V1_SX300.jpg",
  },
  {
    Title: "Plan Colombia: Cashing in on the Drug War Failure",
    Year: "2003",
    imdbID: "tt2076299",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGJjZGVhNmItMTk1NS00MzMwLTgyNjgtMGI0ZjljNDQ0NzViXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
  },
  {
    Title: "The Perilous Fight: America's World War II in Color",
    Year: "2003–",
    imdbID: "tt0915733",
    Type: "series",
    Poster: "N/A",
  },
  {
    Title: "Black Jack Pershing: Love and War",
    Year: "2017",
    imdbID: "tt7699730",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTAwNGVkMjItNjg3Ni00ZDMyLTk3YjktNjkwYWU2NWNjMTUwXkEyXkFqcGdeQXVyMjAyMDkxMjc@._V1_SX300.jpg",
  },
  {
    Title: "Strip and War",
    Year: "2019",
    imdbID: "tt8753730",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODgwNTQxOGYtMTA1OC00ZDc5LTllZGUtYmIwOTg0M2U2MjIyXkEyXkFqcGdeQXVyMjMwNzE0MjA@._V1_SX300.jpg",
  },
];

const useGetMovies = (options: UseInfiniteQueryOptions = {}) => {
  const [searchParams] = useSearchParams();

  const defaultFunction = async (params: any) =>
    axios.get("", {
      params: {
        plot: "full",
        s: "war",
        page: params?.page ?? searchParams.get("page") ?? 1,
      },
    });

  const { data, ...res } = useInfiniteQuery<MovieResponse>({
    ...options,
    queryKey: ["movies"],
    fetchFn: options.fetchFn ?? defaultFunction,
  });

  const movies = useMemo(() => {
    // return [mock, mock];
    return data?.map((page) => page.Search);
  }, [data]);

  return { movies, ...res };
};

export default useGetMovies;
