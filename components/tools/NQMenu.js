import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import {
  Avatar,
  Button,
  Layout,
  Popover,
  Text,
  Icon,
} from "@ui-kitten/components";
import { observer } from "mobx-react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import groupStore from "../../stores/groupStore";
import authStore from "../../stores/authStore";
import NQHead from "./NQHead";

const NQMenu = ({ group, setVisible, visible, index, allGroups }) => {
  // console.log("A", authStore.user.group);

  const groups = authStore.user ? authStore.user.group : [];

  const groupList = allGroups.map((group) => (
    <Text style={styles.txt} onPress={() => setVisible(false)}>
      {group.name}
    </Text>
  ));
  const foundGroup = groupStore.groups.find((group1) => {
    return group1._id == group;
  });
  const renderToggleButton = () => {
    return (
      <Pressable onPress={() => setVisible(true)}>
        <Layout
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text category="h4">{allGroups[index].name}</Text>
          <AntDesign name="down" size={24} color="black" />
        </Layout>
      </Pressable>
    );
  };

  return (
    // <Layout
    //   style={{
    //     flex: 1,
    //     justifyContent: "space-around",
    //     alignItems: "center",
    //   }}
    // >
    //   <Menu
    //     style={{
    //       flex: 1,
    //       width: 200,
    //       margin: 15,
    //     }}
    //     selectedIndex={selectedIndex}
    //     onSelect={(index) => setSelectedIndex(index)}
    //   >
    //     <MenuGroup title="Personal">
    //       <MenuItem title="AlBait" />
    //       <MenuItem title="AlDawam" />
    //     </MenuGroup>
    //   </Menu>
    // </Layout>

    <Popover
      backdropStyle={styles.backdrop}
      visible={visible}
      anchor={renderToggleButton}
      onBackdropPress={() => setVisible(false)}
    >
      <Layout style={styles.content}>
        <ScrollView style={{ width: " 100%" }}>{groupList}</ScrollView>
      </Layout>
    </Popover>
  );
};

export default observer(NQMenu);

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 8,
    minWidth: 150,
    minHeight: 50,
    maxHeight: 200,
  },
  avatar: {
    marginHorizontal: 4,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  txt: {
    fontSize: 18,
    margin: 4,
    fontWeight: "500",
  },
});
