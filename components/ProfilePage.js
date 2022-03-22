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

const ProfilePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            <NQInput style={{}} category="h6">
              username
            </NQInput>

            <Text style={{ marginTop: 20, marginBottom: 15 }} category="h6">
              old password
            </Text>
            <NQPassword style={{}} category="h6">
              old password
            </NQPassword>

            <Text style={{ marginTop: 20, marginBottom: 15 }} category="h6">
              new password
            </Text>
            <NQPassword style={{}} category="h6">
              new password
            </NQPassword>

            <Text style={{ marginTop: 20, marginBottom: 15 }} category="h6">
              confirm password
            </Text>
            <NQPassword style={{}} category="h6">
              confirm password
            </NQPassword>
          </Layout>
          <Layout style={{ flex: 1, alignItems: "center" }}>
            <NQButton txt="Save"></NQButton>
            <Button appearance="ghost" status="primary">
              Cancel
            </Button>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});