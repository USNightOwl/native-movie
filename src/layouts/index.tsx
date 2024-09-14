import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { ChevronLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import Logo from "../../assets/logo.png";

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 10,
  },
});

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();

  return (
    <View className="flex-1 bg-[#15141f]">
      <SafeAreaView className="mb-3">
        <StatusBar style="dark" translucent={false} />
        <View className="flex-row justify-between items-center mx-4 pt-3 pb-2">
          {route.name !== "Home" && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeftIcon size={30} strokeWidth={2} color="white" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={Logo} className="h-8 w-40" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator contentContainerStyle={styles.scrollView}>
        {children}
      </ScrollView>
    </View>
  );
};

export default LayoutDefault;
