import { render, screen } from "../../../utils/test";
import MovieCard from "../MovieCard";

const mockMovie = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  Title: "Avengers: Infinity War",
  Type: "movie",
  Year: "2018",
  imdbID: "tt4154756",
};

const backgroundColor: any = {
  movie: "red",
  series: "blueviolet",
  episode: "black",
  game: "cadetblue",
};

describe("MovieCard", () => {
  it("should render movie poster", () => {
    render(<MovieCard {...mockMovie} />);
    screen.getByAltText(mockMovie.Title);
  });

  it("should render movie title", () => {
    render(<MovieCard {...mockMovie} />);
    const movieCardWrapper = screen.getByTestId(`movie-${mockMovie.imdbID}`);
    const title = movieCardWrapper.querySelector("div.title");
    expect(title).toHaveTextContent(mockMovie.Title);
  });

  it("should render movie year", () => {
    render(<MovieCard {...mockMovie} />);
    const movieCardWrapper = screen.getByTestId(`movie-${mockMovie.imdbID}`);
    const year = movieCardWrapper.querySelector("div.year");
    expect(year).toHaveTextContent(mockMovie.Year);
  });

  it("should render movie type", () => {
    render(<MovieCard {...mockMovie} />);
    const movieCardWrapper = screen.getByTestId(`movie-${mockMovie.imdbID}`);
    const type = movieCardWrapper.querySelector(
      `div.movie-type.${mockMovie.Type}`,
    );
    expect(type).toHaveTextContent(mockMovie.Type);
    const style = getComputedStyle(type as Element);
    expect(style.backgroundColor).toBe(backgroundColor[mockMovie.Type]);
  });

  describe("should render correct backgroundColor for type", () => {
    it("type movie", () => {
      render(<MovieCard {...mockMovie} />);
      const movieCardWrapper = screen.getByTestId(`movie-${mockMovie.imdbID}`);

      const type = movieCardWrapper.querySelector(
        `div.movie-type.movie`,
      ) as Element;
      const style = getComputedStyle(type);
      expect(style.backgroundColor).toBe(backgroundColor["movie"]);
    });

    it("type series", () => {
      render(<MovieCard {...mockMovie} Type="series" />);
      const movieCardWrapper = screen.getByTestId(`movie-${mockMovie.imdbID}`);

      const type = movieCardWrapper.querySelector(
        `div.movie-type.series`,
      ) as Element;
      const style = getComputedStyle(type);
      expect(style.backgroundColor).toBe(backgroundColor["series"]);
    });

    it("type episode", () => {
      render(<MovieCard {...mockMovie} Type="episode" />);
      const movieCardWrapper = screen.getByTestId(`movie-${mockMovie.imdbID}`);

      const type = movieCardWrapper.querySelector(
        `div.movie-type.episode`,
      ) as Element;
      const style = getComputedStyle(type);
      expect(style.backgroundColor).toBe(backgroundColor["episode"]);
    });

    it("type game", () => {
      render(<MovieCard {...mockMovie} Type="game" />);
      const movieCardWrapper = screen.getByTestId(`movie-${mockMovie.imdbID}`);

      const type = movieCardWrapper.querySelector(
        `div.movie-type.game`,
      ) as Element;
      const style = getComputedStyle(type);
      expect(style.backgroundColor).toBe(backgroundColor["game"]);
    });
  });
});
