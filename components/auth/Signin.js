import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
  Image,
} from "react-native";
import { Button, Layout, Text, Input, Icon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import NQButton from "../tools/NQButton";
import NQInput from "../tools/NQInput";
import NQPassword from "../tools/NQPassword";
import authStore from "../../stores/authStore";

const Signin = () => {
  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const Navigation = useNavigation();
  const user = {
    username: value,
    password: value1,
  };
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
    authStore.signin(user, Navigation);
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
            <Image
              source={{
                uri: "assets/Checklist-pana.png",
              }}
            />
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
            <NQButton txt={"Log in"} onclick={handleSubmit} />

            <Layout style={{ flexDirection: "row", marginTop: 10 }}>
              <Text>Not a user?</Text>
              <Text
                style={{
                  marginLeft: 5,
                  textDecorationLine: "underline",
                }}
                status="primary"
                onPress={() => Navigation.replace("Signup")}
              >
                Register
              </Text>
            </Layout>
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({});
