import { cx } from "@emotion/css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Star from "../../assets/icons/Star";
import Header from "../../components/Layout/Header";
import Skeleton from "../../components/Skeleton";
import { useWatchlist } from "../../context/WatchlistContext";
import { MoviePoster } from "../../presentation/MovieCard";
import { detectWrap } from "../../utils/detectWrap";

import useGetMovie from "./repository/use-get-movie";
import { detailCx, genreCx } from "./styles";
import { getMetascoreLevel } from "./utils";

const Detail = () => {
  const { data, isLoading } = useGetMovie();
  const {
    Poster,
    Title = "",
    Year,
    Rated,
    Runtime,
    Plot,
    Genre,
    Director,
    Writer,
    Type,
    Actors,
    Language,
    Country,
    BoxOffice,
    Awards,
    Ratings,
    imdbVotes,
    imdbID,
  } = data ?? {};

  const { isMovieInWatchlist, addToWatchlist, removeFromWatchlist } =
    useWatchlist();

  const handleClickBookmark = useCallback(() => {
    if (!data) return;
    if (!isMovieInWatchlist(imdbID!)) return addToWatchlist(data);
    removeFromWatchlist(imdbID!);
  }, [addToWatchlist, data, imdbID, isMovieInWatchlist, removeFromWatchlist]);

  const [lastRow, setLastRow] = useState(1);

  const imdbRating =
    Ratings?.find(
      (rating) => rating.Source === "Internet Movie Database",
    )?.Value.split("/") ?? [];

  const metacriticRating =
    Ratings?.find((rating) => rating.Source === "Metacritic")?.Value.split(
      "/",
    ) ?? [];

  const genresRef = useRef<HTMLDivElement>(null);
  const genreClassName = useMemo(() => {
    return cx("genre", genreCx(lastRow));
  }, [lastRow]);

  useEffect(() => {
    function onResize() {
      const { totalRow } = detectWrap(".genre", {
        parentContainer: genresRef.current,
      });
      setLastRow(totalRow);
    }

    if (!isLoading) {
      onResize();
    }

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isLoading]);

  return (
    <>
      <Header showBackButton title={Title} />
      <div className={detailCx}>
        <div className="movie-top-wrapper">
          <Skeleton isLoading={isLoading}>
            <h1 className="title">{Title}</h1>
          </Skeleton>
          <Skeleton isLoading={isLoading}>
            <div className="subtitle">
              <span>{Year}</span>
              <span>{Rated}</span>
              <span>{Runtime}</span>
            </div>
          </Skeleton>
          <Skeleton isLoading={isLoading}>
            <div className={cx("movie-type", Type)}>
              <span>{Type}</span>
            </div>
          </Skeleton>
        </div>
        <div className="movie-poster-wrapper">
          <MoviePoster
            isLoading={isLoading}
            src={Poster}
            width={130}
            height={200}
            alt={Title}
            isMovieSaved={isMovieInWatchlist(imdbID!)}
            onClickBookmark={handleClickBookmark}
          />
          <div className="right-poster">
            <Skeleton isLoading={isLoading}>
              <div ref={genresRef} className="genres">
                {Genre?.split(",")
                  .filter(Boolean)
                  .map((g) => (
                    <div key={g} className={genreClassName}>
                      <span>{g}</span>
                    </div>
                  ))}
              </div>
            </Skeleton>
            <Skeleton isLoading={isLoading}>
              <div className="synopsis">
                <p>{Plot}</p>
              </div>
            </Skeleton>
          </div>
        </div>
        <Skeleton isLoading={isLoading}>
          <div className="movie-ratings">
            <div className="imdb rating">
              <i className="icon">
                <Star fill="rgb(245, 197, 24)" width={50} height={50} />
              </i>
              <div className="rate">
                <span>
                  <b>{imdbRating[0]}</b>
                </span>
                /<span>{imdbRating[1]}</span>
              </div>
              <div className="votes">
                <span>{imdbVotes}</span>
              </div>
            </div>
            <div className="metacritic rating">
              <div
                className={cx(
                  "rate",
                  getMetascoreLevel(Number(metacriticRating[0] ?? 0)),
                )}
              >
                <span>{metacriticRating[0]}</span>
              </div>
              <div className="title">
                <span>Metascore</span>
              </div>
            </div>
          </div>
        </Skeleton>
        <div className="movie-detail">
          <div className="info">
            <Skeleton isLoading={isLoading}>
              <span className="label">Language</span>
            </Skeleton>
            <Skeleton isLoading={isLoading}>
              <span className="language value">{Language}</span>
            </Skeleton>
          </div>
          <div className="info">
            <Skeleton isLoading={isLoading}>
              <span className="label">Directed By</span>
            </Skeleton>
            <Skeleton isLoading={isLoading}>
              <span className="director value">{Director}</span>
            </Skeleton>
          </div>
          <div className="info">
            <Skeleton isLoading={isLoading}>
              <span className="label">Writers</span>
            </Skeleton>
            <Skeleton isLoading={isLoading}>
              <span className="writers value">{Writer}</span>
            </Skeleton>
          </div>
          <div className="info">
            <Skeleton isLoading={isLoading}>
              <span className="label">Actors</span>
            </Skeleton>
            <Skeleton isLoading={isLoading}>
              <span className="actors value">{Actors}</span>
            </Skeleton>
          </div>
          <div className="info">
            <Skeleton isLoading={isLoading}>
              <span className="label">Country</span>
            </Skeleton>
            <Skeleton isLoading={isLoading}>
              <span className="country value">{Country}</span>
            </Skeleton>
          </div>
          <div className="info">
            <Skeleton isLoading={isLoading}>
              <span className="label">Awards</span>
            </Skeleton>
            <Skeleton isLoading={isLoading}>
              <span className="awards value">{Awards}</span>
            </Skeleton>
          </div>
          <div className="info">
            <Skeleton isLoading={isLoading}>
              <span className="label">Box Office</span>
            </Skeleton>
            <Skeleton isLoading={isLoading}>
              <span className="box-office value">{BoxOffice || "N/A"}</span>
            </Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
