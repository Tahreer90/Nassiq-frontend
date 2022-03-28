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

const Signup = ({ navigation }) => {
  if (authStore.user) navigation.replace("Lists");

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
            placeholder="Password"
            style={{
              marginTop: 30,
            }}
          />

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

export default Signup;

const styles = StyleSheet.create({});
