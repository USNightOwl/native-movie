import React from "react";
import useSWR from "swr";
import LayoutDefault from "../layouts";
import TrendingMovies from "../components/common/trending-movies";
import MovieList from "../components/common/movie-list";
import { CommonResponse } from "../types";
import { MovieType } from "../types/movie";
import { API, fetcher } from "../api";

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

  const { data: horrorList, isLoading: horrorLoading } = useSWR<CommonResponse<MovieType[]>>(
    () => API.getHorrorList(),
    fetcher,
  );

  return (
    <LayoutDefault>
      <TrendingMovies />
      <MovieList title="Top rated" isLoading={topRatedLoading} data={topRatedList?.results || []} />
      <MovieList title="Up coming" isLoading={popularLoading} data={popularList?.results || []} />
      <MovieList title="Anime" isLoading={animeLoading} data={animeList?.results || []} />
      <MovieList title="Horror" isLoading={horrorLoading} data={horrorList?.results || []} />
    </LayoutDefault>
  );
};

export default HomeScreen;
