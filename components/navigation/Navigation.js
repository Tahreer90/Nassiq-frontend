import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { Details } from "./Details";
import Signin from "../auth/Signin";
import Profile from "../Profile";
import HomeMain from "../Home";
import ProfilePage from "../ProfileSetting";
import AddTask from "../AddTask";
import GroupMemberList from "../GroupMemberList";
import GroupList from "../GroupList";
import Signup from "../auth/Signup";
import Lists from "../Lists";
import SwipeOut from "../SwipeOut";
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName="Signin">
    <Screen name="Home" component={Home} />
    <Screen name="Profile" component={Profile} />
    <Screen name="SwipeOut" component={SwipeOut} />

    <Screen name="HomeMain" component={HomeMain} />
    <Screen name="ProfilePage" component={ProfilePage} />
    <Screen name="AddTask" component={AddTask} />
    <Screen name="GroupMemberList" component={GroupMemberList} />
    <Screen name="GroupList" component={GroupList} />
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
