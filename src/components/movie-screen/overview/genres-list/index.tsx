import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GenresDetailType } from "../../../../types";
import OverviewText from "../text";

interface GenresListProps {
  genres: GenresDetailType[];
}

const GenreList = ({ genres }: GenresListProps) => (
  <View className="flex-row mr-1 flex-wrap mb-2">
    {genres.map((item, index) => (
      <OverviewText key={item.id}>
        {item.name}
        {index !== genres.length - 1 && <Text>, </Text>}
      </OverviewText>
    ))}
  </View>
);

export default GenreList;

const styles = StyleSheet.create({});
