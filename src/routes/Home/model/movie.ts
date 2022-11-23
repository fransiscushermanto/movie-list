export interface MovieModel {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

export interface MovieResponse {
  Search: MovieModel[];
  totalResults: number;
}
