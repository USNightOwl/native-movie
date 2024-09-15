/* eslint-disable camelcase */
export type CommonResponse<T> = {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
};

export interface GenresDetailType {
  id: number;
  name: string;
}

export interface ProductionCompanyType {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountryType {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
