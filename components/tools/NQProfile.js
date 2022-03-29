import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Layout } from "@ui-kitten/components";
import { HStack, VStack } from "native-base";
import authStore from "../../stores/authStore";
import { baseUrl } from "../../stores/instance";
import { MaterialIcons } from "@expo/vector-icons";

const NQProfile = () => {
  const username = authStore.user ? authStore.user : { image: "" };

  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        bottom: 12,
      }}
    >
      <VStack>
        <Image
          style={styles.image}
          size={45}
          source={{ uri: baseUrl + "/" + username.image }}
        />
        <HStack>
          <Text style={styles.text}>Hello {username.username}</Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={18}
            color="black"
            style={{ left: 5, top: 7 }}
          />
        </HStack>
      </VStack>
    </View>
  );
};

export default NQProfile;

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    height: 90,
    width: 90,
    borderRadius: 70,
    alignSelf: "center",
    bottom: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
    marginLeft: 5,
  },
});
