import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const options = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={options} />
        <Stack.Screen name="Movie" component={MovieScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
