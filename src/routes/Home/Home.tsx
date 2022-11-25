import { useRef } from "react";
import Header from "../../components/Layout/Header";
import useIntersectionObserver from "../../hooks/use-intersection-observer";
import MovieCard from "../../presentation/MovieCard";
import useGetMovies from "./repository/use-get-movies";
import { intersectionCx, movieListWrapperCx } from "./style";

const Home = () => {
  const { movies, isLoading, hasNextPage, fetchNextPage } = useGetMovies({
    getNextPageParam: (_, { page = 1 }) => page <= 100,
  });

  const intersectionRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: intersectionRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage && !isLoading,
    threshold: 0,
  });

  return (
    <>
      <Header title="Movie" />
      <div className={movieListWrapperCx}>
        {movies?.map((page, i) => (
          <ul key={i} className="movie-list">
            {page.map((movie) => (
              <MovieCard
                key={`${i}:${movie.Title}${movie.Year}${movie.imdbID}`}
                {...movie}
              />
            ))}
          </ul>
        ))}
        {isLoading && (
          <ul className="movie-list">
            {Array.from({ length: 10 }).map((_, i) => (
              <MovieCard
                key={i}
                Poster=""
                Title=""
                Type=""
                Year=""
                imdbID=""
                isLoading
              />
            ))}
          </ul>
        )}
        <div ref={intersectionRef} className={intersectionCx} />
      </div>
    </>
  );
};

export default Home;
