import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import React from "react";

const MainButton = ({ text }) => {
  return <Button style={styles.btn}>{text}</Button>;
};

export default MainButton;

const styles = StyleSheet.create({
  btn: {
    color: "black",

    width: 334,
    height: 70,
    backgroundColor: "#FD6B68",
    borderRadius: 100,
  },
});
