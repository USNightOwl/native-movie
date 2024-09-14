import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { format } from "date-fns";
import { TvShowType } from "../../../../types/movie";
import { API } from "../../../../api";
import Rate from "../../rate";
import { styles } from "../../../../themes";

const { width } = Dimensions.get("window");

interface TvShowItemProp {
  data: TvShowType;
  children?: React.ReactNode;
}

const TvShowItem = ({ data, children }: TvShowItemProp) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableWithoutFeedback key={data.id} onPress={() => navigation.navigate("TvShow", { id: data.id })}>
      <View className="m-2">
        <View>
          <Image
            source={{
              uri: API.getImageUrl(data.backdrop_path || data.poster_path),
            }}
            width={width * 0.75}
            height={180}
            className="rounded-3xl"
          />
          <View className="absolute left-4 -bottom-4 bg-slate-900 rounded-full">
            <Rate progress={data.vote_average / 10} rate={data.vote_average} />
          </View>
        </View>
        <View className="pt-5 px-2">
          <Text numberOfLines={1} style={[styles.text, { width: width * 0.75 }]} className="font-bold">
            {data.name}
          </Text>
          {data.first_air_date && (
            <Text className="text-slate-500 mt-0.5 text-xs">
              {format(new Date(data.first_air_date), "MMMM dd, yyyy")}
            </Text>
          )}
          <Text
            style={{
              width: width * 0.75,
            }}
            className="text-sm text-slate-400 mt-1.5"
            numberOfLines={2}
          >
            {data.overview}
          </Text>
        </View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TvShowItem;

const style = StyleSheet.create({});
