import { cx } from "@emotion/css";
import { FC, useCallback } from "react";
import { Link } from "react-router-dom";

import Skeleton from "../../components/Skeleton";
import { useWatchlist } from "../../context/WatchlistContext";
import { MovieModel } from "../../model/movie";
import MoviePoster from "./MoviePoster";
import { movieCardCx } from "./style";

interface MovieCardProps extends MovieModel {
  isLoading?: boolean;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { Title, Poster, Type, Year, imdbID, isLoading } = props;

  const { isMovieInWatchlist, addToWatchlist, removeFromWatchlist } =
    useWatchlist();

  const handleClickBookmark = useCallback(() => {
    if (!isMovieInWatchlist(imdbID)) return addToWatchlist(props);
    removeFromWatchlist(imdbID);
  }, [addToWatchlist, imdbID, isMovieInWatchlist, props, removeFromWatchlist]);

  return (
    <li className="movie-card" data-testid={`movie-${imdbID}`}>
      <Link
        className={cx(movieCardCx, { loading: isLoading })}
        to={`/detail/${imdbID}`}
      >
        <MoviePoster
          isLoading={isLoading}
          isMovieSaved={isMovieInWatchlist(imdbID)}
          onClickBookmark={handleClickBookmark}
          width={150}
          height={200}
          src={Poster}
          alt={Title}
        />
        <div className="movie-info">
          <Skeleton isLoading={isLoading}>
            <div className="title">
              <span>{Title}</span>
            </div>
          </Skeleton>
          <Skeleton isLoading={isLoading}>
            <div className="year">
              <span>{Year}</span>
            </div>
          </Skeleton>
          <div className="bottom-info">
            <Skeleton isLoading={isLoading}>
              <div className={cx("movie-type", Type)}>
                <span>{Type}</span>
              </div>
            </Skeleton>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MovieCard;
