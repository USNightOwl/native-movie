import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TvShowType } from "../../../types/movie";
import { theme } from "../../../themes";
import TvShowItem from "./tv-show-item";

const style = StyleSheet.create({
  flat: {
    paddingHorizontal: 10,
  },
});

interface TvShowListProps {
  title: string;
  data: TvShowType[];
}

const TvShowList = ({ title, data }: TvShowListProps) => (
  <View className="mb-8 mx-1">
    <View style={{ borderColor: theme.main }} className="border-l-4 pl-2 mb-4 mt-2 mx-4">
      <Text className="text-white text-xl">{title}</Text>
    </View>
    <FlatList
      horizontal
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={style.flat}
      nestedScrollEnabled
      data={data}
      renderItem={({ item }) => <TvShowItem data={item} />}
    />
  </View>
);

export default TvShowList;

const styles = StyleSheet.create({});
