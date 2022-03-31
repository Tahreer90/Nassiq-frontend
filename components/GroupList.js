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
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import { baseUrl } from "../stores/instance";
import authStore from "../stores/authStore";

const GroupList = () => {
  const Navigation = useNavigation();

  const Groups = groupStore.groups
    .filter((group) =>
      group.user.find(
        (groupp) =>
          JSON.stringify(groupp._id) == JSON.stringify(authStore.user._id)
      )
    )
    .map((group) => {
      console.log(group);
      const handleLeave = () => {
        alert("Are you sure you want to leave this group?");
      };
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
              borderBottomColor: "#C5C5C5",
              margin: 15,
              left: 3,
              paddingBottom: 8,
            }}
          >
            <Text style={styles.text}>
              {group.owner.username} {group.name}
            </Text>
            <Avatar
              size="small"
              // source={{ uri: baseUrl + "/" + members.image }}
            />
            <AntDesign
              name="deleteusergroup"
              size={28}
              color="#FD6B68"
              style={{ position: "absolute", right: 20 }}
              onPress={handleLeave}
            />
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
          <Layout
            style={{
              flex: 9,
              bottom: 5,
            }}
          >
            <ScrollView>{Groups}</ScrollView>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default GroupList;

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    fontSize: 18,
  },
});
