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
import { SafeAreaView } from "react-native";
import { ThemeContext } from "../../components/navigation/theme-context";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = ({
  registerForPushNotificationsAsync,
  setExpoPushToken,
  expoPushToken,
}) => (
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
    <Screen
      name="Signin"
      component={(navigation) => (
        <Signin
          navigation={navigation}
          expoPushToken={expoPushToken}
          registerForPushNotificationsAsync={registerForPushNotificationsAsync}
          setExpoPushToken={setExpoPushToken}
        />
      )}
    />
    <Screen
      name="Signup"
      component={(navigation) => (
        <Signup
          navigation={navigation}
          expoPushToken={expoPushToken}
          registerForPushNotificationsAsync={registerForPushNotificationsAsync}
          setExpoPushToken={setExpoPushToken}
        />
      )}
    />
    <Screen
      name="Lists"
      component={() => (
        <Lists
          expoPushToken={expoPushToken}
          registerForPushNotificationsAsync={registerForPushNotificationsAsync}
          setExpoPushToken={setExpoPushToken}
        />
      )}
    />
  </Navigator>
);

export const Navigation = ({
  registerForPushNotificationsAsync,
  setExpoPushToken,
  expoPushToken,
}) => {
  console.log(ThemeContext._currentValue.theme);
  const themeColor =
    ThemeContext._currentValue.theme == "light" ? "white" : "#232C43";

  return (
    <SafeAreaView style={{ backgroundColor: themeColor, flex: 1 }}>
      <NavigationContainer>
        <HomeNavigator
          expoPushToken={expoPushToken}
          registerForPushNotificationsAsync={registerForPushNotificationsAsync}
          setExpoPushToken={setExpoPushToken}
        />
      </NavigationContainer>
    </SafeAreaView>
  );
};
