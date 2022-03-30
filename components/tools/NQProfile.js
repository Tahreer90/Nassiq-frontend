import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Layout, Text } from "@ui-kitten/components";
import { HStack, VStack } from "native-base";
import authStore from "../../stores/authStore";
import { baseUrl } from "../../stores/instance";
import { MaterialIcons } from "@expo/vector-icons";
import { observer } from "mobx-react";
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
          <Text
            style={{
              fontSize: 22,
              fontWeight: "500",
              marginLeft: 5,
            }}
          >
            Hello {username.username}
          </Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={18}
            style={{ left: 5, top: 7 }}
          />
        </HStack>
      </VStack>
    </View>
  );
};

export default observer(NQProfile);

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    height: 90,
    width: 90,
    borderRadius: 70,
    alignSelf: "center",
    bottom: 10,
  },
});
