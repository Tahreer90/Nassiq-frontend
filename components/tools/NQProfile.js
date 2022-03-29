import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Layout } from "@ui-kitten/components";
import { HStack, VStack } from "native-base";
import authStore from "../../stores/authStore";
import { baseUrl } from "../../stores/instance";

const NQProfile = () => {
  const username = authStore.user ? authStore.user : { image: "" };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <VStack style={{ marginTop: 20, left: 25 }}>
        <HStack>
          <Text>Hello</Text>
          <Text style={{ marginLeft: 5 }}>{username.username}</Text>
        </HStack>

        <Image
          style={styles.image}
          size={45}
          source={{ uri: baseUrl + "/" + username.image }}
        />
      </VStack>
    </View>
  );
};

export default NQProfile;

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    height: 100,
    width: 100,
    borderRadius: 70,
    alignSelf: "center",
  },
});
