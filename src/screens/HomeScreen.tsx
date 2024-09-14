import React from "react";
import useSWR from "swr";
import LayoutDefault from "../layouts";
import TrendingMovies from "../components/common/trending-movies";
import MovieList from "../components/common/movie-list";
import { CommonResponse } from "../types";
import { MovieType, TvShowType } from "../types/movie";
import { API, fetcher } from "../api";
import { PeopleType } from "../types/people";
import TvShowList from "../components/common/tv-show-list";

const HomeScreen = () => {
  const { data: topRatedList, isLoading: topRatedLoading } = useSWR<CommonResponse<MovieType[]>>(
    () => API.getMovieList("top_rated", 1, "movie"),
    fetcher,
  );

  const { data: popularList, isLoading: popularLoading } = useSWR<CommonResponse<MovieType[]>>(
    () => API.getMovieList("now_playing", 1, "movie"),
    fetcher,
  );

  const { data: animeList, isLoading: animeLoading } = useSWR<CommonResponse<MovieType[]>>(
    () => API.getAnimeList(),
    fetcher,
  );

  const { data: tvList, isLoading: tvListLoading } = useSWR<CommonResponse<TvShowType[]>>(
    () => API.getMovieList("popular", 1, "tv"),
    fetcher,
  );

  const { data: trendingPersonList, isLoading: trendingPersonLoading } = useSWR<CommonResponse<PeopleType[]>>(
    () => API.getTrendingList(),
    fetcher,
  );

  const { data: horrorList, isLoading: horrorLoading } = useSWR<CommonResponse<MovieType[]>>(
    () => API.getHorrorList(),
    fetcher,
  );

  const { data: animeEpisodeList } = useSWR<CommonResponse<TvShowType[]>>(() => API.getAnimeEpisodeList(), fetcher);

  return (
    <LayoutDefault>
      <TrendingMovies />
      <MovieList title="Top rated" isLoading={topRatedLoading} data={topRatedList?.results || []} />
      <MovieList title="Up coming" isLoading={popularLoading} data={popularList?.results || []} />
      <MovieList title="Anime" isLoading={animeLoading} data={animeList?.results || []} />
      <TvShowList title="Top Anime Series" data={animeEpisodeList?.results || []} />
      {/*  */}
      <TvShowList title="Top TV Show" data={tvList?.results || []} />
      <MovieList title="Horror" isLoading={horrorLoading} data={horrorList?.results || []} />
    </LayoutDefault>
  );
};

export default HomeScreen;
