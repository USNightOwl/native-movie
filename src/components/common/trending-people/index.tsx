import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PeopleType } from "../../../types/people";
import PeopleItemCard from "./trending-people-item";

interface TrendingPeppleProps {
  data: PeopleType[];
}

const TrendingPeople = ({ data }: TrendingPeppleProps) => (
  <View className="my-6 bg-opacity-30 py-4 pb-8 bg-[#211f30]">
    <Text className="text-center text-xl text-white mx-4 mb-5 font-bold">Trending People</Text>
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      renderItem={({ item: person }) => <PeopleItemCard data={person} />}
    />
  </View>
);

export default TrendingPeople;

const styles = StyleSheet.create({});
