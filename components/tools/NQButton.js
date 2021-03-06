import { StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";
import React from "react";

const NQButton = ({ txt, onclick, size }) => {
  return (
    <Button style={styles.btn} size={size ?? "giant"} onPress={onclick}>
      {txt}{" "}
    </Button>
  );
};

export default NQButton;

const styles = StyleSheet.create({
  btn: {
    width: 334,
    height: 55,
    borderRadius: 100,
    fontSize: 18,
    fontWeight: "700",
    // marginBottom: 200,
  },
});
