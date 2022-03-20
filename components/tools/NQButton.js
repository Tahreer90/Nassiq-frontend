import { StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";
import React from "react";

const NQButton = ({ txt }) => {
  return <Button style={styles.btn}>{txt} </Button>;
};

export default NQButton;

const styles = StyleSheet.create({
  btn: {
    width: 334,
    height: 70,
    borderRadius: 100,
  },
});
