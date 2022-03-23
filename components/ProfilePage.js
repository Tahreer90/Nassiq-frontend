import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
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

const ProfilePage = () => {
  const Navigation = useNavigation();
  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");

  const handleSave = () => {
    Navigation.replace("Profile");
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
                <Text category="h1">Info</Text>
                <FontAwesome
                  name="bell-o"
                  size={24}
                  color="black"
                  style={{ right: 15, position: "absolute", marginTop: 5 }}
                />
              </Layout>
              <Avatar
                style={{ marginTop: 20, left: 20 }}
                size="giant"
                source={require("../assets/icon.png")}
              />
            </Layout>

            <Layout style={{ flex: 3, marginLeft: 25 }}>
              <Text style={{ marginTop: 20, marginBottom: 15 }} category="h6">
                username
              </Text>
              <NQInput
                style={{}}
                category="h6"
                value={value}
                setValue={setValue}
              >
                username
              </NQInput>
              <Text style={{ marginTop: 20, marginBottom: 15 }} category="h6">
                old password
              </Text>
              <NQPassword
                style={{}}
                category="h6"
                value1={value1}
                setValue1={setValue1}
              >
                old password
              </NQPassword>

              <Text
                style={{ marginTop: 20, marginBottom: 15 }}
                category="h6"
              ></Text>
              <NQPassword
                style={{}}
                category="h6"
                value1={value2}
                setValue1={setValue2}
                new
                password
              >
                new password
              </NQPassword>
              <Text style={{ marginTop: 20, marginBottom: 15 }} category="h6">
                confirm password
              </Text>
              <NQPassword
                style={{}}
                category="h6"
                value1={value3}
                setValue1={setValue3}
              >
                confirm password
              </NQPassword>
            </Layout>
            <Layout style={{ flex: 1, alignItems: "center" }}>
              <NQButton txt="Save" onclick={handleSave}></NQButton>
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

const styles = StyleSheet.create({});
