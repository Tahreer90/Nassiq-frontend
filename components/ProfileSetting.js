import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
  Image,
  Pressable,
} from "react-native";
import {
  Button,
  Layout,
  Text,
  Input,
  Icon,
  Avatar,
} from "@ui-kitten/components";
import React, { useState, useEffect } from "react";
import NQInput from "./tools/NQInput";
import NQPassword from "./tools/NQPassword";
import NQButton from "./tools/NQButton";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import authStore from "../stores/authStore";
import { baseUrl } from "../stores/instance";
import * as ImagePicker from "expo-image-picker";

const ProfilePage = () => {
  const Navigation = useNavigation();
  const username = authStore.user;
  const [value, setValue] = React.useState(username.username);
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [image, setImage] = useState(username.image);

  const confirmation = value2 == value3;

  const updateInfo = { newusername: value, newpassword: value2, image };
  const handleSave = async () => {
    await authStore.updateUserInfo(updateInfo);
    Navigation.goBack();
    Navigation.goBack();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  };
  console.log(image.uri ? image.uri : baseUrl + "/" + username.image);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        style={{ backgroundColor: "#FFFFFF" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Layout style={{ flex: 1, justifyContent: "center" }}>
            <Layout style={{ flex: 1 }}>
              <Layout
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text category="h5">Edit Profile</Text>
              </Layout>
              <Pressable
                onPress={() => {
                  console.log("object");
                  pickImage();
                }}
              >
                <Image
                  style={styles.image}
                  size={50}
                  source={{
                    uri: image.uri ? image.uri : baseUrl + "/" + username.image,
                  }}
                />
              </Pressable>
            </Layout>

            <Layout style={{ flex: 3, marginLeft: 25 }}>
              <Text
                style={{ marginTop: 20, marginBottom: 15, marginLeft: 5 }}
                category="h6"
              >
                Username
              </Text>
              <NQInput
                placeholder={username.username}
                style={{}}
                category="h6"
                value={value}
                setValue={setValue}
              >
                Username
              </NQInput>

              <Text
                style={{ marginTop: 20, marginBottom: 15, marginLeft: 5 }}
                category="h6"
              >
                New Password
              </Text>
              <NQPassword
                status={true}
                category="h6"
                value1={value2}
                setValue1={setValue2}
                placeholder="New Password"
              >
                new password
              </NQPassword>
              <Text
                style={{ marginTop: 20, marginBottom: 15, marginLeft: 5 }}
                category="h6"
              >
                Confirm Password
              </Text>
              <NQPassword
                status={confirmation}
                category="h6"
                value1={value3}
                setValue1={setValue3}
                placeholder="Confirm New Password"
              >
                confirm password
              </NQPassword>
              {confirmation ? (
                <Text></Text>
              ) : (
                <Text style={styles.txt}>password doesn't match</Text>
              )}
            </Layout>
            <Layout style={{ flex: 1, alignItems: "center" }}>
              <Button onPress={handleSave} style={styles.btn}>
                Save
              </Button>
              <Button
                style={{ top: 10 }}
                appearance="ghost"
                status="primary"
                onPress={() => Navigation.goBack()}
              >
                Cancel
              </Button>
            </Layout>
          </Layout>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  btn: {
    width: 334,
    height: 45,
    borderRadius: 100,
    fontSize: 18,
    fontWeight: "700",
  },
  image: {
    marginTop: 20,
    height: 100,
    width: 100,
    borderRadius: 70,
    alignSelf: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
  },
  txt: {
    color: "red",
    padding: 5,
    left: 2,
    bottom: 10,
  },
});
