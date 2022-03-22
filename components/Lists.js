import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
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
const Lists = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const groupList = groupStore.groups.map((group) => {
    console.log(group._id);

    return <NQList group={group} key={group._id} />;
  });

  const handleAdd = () => {};
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
          <NQProfile />
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
          >
            {groupList}
          </ScrollView>
        </Layout>
        <Layout style={{ flex: 1, alignItems: "center" }}>
          <NQAdd txt="+" onclick={onOpen} />
          <NQAction isOpen={isOpen} onClose={onClose} />
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
