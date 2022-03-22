import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { Button, Layout, Text, Input, Icon } from "@ui-kitten/components";

import React from "react";

const HomeMain = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text category="h1">Home</Text>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default HomeMain;

const styles = StyleSheet.create({});
