import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
  Image,
  Switch,
  Pressable,
} from "react-native";
import { Button, Layout, Text, Input, Icon } from "@ui-kitten/components";
import {
  Fontisto,
  AntDesign,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { ThemeContext } from "../components/navigation/theme-context";
import authStore from "../stores/authStore";
import { useNavigation } from "@react-navigation/core";
import { baseUrl } from "../stores/instance";

const Profile = () => {
  const username = authStore.user;

  const Navigation = useNavigation();

  const themeContext = React.useContext(ThemeContext);
  // themeContext.toggleTheme
  const handleSubmit = () => {
    authStore.signout();
    Navigation.replace("Signin");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <Layout style={styles.profileContainer}>
          <Text style={styles.profile}>Profile</Text>
          <MaterialIcons
            name="logout"
            size={24}
            color="#FD6B68"
            style={styles.bell}
            onPress={handleSubmit}
          />
        </Layout>
        <Image
          style={styles.avatar}
          size={100}
          source={{ uri: baseUrl + "/" + username.image }}
        />
        <Text style={styles.user}>{username.username}</Text>
      </Layout>
      <Layout flex={2}>
        <Layout
          style={{
            flex: 4,
            margin: 20,
            // backgroundColor: "#F1F1F5",
            borderRadius: 26,
          }}
          level="2"
        >
          <Pressable
            onPress={() => Navigation.navigate("ProfilePage")}
            style={{
              flex: 1.5,
            }}
          >
            <Layout
              style={{
                flex: 1,
                flexDirection: "row",
                margin: 10,
                borderBottomWidth: 2,
                borderBottomColor: "#F5F5FF",
                //   backgroundColor: "#F1F1F5",
              }}
              level="2"
            >
              <AntDesign
                name="user"
                color="#FD6B68"
                size={40}
                style={{ marginLeft: 20 }}
              />
              <Text style={styles.text}>Profile info</Text>
              <MaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="black"
                style={{ position: "absolute", right: 10, top: 13 }}
              />
            </Layout>
          </Pressable>
          <Layout
            style={{
              flex: 1,
              flexDirection: "row",
              margin: 10,
              borderBottomWidth: 2,
              borderBottomColor: "#F5F5FF",
              //   backgroundColor: "#F1F1F5",
            }}
            level="2"
          >
            <AntDesign
              name="addusergroup"
              size={40}
              color="#FD6B68"
              style={{ marginLeft: 20 }}
            />
            <Text style={styles.text2}>Groups</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={24}
              color="black"
              style={{ position: "absolute", right: 10, top: 13 }}
            />
          </Layout>
          <Layout
            style={{
              flex: 1,
              flexDirection: "row",
              margin: 10,
              borderBottomWidth: 2,
              borderBottomColor: "#F5F5FF",
              //   backgroundColor: "#F1F1F5",
            }}
            level="2"
          >
            <Feather
              name="sun"
              size={40}
              color="#FD6B68"
              style={{ marginLeft: 20 }}
            />
            <Text style={styles.text2}>Mode</Text>
            <Switch
              onChange={themeContext.toggleTheme}
              size="sm"
              style={{ position: "absolute", right: 10, top: 13 }}
            />
            {/* <MaterialIcons
              name="arrow-forward-ios"
              size={24}
              color="black"
              style={{ position: "absolute", right: 10, top: 13 }}
            /> */}
          </Layout>
          <Layout
            style={{
              flex: 1,
              flexDirection: "row",
              margin: 10,
              borderBottomWidth: 2,
              borderBottomColor: "#F5F5FF",
              //   backgroundColor: "#F1F1F5",
            }}
            level="2"
          >
            <MaterialIcons
              name="history"
              size={40}
              color="#FD6B68"
              style={{ marginLeft: 20 }}
            />
            <Text style={styles.text2}>History</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={24}
              color="black"
              style={{ position: "absolute", right: 10, top: 13 }}
            />
          </Layout>
          <Layout
            style={{
              flex: 1,
              flexDirection: "row",
              margin: 10,
              borderBottomWidth: 2,
              borderBottomColor: "#F1F1F5",
              //   backgroundColor: "#F1F1F5",
            }}
            level="2"
          >
            <Ionicons
              name="ios-wallet-outline"
              size={40}
              color="#FD6B68"
              style={{ marginLeft: 20 }}
            />
            <Text style={styles.text}>My Wallet</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={24}
              color="black"
              style={{ position: "absolute", right: 10, top: 13 }}
            />
          </Layout>
        </Layout>
        <Layout flex={1}></Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 30,
    flexDirection: "row",
  },
  profile: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 22,
  },
  bell: {
    left: 130,
  },

  avatar: {
    marginTop: 20,
    height: 120,
    width: 120,
    borderRadius: 70,
    alignSelf: "center",
  },
  user: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 22,
    marginTop: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 13,
  },
  text2: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 10,
  },
});
