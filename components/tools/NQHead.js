import { StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React from "react";
import { Layout, Text } from "@ui-kitten/components";

const NQHead = ({ groupName, setVisible }) => {
  return (
    <Pressable onPress={() => setVisible(true)}>
      <Layout
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text category="h4">{groupName}</Text>
        <AntDesign name="down" size={24} color="black" />
      </Layout>
    </Pressable>
  );
};

export default NQHead;

const styles = StyleSheet.create({});
