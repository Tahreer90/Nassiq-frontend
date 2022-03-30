import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import NQAdd from "./tools/NQAdd";
import NQMenu from "./tools/NQMenu";
import MapIcon from "./tools/MapIcon";
import { Avatar, Layout } from "@ui-kitten/components";
import NQAction from "./tools/NQAction";
import NQList from "./tools/NQList";
import { useDisclose } from "native-base";
import { NativeBaseProvider } from "native-base";
import NQProfile from "./tools/NQProfile";
import groupStore from "../stores/groupStore";
import taskStore from "../stores/taskStore";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/core";
import authStore from "../stores/authStore";
import NQHead from "./tools/NQHead";

const Lists = ({
  registerForPushNotificationsAsync,
  setExpoPushToken,
  expoPushToken,
}) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [visible, setVisible] = React.useState(false);

  const Navigation = useNavigation();
  const [page, setPage] = useState(0);
  let groupId = 0;
  const groups = authStore.user ? authStore.user.group : [];
  const allGroups = groups.map((group) =>
    groupStore.groups.find((group1) => group1._id == group)
  );
  const { width, height } = Dimensions.get("window");

  const groupList = groups
    ? groups.map((group) => {
        // console.log(group);
        return (
          <NQList
            group={group}
            key={group._id}
            setVisible={setVisible}
            visible={visible}
          />
        );
      })
    : [];

  const userGroups = groups
    ? groups.map((group) => {
        // console.log(group);
        return <NQMenu group={group} key={group._id} />;
      })
    : [];

  const handleScroll = (event) => {
    setPage(event.nativeEvent.contentOffset.x);
  };
  groupId = page / width;

  // console.log(groupId);

  const scrollRef = useRef();

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Layout
          style={{
            flex: 1,
            marginTop: 25,
          }}
        >
          <Layout
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              top: 65,
            }}
          >
            <MapIcon />
          </Layout>
          <Pressable
            onPress={() => {
              console.log("ssdjskldjlksjdls=======");
              registerForPushNotificationsAsync().then((token) =>
                setExpoPushToken(token)
              );
              Navigation.navigate("Profile");
            }}
          >
            <NQProfile />
          </Pressable>
        </Layout>
        {/* <Layout
          style={{
            flexDirection: "row",
            backgroundColor: "red",
          }}
        >
        </Layout> */}
        <Layout style={{ flex: 4, alignItems: "center" }}>
          <ScrollView
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            style={{ flex: 1 }}
            onScroll={(event) => handleScroll(event)}
            ref={scrollRef}
          >
            {groupList}
          </ScrollView>
        </Layout>
        <Layout style={{ flex: 1, alignItems: "center" }}>
          <NQAdd txt="+" onclick={onOpen} />
          <NQAction
            isOpen={isOpen}
            onClose={onClose}
            groupId={groups[groupId]}
            pagevalue={width * groupId}
            scrollRef={scrollRef}
            xvalue={width * groups.length + 1}
          />
        </Layout>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default observer(Lists);

const styles = StyleSheet.create({
  menu: {
    textAlign: "center",
  },
  btn: {
    marginLeft: 100,
    textAlign: "center",
  },
});
