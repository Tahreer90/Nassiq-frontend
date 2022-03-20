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

const Signin = () => {
  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text category="h1"> Nassiq</Text>
          <Input
            placeholder="Username"
            value={value}
            onChangeText={(nextValue) => setValue(nextValue)}
          />

          <Input
            value={value1}
            placeholder="Password"
            secureTextEntry={secureTextEntry}
            accessoryRight={renderIcon}
            onChangeText={(nextValue) => setValue1(nextValue)}
          />
          <Button>BUTTON</Button>
          <NQButton txt={"hello"} />
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({});
