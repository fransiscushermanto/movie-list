import { cx } from "@emotion/css";
import { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import Heart from "../../assets/icons/Heart";
import Skeleton from "../../components/Skeleton";
import { MovieModel } from "../../model/movie";
import { movieCardCx } from "./style";

interface MovieCardProps extends MovieModel {
  isLoading?: boolean;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { Title, Poster, Type, Year, imdbID, isLoading } = props;

  const [isLike, setIsLike] = useState(false);

  const isAvailablePoster = Poster !== "N/A";

  return (
    <li className={cx("movie-card", movieCardCx)}>
      <Skeleton isLoading={isLoading}>
        {isLoading ? (
          <div className="movie-poster" />
        ) : (
          <Link className="movie-poster" to={`/detail/${imdbID}`}>
            {isAvailablePoster ? (
              <LazyLoadImage
                loading="lazy"
                src={Poster}
                alt={Title}
                width={150}
                height={200}
              />
            ) : (
              <div className="placeholder" />
            )}
          </Link>
        )}
      </Skeleton>
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
          {!isLoading && (
            <div className="like">
              <Heart
                icontype={isLike ? "fill" : "outline"}
                like={String(isLike)}
                onClick={() => setIsLike((prev) => !prev)}
              />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
