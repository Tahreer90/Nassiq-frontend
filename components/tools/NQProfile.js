import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Layout } from "@ui-kitten/components";
import { VStack } from "native-base";

const NQProfile = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Avatar
        style={{ marginTop: 20, left: 20 }}
        size="giant"
        source={require("../../assets/icon.png")}
      />
      <VStack style={{ marginTop: 20, left: 25 }}>
        <Text>Hello</Text>
        <Text>Fatima Momen</Text>
      </VStack>
    </View>
  );
};

export default NQProfile;

const styles = StyleSheet.create({});
