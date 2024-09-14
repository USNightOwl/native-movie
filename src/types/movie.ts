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
