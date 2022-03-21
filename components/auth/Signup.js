import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { Button, Layout, Text, Input, Icon } from "@ui-kitten/components";

import React from "react";
import NQButton from "../tools/NQButton";
import NQInput from "../tools/NQInput";
import NQPassword from "../tools/NQPassword";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const user = {
    username: value,
    password: value1,
  };
  const Navigation = useNavigation();
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
    authStore.signup(user, Navigation);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Layout
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text category="h1"> Nassiq</Text>
          </Layout>

          <NQInput value={value} setValue={setValue} />
          <NQPassword
            value1={value1}
            setValue1={setValue1}
            style={{
              marginTop: 10,
            }}
          />

          <Layout
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <NQButton txt={"Register"} onclick={handleSubmit} />

            <Layout style={{ flexDirection: "row" }}>
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
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
