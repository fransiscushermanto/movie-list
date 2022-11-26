import { act, renderHook } from "../../utils/test";
import {
  useWatchlist,
  WatchlistProvider,
  WATCHLIST_STORAGE_KEY,
} from "../WatchlistContext";

const mockWishlist = [
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "World War Z",
    Year: "2013",
    imdbID: "tt0816711",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  },
];

const localStorageMock = (function () {
  let store: Record<string, string> = {};

  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem: function (key: string) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, WATCHLIST_STORAGE_KEY, {
  value: localStorageMock,
});

describe("WatchlistContext", () => {
  beforeEach(() => {
    window.localStorage.setItem(
      WATCHLIST_STORAGE_KEY,
      JSON.stringify(mockWishlist),
    );
  });

  it("should return correct watchlist array", () => {
    const wrapper = ({ children }: any) => (
      <WatchlistProvider>{children}</WatchlistProvider>
    );
    const { result } = renderHook(() => useWatchlist(), { wrapper });
    const watchlist = result.current.watchlist;

    const movie = {
      Title: "Captain America: Civil War",
      Year: "2016",
      imdbID: "tt3498820",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    };

    act(() => {
      expect(watchlist).toHaveLength(2);
      result.current.addToWatchlist(movie);
    });

    const savedWatchlist_1 = JSON.parse(
      window.localStorage.getItem(WATCHLIST_STORAGE_KEY) || "",
    );
    expect(savedWatchlist_1).toHaveLength(3);
    expect(savedWatchlist_1).toContainEqual(movie);
    expect(result.current.isMovieInWatchlist(movie.imdbID)).toBe(true);

    act(() => {
      result.current.removeFromWatchlist(movie.imdbID);
    });

    const savedWatchlist_2 = JSON.parse(
      window.localStorage.getItem(WATCHLIST_STORAGE_KEY) || "",
    );
    expect(savedWatchlist_2).toHaveLength(2);
    expect(savedWatchlist_2).not.toContainEqual(movie);
  });
});
