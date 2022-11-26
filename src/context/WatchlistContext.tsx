import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DetailMovieModel, MovieModel } from "../model/movie";

interface WatchlistContextProps {
  watchlist: (MovieModel | DetailMovieModel)[];
  addToWatchlist(movie: MovieModel | DetailMovieModel): void;
  isMovieInWatchlist(imdbID: string): boolean;
  removeFromWatchlist(imdbID: string): void;
}

interface WatchlistProviderProps {
  children: ReactNode;
}

const WatchlistContext = createContext<WatchlistContextProps>({
  watchlist: [],
  addToWatchlist: () => {},
  isMovieInWatchlist: () => false,
  removeFromWatchlist: () => {},
});

export const WATCHLIST_STORAGE_KEY = "my-watchlist";

const WatchlistProvider: FC<WatchlistProviderProps> = ({ children }) => {
  const [watchlist, setWatchlist] = useState<(MovieModel | DetailMovieModel)[]>(
    [],
  );

  const addToWatchlist = useCallback((movie: MovieModel | DetailMovieModel) => {
    setWatchlist((prev) => {
      const result = [
        ...prev.filter(({ imdbID }) => imdbID !== movie.imdbID),
        movie,
      ];

      window.localStorage.setItem(
        WATCHLIST_STORAGE_KEY,
        JSON.stringify(result),
      );

      return result;
    });
  }, []);

  const isMovieInWatchlist = useCallback(
    (imdbID: string) => watchlist.some((m) => m.imdbID === imdbID),
    [watchlist],
  );

  const removeFromWatchlist = useCallback((imdbID: string) => {
    setWatchlist((prev) => {
      const result = prev.filter((m) => m.imdbID !== imdbID);

      window.localStorage.setItem(
        WATCHLIST_STORAGE_KEY,
        JSON.stringify(result),
      );

      return result;
    });
  }, []);

  useEffect(() => {
    const savedWatchlist = window.localStorage.getItem(WATCHLIST_STORAGE_KEY);
    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    }
  }, []);
  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        isMovieInWatchlist,
        removeFromWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

const useWatchlist = () => {
  return useContext(WatchlistContext);
};

export { WatchlistProvider, useWatchlist, WatchlistContext };
