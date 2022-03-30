import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
  Clipboard,
  Image,
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
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import { baseUrl } from "../stores/instance";

const GroupMemberList = ({ route }) => {
  //   console.log(groupStore.groups);

  const { groupId } = route.params;
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "copied to clipboard",
      position: "bottom",
      bottomOffset: 400,
      visibilityTime: 1700,
    });
  };
  const foundGroup = groupStore.groups.find((group) => {
    return JSON.stringify(group._id) == JSON.stringify(groupId);
  });
  const members = foundGroup.user.map((user) => {
    return (
      <Layout
        style={{
          flexDirection: "row",
          top: 10,
          margin: 5,
          paddingBottom: 5,
        }}
        key={user._id}
      >
        <Image
          style={styles.image}
          source={{ uri: baseUrl + "/" + user.image }}
        />
        <Text
          style={{
            top: 25,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          @{user.username}
        </Text>
        <Button
          style={{
            position: "absolute",
            right: 5,
            top: 17,
            // borderColor: "#C5C5C5",
          }}
          appearance="ghost"
          status="primary"
        >
          Remove
        </Button>
      </Layout>
    );
  });
  //console.log("1+++++++++++", members);
  //console.log(route.params.id);
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
                  alignSelf: "center",
                  fontWeight: "bold",
                }}
              >
                {foundGroup.name} Group Members
              </Text>
              <Button
                style={styles.btn}
                onPress={() => {
                  showToast();
                  Clipboard.setString(groupId);
                }}
              >
                Invite+
              </Button>
            </Layout>
          </Layout>

          <Layout
            style={{
              flex: 9,
              top: 3,
              paddingLeft: 5,
              paddingRight: 5,
              borderTopColor: "#C5C5C5",
              borderTopWidth: 1,
            }}
          >
            <ScrollView>{members}</ScrollView>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default observer(GroupMemberList);

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    fontWeight: "600",
    backgroundColor: "#FD6B68",
    top: 10,
    marginTop: 10,
    marginLeft: 15,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 50,
  },
});
