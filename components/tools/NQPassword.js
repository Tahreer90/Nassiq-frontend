import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Input, Icon } from "@ui-kitten/components";

import React from "react";

const NQPassword = ({ value1, setValue1, placeholder, status }) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  // console.log(status);
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
    <View>
      <Input
        status={status ? "basic" : "danger"}
        style={styles.inpt}
        value={value1}
        placeholder={placeholder}
        returnKeyType="done"
        secureTextEntry={secureTextEntry}
        accessoryRight={renderIcon}
        onChangeText={(nextValue) => setValue1(nextValue)}
      />
    </View>
  );
};

export default NQPassword;

const styles = StyleSheet.create({
  inpt: {
    width: 334,
    height: 55,
    borderRadius: 27.5,
  },
});
