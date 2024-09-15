import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ClockIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { format } from "date-fns";
import { MovieDetailType } from "../../../types/movie";
import OverviewText from "./text";
import { styles } from "../../../themes";
import Divider from "../../common/divider";
import GenreList from "./genres-list";

interface OverviewProps {
  data: MovieDetailType;
}

const OverView = ({ data }: OverviewProps) => (
  <View className="p-4 pt-2">
    <OverviewText className="text-slate-500 text-sm italic mb-1">{data.tagline}</OverviewText>
    <Text style={styles.text} className="text-2xl font-bold">
      {data.title}
    </Text>

    <View className="flex-row items-center mt-2">
      <View className="flex-row items-center mr-6">
        <ClockIcon size={14} className="text-slate-500 mr-1" />
        <OverviewText className="text-sm">{data.runtime}min</OverviewText>
      </View>
      <View className="flex-row items-center">
        <StarIcon size={14} className="text-slate-400 mr-1" />
        <OverviewText className="text-sm">{data.vote_average}</OverviewText>
      </View>
    </View>

    <Divider className="my-3" />

    <View className="flex-row">
      <View className="flex-1">
        <OverviewInfo label="Release date" value={format(new Date(data.release_date), "MMMM dd, yyyy")} />
      </View>
      <View className="flex-1">
        <OverviewInfo label="Genre" value={<GenreList genres={data.genres} />} />
      </View>
    </View>

    <Divider className="my-3" />

    <OverviewText className="text-white text-lg font-semibold mt-2 mb-1">Overview</OverviewText>
    <OverviewText>{data.overview}</OverviewText>

    <Divider className="my-3" />

    <View className="flex-1 flex-row mb-4">
      <View className="flex-1">
        <OverviewInfo label="Status" value={data.status} />
        <OverviewInfo label="Original Language" value={data.original_language} />
      </View>
      <View className="flex-1">
        <OverviewInfo label="Budget" value={data.budget} />
        <OverviewInfo label="Revenue" value={data.revenue} />
      </View>
    </View>
  </View>
);

export default OverView;

interface OverviewInfoProps {
  label: string;
  value: string | React.ReactNode;
}

export const OverviewInfo = ({ label, value }: OverviewInfoProps) => (
  <View className="my-2 mb-3">
    <OverviewText className="text-white font-semibold text-base">{label}</OverviewText>
    <OverviewText className="mt-0.5">{value}</OverviewText>
  </View>
);
