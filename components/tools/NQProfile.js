import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Layout } from "@ui-kitten/components";
import { VStack } from "native-base";
import authStore from "../../stores/authStore";
import { baseUrl } from "../../stores/instance";

const NQProfile = () => {
  const username = authStore.user;

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
        source={{ uri: baseUrl + "/" + username.image }}
      />
      <VStack style={{ marginTop: 20, left: 25 }}>
        <Text>Hello</Text>
        <Text>{username.username}</Text>
      </VStack>
    </View>
  );
};

export default NQProfile;

const styles = StyleSheet.create({});
