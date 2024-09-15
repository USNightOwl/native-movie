import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import useSWR from "swr";
import { LinearGradient } from "expo-linear-gradient";
import LayoutDefault from "../layouts";
import { API, fetcher } from "../api";
import { MovieDetailType } from "../types/movie";
import OverView from "../components/movie-screen/overview";

const { width, height } = Dimensions.get("window");

const MovieScreen = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<ParamList>>();

  const { data, isLoading } = useSWR<MovieDetailType>(API.getDetail(id, "movie"), fetcher);

  if (!data || isLoading) return <Text />;
  return (
    <LayoutDefault>
      <View>
        <Image
          source={{
            uri: API.getImageUrl(data.poster_path),
          }}
          width={width}
          height={height * 0.6}
        />
        <LinearGradient
          colors={["transparent", "rgba(23, 23, 23, 0.4)", "rgba(23, 23, 23, 6)"]}
          style={{ width, height: height * 0.4 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
      </View>
      <OverView data={data} />
    </LayoutDefault>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
