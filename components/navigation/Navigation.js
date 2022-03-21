import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { Details } from "./Details";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import HomeMain from "../Home";
import ProfilePage from "../ProfilePage";
import AddTask from "../AddTask";
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="Signin">
    <Screen name="Home" component={Home} />
    <Screen name="HomeMain" component={HomeMain} />
    <Screen name="ProfilePage" component={ProfilePage} />
    <Screen name="AddTask" component={AddTask} />
    <Screen name="Details" component={Details} />
    <Screen name="Signin" component={Signin} />
    <Screen name="Signup" component={Signup} />
  </Navigator>
);

export const Navigation = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
