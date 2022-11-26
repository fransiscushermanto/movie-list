import { cx } from "@emotion/css";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Bookmark from "../../assets/icons/ImdbBookmark";
import Skeleton from "../../components/Skeleton";
import { moviePosterCx } from "./style";

interface MoviePosterProps {
  isLoading?: boolean;
  src?: string;
  alt: string;
  width: string | number;
  height: string | number;
  isMovieSaved?: boolean;
  onClickBookmark?: () => void;
}

const MoviePoster: FC<MoviePosterProps> = (props) => {
  const { isLoading, src, alt, width, height, isMovieSaved, onClickBookmark } =
    props;

  const isAvailablePoster = src && src !== "N/A";

  return (
    <Skeleton isLoading={isLoading}>
      {isLoading ? (
        <div className={cx("movie-poster", moviePosterCx)} />
      ) : (
        <div className={cx("movie-poster", moviePosterCx)}>
          {!isLoading && (
            <div
              className={cx("watchlist", { added: isMovieSaved })}
              data-testid="action-bookmark-btn"
              onClick={(e) => {
                e.preventDefault();
                onClickBookmark?.();
              }}
            >
              <Bookmark
                width={30}
                height={30}
                icontype={isMovieSaved ? "fill" : "outline"}
                like={String(isMovieSaved)}
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
