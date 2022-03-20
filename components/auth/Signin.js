import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import { MainButton } from "../MainButton";
const Signin = ({ navigation }) => {
  return <MainButton text="my button" />;
};

export default observer(Signin);

const styles = StyleSheet.create({});
