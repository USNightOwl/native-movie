import { EMovieType } from "../types/movie";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const apiKey = "1a763884400befdbd957d043e8e9e19c";

const apiDomain = `https://api.themoviedb.org/3`;

export const API = {
  getMovieList: (type: EMovieType | string, page = 1, mediaType = "all"): string => {
    if (type === EMovieType.POPULAR || type === EMovieType.TOP_RATED || type === EMovieType.NOW_PLAYING)
      return `${apiDomain}/${mediaType}/${type}?api_key=${apiKey}&page=${page}`;
    if (type === EMovieType.DISCOVER) return `${apiDomain}/${type}/${mediaType}?api_key=${apiKey}&page=${page}`;
    return `${apiDomain}/${type}/${mediaType}/day?api_key=${apiKey}&page=${page}`;
  },
  getImageUrl: (backdropPath: string, size = "original") => `https://image.tmdb.org/t/p/${size}/${backdropPath}`,
};
