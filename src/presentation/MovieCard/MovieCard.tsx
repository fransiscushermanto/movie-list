import { cx } from "@emotion/css";
import { FC } from "react";
import { Link } from "react-router-dom";

import Skeleton from "../../components/Skeleton";
import { MovieModel } from "../../model/movie";
import MoviePoster from "../MoviePoster";
import { movieCardCx } from "./style";

interface MovieCardProps extends MovieModel {
  isLoading?: boolean;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { Title, Poster, Type, Year, imdbID, isLoading } = props;

  return (
    <li className="movie-card">
      <Link className={movieCardCx} to={`/detail/${imdbID}`}>
        <MoviePoster
          isLoading={isLoading}
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
