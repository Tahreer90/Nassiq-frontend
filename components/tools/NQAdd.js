import { StyleSheet } from "react-native";
import { Button, Text, Icon } from "@ui-kitten/components";
import React from "react";

const NQAdd = ({ txt, onclick }) => {
  const StarIcon = (props) => <Icon {...props} name="plus" />;

  return (
    <Button
      style={styles.button}
      status="primary"
      accessoryLeft={StarIcon}
      onPress={onclick}
    />
  );
};

export default NQAdd;

const styles = StyleSheet.create({
  button: {
    margin: 2,
    width: 86,
    height: 86,
    borderRadius: 100,
  },
});
