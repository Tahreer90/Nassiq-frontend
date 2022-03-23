import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
} from "react-native";
import {
  Button,
  Layout,
  Text,
  Input,
  Icon,
  Avatar,
} from "@ui-kitten/components";
import React from "react";
import NQInput from "./tools/NQInput";
import NQButton from "./tools/NQButton";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const AddTask = () => {
  const Navigation = useNavigation();

  const handleAdd = () => {
    Navigation.replace("Lists");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout style={{ flex: 1, justifyContent: "center" }}>
          <Layout style={{ flex: 1 }}>
            <Layout style={{ left: 70, top: 25 }}>
              <Layout style={{ left: 21, top: 18 }}>
                <Text>Hello</Text>
              </Layout>
              <Layout
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  marginLeft: 20,
                }}
              >
                <Text category="h3">Full Name</Text>
                <MaterialCommunityIcons
                  name="map-marker-check"
                  size={31}
                  color="red"
                  style={{ right: 30, position: "absolute", marginTop: 5 }}
                />
              </Layout>
            </Layout>
            <Avatar
              style={{ bottom: 30, left: 20 }}
              size="giant"
              source={require("../assets/icon.png")}
            />
          </Layout>
          <Layout style={{ flex: 3, marginLeft: 25 }}>
            <Text style={{ marginTop: 20, marginBottom: 15 }} category="h6">
              ADD TASK
            </Text>
            <ScrollView>
              <NQInput placeholder="type the task here" category="h6"></NQInput>
              <NQInput placeholder="type the task here" category="h6"></NQInput>
              <NQInput placeholder="type the task here" category="h6"></NQInput>
            </ScrollView>
            <Entypo
              name="plus"
              size={40}
              color="red" //onPress={}
            />
            <Text style={{ bottom: 29, left: 40 }}>Add more</Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              alignItems: "center",
              left: 125,
              flexDirection: "row",
              justifyContent: "start",
            }}
          >
            <Text onPress={() => Navigation.goBack()}>Cancel</Text>
            <NQButton size="large" txt="Save" onclick={handleAdd} />
          </Layout>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
