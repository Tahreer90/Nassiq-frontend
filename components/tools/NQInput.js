import { StyleSheet, Text, View } from "react-native";
import { Input } from "@ui-kitten/components";

import React from "react";

const NQInput = ({ value, setValue, placeholder }) => {
  return (
    <View>
      <Input
        style={styles.inpt}
        placeholder={placeholder ?? "Username"}
        value={value}
      />
    </View>
  );
};

export default NQInput;

const styles = StyleSheet.create({
  inpt: {
    width: 334,
    height: 55,
    borderRadius: 27.5,
  },
});
