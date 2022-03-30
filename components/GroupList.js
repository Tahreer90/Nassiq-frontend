import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Clipboard,
} from "react-native";
import {
  Layout,
  Text,
  Input,
  Icon,
  Avatar,
  Button,
} from "@ui-kitten/components";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import groupStore from "../stores/groupStore";
import Toast from "react-native-toast-message";
import { FontAwesome5 } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Navigation } from "./navigation/Navigation";
import GroupMemberList from "./GroupMemberList";
import { useNavigation } from "@react-navigation/core";

const GroupList = () => {
  const Navigation = useNavigation();

  const Groups = groupStore.groups.map((group) => {
    console.log(group);
    return (
      <Pressable
        onPress={() =>
          Navigation.navigate("GroupMemberList", { groupId: group._id })
        }
      >
        <Layout
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "black",
            margin: 15,
            paddingBottom: 15,
          }}
        >
          <Text>{group.name}</Text>
        </Layout>
      </Pressable>
    );
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout style={{ flex: 1 }}>
          <Layout
            style={{
              flex: 2,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Layout
              style={{
                flex: 6,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome5 name="users" size={35} color="#FD6B68" />
              <Text
                style={{
                  top: 10,
                  fontWeight: "bold",
                }}
              >
                Groups List
              </Text>
            </Layout>
          </Layout>
          <Layout style={{ flex: 9, bottom: 5 }}>
            <ScrollView>{Groups}</ScrollView>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default GroupList;

const styles = StyleSheet.create({});
