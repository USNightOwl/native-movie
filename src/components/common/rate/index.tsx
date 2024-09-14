import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Circle } from "react-native-progress";
import { theme } from "../../../themes";

type Size = "small" | "normal";

enum SizeEnum {
  "small" = 38,
  "normal" = 45,
}

interface RateProps {
  rate: number;
  progress: number;
  size?: Size;
}

const Rate = ({ progress, rate, size = "normal" }: RateProps) => {
  if (!progress || !rate) {
    return null;
  }
  return (
    <Circle
      color={theme.main}
      borderColor="transparent"
      progress={progress}
      thickness={3}
      size={SizeEnum[size]}
      showsText
      formatText={() => <Text className="font-bold text-sm text-white">{rate.toFixed(1)}</Text>}
    />
  );
};

export default Rate;

const styles = StyleSheet.create({});
