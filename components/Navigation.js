import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { Details } from "./Details";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="Details" component={Details} />
  </Navigator>
);

export const Navigation = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
