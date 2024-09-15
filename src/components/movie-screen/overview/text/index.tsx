import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface OverviewTextProps {
  className?: string;
  children: React.ReactNode;
}

const OverviewText = ({ className, children }: OverviewTextProps) => (
  <Text className={`${className} text-slate-400 text-sm`}>{children}</Text>
);

export default OverviewText;

const styles = StyleSheet.create({});
