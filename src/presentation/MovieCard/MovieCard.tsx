import { cx } from "@emotion/css";
import { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Heart from "../../assets/icons/Heart";
import Skeleton from "../../components/Skeleton";

import { MovieModel } from "../../routes/Home/model/movie";
import { movieCardCx } from "./style";

interface MovieCardProps extends MovieModel {
  isLoading?: boolean;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { Title, Poster, Type, Year, isLoading } = props;

  const [isLike, setIsLike] = useState(false);

  const isAvailablePoster = Poster !== "N/A";

  return (
    <li className={cx("movie-card", movieCardCx)}>
      <Skeleton isLoading={isLoading}>
        <div className="movie-poster">
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
        </div>
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
            <div className={cx("type", Type)}>
              <span>{Type}</span>
            </div>
          </Skeleton>
          <div className="like">
            <Heart
              icontype={isLike ? "fill" : "outline"}
              like={String(isLike)}
              onClick={() => setIsLike((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
