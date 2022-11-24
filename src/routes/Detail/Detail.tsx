import { cx } from "@emotion/css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Heart from "../../assets/icons/Heart";

import useGetMovie from "./repository/use-get-movie";
import { detailCx } from "./styles";

const Detail = () => {
  const { data } = useGetMovie();
  const {
    Poster,
    Title,
    Year,
    Rated,
    Runtime,
    Plot,
    Genre,
    Director,
    Writer,
    Type,
  } = data ?? {};

  const isAvailablePoster = Poster && Poster !== "N/A";

  return (
    <div className={detailCx}>
      <div className="movie-top-wrapper">
        <h1 className="title">{Title}</h1>
        <div className="subtitle">
          <span>{Year}</span>
          <span>{Rated}</span>
          <span>{Runtime}</span>
        </div>
        <div className={cx("movie-type", Type)}>
          <span>{Type}</span>
        </div>
      </div>
      <div className="movie-poster-wrapper">
        <div className="movie-poster">
          {isAvailablePoster ? (
            <LazyLoadImage src={Poster} width={130} height={200} />
          ) : (
            <div className="placeholder" />
          )}
        </div>
        <div className="right-poster">
          <div className="genres">
            {Genre?.split(",")
              .filter(Boolean)
              .map((g) => (
                <div key={g} className={cx("genre", g.toLowerCase())}>
                  <span>{g}</span>
                </div>
              ))}
          </div>
          <div className="info">
            <span className="label">Directed By</span>
            <span className="director value">{Director}</span>
          </div>
          <div className="info">
            <span className="label">Writers</span>
            <span className="writers value">{Writer}</span>
          </div>
          <div className="movie-like">
            <Heart icontype="outline" />
          </div>
        </div>
      </div>
      <div className="synopsis">
        <h1 className="title">Synopsis</h1>
        <p>{Plot}</p>
      </div>
    </div>
  );
};

export default Detail;
