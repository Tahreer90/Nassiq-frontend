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
import { observer } from "mobx-react";

const Signin = ({ navigation }) => {
  console.log("object======>", authStore.user);
  if (authStore.user) {
    navigation.replace("Lists");
  }
  authStore.fetchAllUsers();
  let foundUser = null;

  const [value, setValue] = React.useState(""); //username
  const [value1, setValue1] = React.useState(""); //password
  const [isExist, setIsExist] = React.useState(true);
  const [isCorrect, setCorrect] = React.useState(true);
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
          Should contain at least 6 characters
        </Text>
      </View>
    );
  };

  const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
  const handleSubmit = () => {
    setIsExist(true);
    setCorrect(true);
    foundUser = authStore.users.find(
      (user1) => user1.username == user.username
    );
    if (!foundUser) setIsExist(false);
    else if (foundUser) {
      authStore.signin(user, Navigation, setCorrect);
    }
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
          {!isExist ? (
            <Text style={styles.txt}>username does not exist!</Text>
          ) : (
            <Text></Text>
          )}
          {!isCorrect ? (
            <Text style={styles.txt}>incorrect password!</Text>
          ) : (
            <Text></Text>
          )}
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default observer(Signin);

const styles = StyleSheet.create({
  txt: {
    color: "red",
    padding: 5,
    left: 2,
    bottom: 10,
  },
});
