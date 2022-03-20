import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const MainInput = ({ Holder }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

export default MainInput;

const styles = StyleSheet.create({
  inpt: {
    width: 334,
    height: 55,
    backgroundColor: "#F1F1F5",
    borderRadius: 27.5,
  },
});
