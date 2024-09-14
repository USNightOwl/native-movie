import React from "react";
import { registerRootComponent } from "expo";
import AppNavigation from "./navigation/AppNavigation";

export default function App(): JSX.Element {
  return <AppNavigation />;
}

registerRootComponent(App);
