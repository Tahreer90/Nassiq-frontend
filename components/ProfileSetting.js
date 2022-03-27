import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
  Image,
} from "react-native";
import {
  Button,
  Layout,
  Text,
  Input,
  Icon,
  Avatar,
} from "@ui-kitten/components";
import React from "react";
import NQInput from "./tools/NQInput";
import NQPassword from "./tools/NQPassword";
import NQButton from "./tools/NQButton";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import authStore from "../stores/authStore";
import { baseUrl } from "../stores/instance";

const ProfilePage = () => {
  const Navigation = useNavigation();
  const username = authStore.user;
  const [value, setValue] = React.useState(username.username);
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const updateInfo = { newusername: value, newpassword: value2 };
  const handleSave = async () => {
    await authStore.updateUserInfo(updateInfo);
    Navigation.goBack();
    Navigation.goBack();
    Navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        style={{ backgroundColor: "#FFFFFF" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Layout style={{ flex: 1, justifyContent: "center" }}>
            <Layout style={{ flex: 1 }}>
              <Layout
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text category="h5">Edit Profile</Text>
              </Layout>
              <Image
                style={styles.image}
                size={50}
                source={{ uri: baseUrl + "/" + username.image }}
              />
            </Layout>

            <Layout style={{ flex: 3, marginLeft: 25 }}>
              <Text
                style={{ marginTop: 20, marginBottom: 15, marginLeft: 5 }}
                category="h6"
              >
                Username
              </Text>
              <NQInput
                placeholder={username.username}
                style={{}}
                category="h6"
                value={value}
                setValue={setValue}
              >
                username
              </NQInput>

              <Text
                style={{ marginTop: 20, marginBottom: 15, marginLeft: 5 }}
                category="h6"
              >
                New Password
              </Text>
              <NQPassword
                style={{}}
                category="h6"
                value1={value2}
                setValue1={setValue2}
                placeholder="new password"
              >
                new password
              </NQPassword>
              <Text
                style={{ marginTop: 20, marginBottom: 15, marginLeft: 5 }}
                category="h6"
              >
                Confirm Password
              </Text>
              <NQPassword
                style={{}}
                category="h6"
                value1={value3}
                setValue1={setValue3}
                placeholder="confirm new password"
              >
                confirm password
              </NQPassword>
            </Layout>
            <Layout style={{ flex: 1, alignItems: "center" }}>
              <Button onPress={handleSave} style={styles.btn}>
                Save
              </Button>
              <Button
                appearance="ghost"
                status="primary"
                onPress={() => Navigation.goBack()}
              >
                Cancel
              </Button>
            </Layout>
          </Layout>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  btn: {
    width: 334,
    height: 45,
    borderRadius: 100,
    fontSize: 18,
    fontWeight: "700",
  },
  image: {
    marginTop: 20,
    height: 100,
    width: 100,
    borderRadius: 70,
    alignSelf: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
  },
});
