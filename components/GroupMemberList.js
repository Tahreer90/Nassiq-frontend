import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
  Clipboard,
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
// import Clipboard from "@react-native-community/clipboard";
import Toast from "react-native-toast-message";
import { ScrollView } from "react-native-gesture-handler";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import groupStore from "../stores/groupStore";

const GroupMemberList = ({ route }) => {
  //   console.log(groupStore.groups);
  const { groupId } = route.params;
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 👋",
    });
  };
  const members = groupStore.groups
    .find((group) => {
      return JSON.stringify(group._id) == JSON.stringify(groupId);
    })
    .user.map((user) => {
      return (
        <Layout
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "black",
            margin: 15,
            paddingBottom: 15,
          }}
        >
          <Avatar style={{}} size="giant" source={{ uri: user.image }} />
          <Text
            style={{
              top: 20,

              fontWeight: "bold",
            }}
          >
            {user.username}
          </Text>
          <Button
            style={{ position: "absolute", right: 5, top: 9 }}
            appearance="ghost"
            status="primary"
          >
            Remove
          </Button>
        </Layout>
      );
    });
  console.log("1+++++++++++", members);
  console.log(route.params.id);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout style={{ flex: 1 }}>
          <Layout style={{ flex: 1, alignItems: "center" }}>
            <Layout style={{ flexDirection: "row" }}>
              <FontAwesome5 name="users" size={35} color="#FD6B68" />
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
            <Text
              style={{ fontWeight: "500" }}
              onPress={() => {
                showToast();
                Clipboard.setString(groupId);
              }}
            >
              Invite+
            </Text>
          </Layout>
          <Layout style={{ flex: 9 }}>
            <ScrollView>{members}</ScrollView>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default GroupMemberList;

const styles = StyleSheet.create({});
