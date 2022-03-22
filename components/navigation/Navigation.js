import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { Details } from "./Details";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import Lists from "../Lists";
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="Lists">
    <Screen name="Home" component={Home} />
    <Screen name="Details" component={Details} />
    <Screen name="Signin" component={Signin} />
    <Screen name="Signup" component={Signup} />
    <Screen name="Lists" component={Lists} />
  </Navigator>
);

export const Navigation = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
