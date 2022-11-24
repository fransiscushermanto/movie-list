import { cx } from "@emotion/css";
import { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Bookmark from "../../assets/icons/Bookmark";
import Skeleton from "../../components/Skeleton";
import { moviePosterCx } from "./style";

interface MoviePosterProps {
  isLoading?: boolean;
  src?: string;
  alt: string;
  width: string | number;
  height: string | number;
}

const MoviePoster: FC<MoviePosterProps> = (props) => {
  const { isLoading, src, alt, width, height } = props;
  const [isLike, setIsLike] = useState(false);

  const isAvailablePoster = src && src !== "N/A";

  return (
    <Skeleton isLoading={isLoading}>
      {isLoading ? (
        <div className={cx("movie-poster", moviePosterCx)} />
      ) : (
        <div className={cx("movie-poster", moviePosterCx)}>
          {!isLoading && (
            <div className="watchlist">
              <Bookmark
                width={30}
                height={30}
                icontype={isLike ? "fill" : "outline"}
                like={String(isLike)}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLike((prev) => !prev);
                }}
              />
            </div>
          )}
          <div>
            {isAvailablePoster ? (
              <LazyLoadImage
                loading="lazy"
                src={src}
                alt={alt}
                width={width}
                height={height}
              />
            ) : (
              <div className="placeholder" />
            )}
          </div>
        </div>
      )}
    </Skeleton>
  );
};

export default MoviePoster;
