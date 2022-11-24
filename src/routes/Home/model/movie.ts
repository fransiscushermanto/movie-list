export interface MovieModel {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
}

export interface MovieResponse {
  Search: MovieModel[];
  totalResults: number;
}
