export interface MovieModel {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
}

export interface GetMoviesResponse {
  Search: MovieModel[];
  totalResults: number;
}

export interface MovieRating {
  Source: "Internet Movie Database" | "Metacritic" | "Rotten Tomatoes";
  Value: string;
}

export interface DetailMovieModel extends MovieModel {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Website: string;
  Writer: string;
  imdbRating: string;
  imdbVotes: string;
  Ratings: MovieRating[];
}
