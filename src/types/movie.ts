import { GenresDetailType, ProductionCompanyType, ProductionCountryType, SpokenLanguage } from ".";

/* eslint-disable camelcase */
export enum EMovieType {
  POPULAR = "popular",
  TOP_RATED = "top_rated",
  NOW_PLAYING = "now_playing",
  DISCOVER = "discover",
}

export interface CommonType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

export interface MovieType extends CommonType {
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  original_title: string;
}

export interface TvShowType extends CommonType {
  name: string;
  first_air_date: string;
  origin_country: string[];
  original_name: string;
  poster_path: string;
}

export interface MovieDetailType extends MovieType {
  belongs_to_collection: string | null;
  budget: number;
  genres: GenresDetailType[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}
