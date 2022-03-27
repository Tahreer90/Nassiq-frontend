import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Keyboard,
  TextInput,
  Image,
} from "react-native";
import {
  Button,
  Layout,
  Text,
  Input,
  Icon,
  Avatar,
} from "@ui-kitten/components";
import React, { useState } from "react";
import NQInput from "./tools/NQInput";
import NQButton from "./tools/NQButton";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import authStore from "../stores/authStore";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { baseUrl } from "../stores/instance";
import taskStore from "../stores/taskStore";
import { HStack, VStack } from "native-base";
import groupStore from "../stores/groupStore";

const AddTask = ({ route }) => {
  const { groupId } = route.params;
  const Navigation = useNavigation();
  const username = authStore.user;

  const [inputSaver, setInputSaver] = useState("");
  console.log(inputSaver);
  const [list, setList] = useState([]);
  const handlePress = (event) => {
    console.log("enter");
    setList([...list, { name: inputSaver }]);
    setInputSaver("");
  };
  // console.log("MOONNNNNN", list);

  const taskList = list.map((task) => (
    <Layout
      style={{
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 1,
        marginRight: 160,
        borderRadius: 13,
        padding: 5,
        marginBottom: 5,
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text category="h6">{task.name}</Text>
      <FontAwesome
        name="trash-o"
        size={22}
        color="black"
        style={{ position: "absolute", right: 10 }}
      />
    </Layout>
  ));
  const handleAdd = async () => {
    list.forEach(
      async (item) => await taskStore.addTask(item, groupId, Navigation)
    );

    Navigation.replace("Lists");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> */}
      <Layout style={{ flex: 1, justifyContent: "center" }}>
        <Layout style={{ flex: 1 }}>
          <Layout style={{ left: 70, top: 25 }}>
            <Layout style={{ left: 30, top: 18 }}>
              <Text>Hello</Text>
            </Layout>
            <Layout
              style={{
                flexDirection: "row",
                marginTop: 20,
                marginLeft: 30,
              }}
            >
              <Text category="h3">{username.username}</Text>
            </Layout>
          </Layout>
          <Image
            style={{
              bottom: 40,
              left: 10,
              height: 80,
              width: 80,
              borderRadius: 50,
            }}
            source={{ uri: baseUrl + "/" + username.image }}
          />
        </Layout>
        <Layout style={{ flex: 3, marginLeft: 25 }}>
          <Text style={{ marginBottom: 15, marginLeft: 3 }} category="h6">
            ADD TASK
          </Text>
          <ScrollView
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="true"
          >
            <Layout style={{ flex: 1 }}>
              <Layout style={{ flex: 1, flexDirection: "row" }}>
                <TextInput
                  style={{
                    width: "65%",
                    marginRight: 5,
                    borderColor: "black",
                    borderWidth: 1,
                    borderRadius: 15,
                    padding: 5,
                  }}
                  value={inputSaver}
                  onChangeText={setInputSaver}
                  placeholder="type the task here"
                  returnKeyType="default"
                  returnKeyLabel="ADD"
                  onEndEditing={(r) => handlePress(r)}

                  //   onSubmitEditing={}
                ></TextInput>

                <Button style={{ width: "30%", borderRadius: 15 }}>
                  urgent
                </Button>
              </Layout>

              <Layout
                style={{
                  flex: 1,
                  marginTop: 20,
                  marginLeft: 10,
                }}
              >
                {taskList}
                {/* <Text
                    category="h6"
                    style={{
                      borderColor: "black",
                      borderWidth: 1,
                      marginRight: 170,
                      borderRadius: 13,
                      padding: 5,
                      marginBottom: 5,
                    }}
                  >
                    Fahad
                  </Text>
                  <FontAwesome
                    name="trash-o"
                    size={22}
                    color="black"
                    style={{ top: 9 }}
                  /> */}
              </Layout>
            </Layout>
          </ScrollView>
        </Layout>
        <Layout
          style={{
            flex: 1,
            alignItems: "center",
            left: 5,
            flexDirection: "column",
          }}
        >
          <Button onclick={handleAdd} style={styles.btn}>
            Save
          </Button>
          <Button
            appearance="ghost"
            status="primary"
            style={{ padding: 10 }}
            onPress={() => Navigation.goBack()}
          >
            Cancel
          </Button>
        </Layout>
      </Layout>
      {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  btn: {
    width: 334,
    height: 45,
    borderRadius: 100,
    fontSize: 18,
    fontWeight: "700",
  },
});
