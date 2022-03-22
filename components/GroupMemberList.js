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
import NQButton from "./tools/NQButton";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const GroupMemberList = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout style={{ flex: 1 }}>
          <Layout style={{ flex: 1, alignItems: "center" }}>
            <Layout style={{ flexDirection: "row" }}>
              <FontAwesome5 name="users" size={35} color="red" />
              <Text
                style={{
                  top: 10,
                  left: 10,
                  fontWeight: "bold",
                }}
              >
                Members
              </Text>
            </Layout>
          </Layout>
          <Layout style={{ flex: 9 }}>
            <ScrollView>
              <Layout
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "black",
                  margin: 15,
                  paddingBottom: 15,
                }}
              >
                <Avatar
                  style={{}}
                  size="giant"
                  source={require("../assets/icon.png")}
                />
                <Text style={{ top: 18, left: 10, fontWeight: "bold" }}>
                  Full Name
                </Text>
                <Button
                  style={{ position: "absolute", right: 5, top: 9 }}
                  appearance="ghost"
                  status="primary"
                >
                  Remove
                </Button>
              </Layout>
              <Layout
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "black",
                  margin: 15,
                  paddingBottom: 15,
                }}
              >
                <Avatar
                  style={{}}
                  size="giant"
                  source={require("../assets/icon.png")}
                />
                <Text style={{ top: 18, left: 10, fontWeight: "bold" }}>
                  Full Name
                </Text>
                <Button
                  style={{ position: "absolute", right: 5, top: 9 }}
                  appearance="ghost"
                  status="primary"
                >
                  Remove
                </Button>
              </Layout>
              <Layout
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "black",
                  margin: 15,
                  paddingBottom: 15,
                }}
              >
                <Avatar
                  style={{}}
                  size="giant"
                  source={require("../assets/icon.png")}
                />
                <Text style={{ top: 18, left: 10, fontWeight: "bold" }}>
                  Full Name
                </Text>
                <Button
                  style={{ position: "absolute", right: 5, top: 9 }}
                  appearance="ghost"
                  status="primary"
                >
                  Remove
                </Button>
              </Layout>
              <Layout
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "black",
                  margin: 15,
                  paddingBottom: 15,
                }}
              >
                <Avatar
                  style={{}}
                  size="giant"
                  source={require("../assets/icon.png")}
                />
                <Text style={{ top: 18, left: 10, fontWeight: "bold" }}>
                  Full Name
                </Text>
                <Button
                  style={{ position: "absolute", right: 5, top: 9 }}
                  appearance="ghost"
                  status="primary"
                >
                  Remove
                </Button>
              </Layout>
            </ScrollView>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default GroupMemberList;

const styles = StyleSheet.create({});
