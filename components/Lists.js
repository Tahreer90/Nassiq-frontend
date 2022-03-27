import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
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
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import authStore from "../stores/authStore";
import SwipeOut from "./SwipeOut";

const Lists = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const Navigation = useNavigation();
  const [page, setPage] = useState(0);
  let groupId = 0;
  const groups = authStore.user ? authStore.user.group : [];
  const { width, height } = Dimensions.get("window");

  const groupList = groups
    ? groups.map((group) => {
        console.log(group);
        return <NQList group={group} key={group._id} />;
      })
    : [];

  const handleScroll = (event) => {
    setPage(event.nativeEvent.contentOffset.x);
  };
  groupId = page / width;
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Layout
          style={{
            flex: 1,
          }}
        >
          <Layout
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <NQMenu />
            <MapIcon />
          </Layout>
          <Pressable onPress={() => Navigation.navigate("Profile")}>
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
