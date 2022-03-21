import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { Details } from "./Details";
import Signin from "../auth/Signin";
import Profile from "../Profile";
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="Profile">
    <Screen name="Home" component={Home} />
    <Screen name="Profile" component={Profile} />
    <Screen name="Details" component={Details} />
    <Screen name="Signin" component={Signin} />
  </Navigator>
);

export const Navigation = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
