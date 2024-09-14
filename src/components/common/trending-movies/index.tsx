import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useSWR from "swr";
import Carousel from "react-native-snap-carousel-v4";
import { API, fetcher } from "../../../api";
import { EMovieType, MovieType } from "../../../types/movie";
import { CommonResponse } from "../../../types";
import MovieCard from "../movie-list/movie-card";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  slide: {
    display: "flex",
    alignItems: "center",
  },
});

const TrendingMovies = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  // fecth movies
  const { data, error, isLoading } = useSWR<CommonResponse<MovieType[]>>(
    () => API.getMovieList(EMovieType.POPULAR, 1, "movie"),
    fetcher,
  );

  if (error) {
    return <Text>Error loading data</Text>;
  }

  return (
    <View>
      {!data && isLoading ? (
        <TrendingMovies.Skeleton />
      ) : (
        <Carousel
          data={data?.results || []}
          vertical={false}
          renderItem={({ item }) => (
            <MovieCard movie={item} onPress={() => navigation.navigate("Movie", { id: item.id })} />
          )}
          firstItem={0}
          sliderWidth={width}
          itemWidth={width * 0.7}
          slideStyle={styles.slide}
        />
      )}
    </View>
  );
};

export default TrendingMovies;

TrendingMovies.Skeleton = () => (
  <Carousel
    data={[1, 2, 3, 4]}
    renderItem={() => <MovieCard.Skeleton />}
    vertical={false}
    firstItem={0}
    sliderWidth={width}
    itemWidth={width * 0.7}
    slideStyle={styles.slide}
  />
);
