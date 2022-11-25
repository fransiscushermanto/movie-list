import Header from "../../components/Layout/Header";
import { useWatchlist } from "../../context/WatchlistContext";
import MovieCard from "../../presentation/MovieCard";
import { watchlistCx } from "./style";

const Watchlist = () => {
  const { watchlist } = useWatchlist();

  return (
    <>
      <Header title="Watchlist" />
      <div className={watchlistCx}>
        <ul className="watchlist">
          {watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Watchlist;
