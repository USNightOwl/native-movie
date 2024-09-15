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
  getDetail: (
    id: string,
    type = "movie", // movie | tv | person
  ) => `${apiDomain}/${type}/${id}?api_key=${apiKey}`,
  getImageUrl: (backdropPath: string, size = "original") => `https://image.tmdb.org/t/p/${size}/${backdropPath}`,
  getAnimeList: () =>
    `${apiDomain}/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death&sort_by=popularity.desc`,
  getHorrorList: () =>
    `${apiDomain}/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27`,
  getTrendingList: (
    query = "person", // movie | person | tv
  ) => `${apiDomain}/trending/${query}/day?api_key=${apiKey}`,
  getAnimeEpisodeList:
    () => `${apiDomain}/discover/tv?api_key=${apiKey}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death&sort_by=popularity.desc
  `,
};
