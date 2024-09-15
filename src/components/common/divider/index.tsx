import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../../themes";

interface DividerProp {
  className?: string;
}

const styles = StyleSheet.create({
  divider: {
    borderTopWidth: 0.5,
    borderTopColor: theme.border,
  },
});

const Divider = ({ className }: DividerProp) => <View className={className} style={styles.divider} />;

export default Divider;
