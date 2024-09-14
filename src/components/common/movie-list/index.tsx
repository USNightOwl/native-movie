import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { memo } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MovieType } from "../../../types/movie";
import { theme } from "../../../themes";
import MovieCard from "./movie-card";

const style = StyleSheet.create({
  flat: {
    paddingHorizontal: 10,
  },
});

interface MovieListProps {
  title: string;
  data: MovieType[];
  isLoading?: boolean;
}

const MovieList = ({ title, data, isLoading }: MovieListProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View className="mb-8 mx-1">
      <View
        style={{ borderColor: theme.main }}
        className="border-l-4 flex-row items-center pl-2 justify-between mb-4 mt-2 mx-4"
      >
        <Text className="text-white text-xl">{title}</Text>
      </View>
      {!!isLoading && <MovieList.Skeleton />}
      {!isLoading && !!data.length && (
        <FlatList
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.flat}
          data={data}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <MovieCard size="small" movie={item} onPress={() => navigation.navigate("Movie", item)} />
            </TouchableWithoutFeedback>
          )}
        />
      )}
      {!isLoading && !data.length && <Text className="text-slate-400 px-4 text-base">No data founded</Text>}
    </View>
  );
};

export default memo(MovieList);

MovieList.Skeleton = () => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={style.flat}
    nestedScrollEnabled
    data={[1, 2, 3, 4]}
    renderItem={({ item }) => (
      <TouchableWithoutFeedback key={item}>
        <MovieCard.Skeleton size="small" />
      </TouchableWithoutFeedback>
    )}
  />
);
