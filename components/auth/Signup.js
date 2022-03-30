import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
  Image,
} from "react-native";
import { Button, Layout, Text, Input, Icon } from "@ui-kitten/components";

import React from "react";
import NQButton from "../tools/NQButton";
import NQInput from "../tools/NQInput";
import NQPassword from "../tools/NQPassword";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";

const Signup = ({
  navigation,
  registerForPushNotificationsAsync,
  setExpoPushToken,
  expoPushToken,
}) => {
  const Navigation = useNavigation();

  if (authStore.user) Navigation.replace("Lists");

  authStore.fetchAllUsers();
  const [length, setLength] = React.useState(false);
  const [isExist, setIsExist] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const user = {
    username: value,
    password: value1,
  };
  let foundUser = null;
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };

  const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

  const handleSubmit = () => {
    setLength(false);
    setIsExist(false);

    foundUser = authStore.users.find(
      (user1) => user1.username == user.username
    );
    console.log(value1.length < 6);
    console.log(foundUser);
    console.log(!foundUser && value1.length > 6);
    if (value1.length < 6) setLength(true);
    if (foundUser) setIsExist(true);
    if (!foundUser && value1.length > 6)
      authStore.signup(
        user,
        Navigation,
        registerForPushNotificationsAsync,
        setExpoPushToken,
        expoPushToken
      );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 100,
          }}
        >
          <Text category="h1"> Nassiq</Text>
          <Image
            source={require("../../assets/Checklist-pana.png")}
            style={{ width: 200, height: 200 }}
          />
          <NQInput value={value} setValue={setValue} />
          <NQPassword
            status={true}
            value1={value1}
            setValue1={setValue1}
            placeholder="Password (at least 7 characters)"
            style={{
              marginTop: 30,
            }}
          />
          {isExist ? (
            <Text style={styles.txt}>username already exists!</Text>
          ) : (
            <Text></Text>
          )}

          {length ? (
            <Text style={styles.txt}>
              password should contain at least 7 characters!
            </Text>
          ) : (
            <Text></Text>
          )}

          <NQButton txt={"Register"} onclick={handleSubmit} />
          <Layout style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{
                marginLeft: 5,
              }}
            >
              Already a user?
            </Text>
            <Text
              style={{
                marginLeft: 5,
                textDecorationLine: "underline",
              }}
              status="primary"
              onPress={() => Navigation.replace("Signin")}
            >
              Log in
            </Text>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default observer(Signup);

const styles = StyleSheet.create({
  txt: {
    color: "red",
    padding: 5,
    left: 2,
    bottom: 10,
  },
});
