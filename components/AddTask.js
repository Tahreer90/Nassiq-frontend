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
import { Menu } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import authStore from "../stores/authStore";
import { baseUrl } from "../stores/instance";
import taskStore from "../stores/taskStore";
import RemoveTask from "./RemoveTask";
import { ThemeContext } from "./navigation/theme-context";

const AddTask = ({ route }) => {
  const { groupId } = route.params;
  const { onClose } = route.params;
  const { scrollRef } = route.params;
  const { pagevalue } = route.params;
  const Navigation = useNavigation();
  const username = authStore.user;
  const [status, setStatus] = useState(null);
  const [visible, setVisible] = React.useState(false);
  const [color, setColor] = useState("#FD6B68");

  const openMenu = () => setVisible(true);

  const closeMenu = () => {
    setVisible(false);
  };
  const [inputSaver, setInputSaver] = useState("");
  console.log(inputSaver);
  const [list, setList] = useState([]);

  const handlePress = (event) => {
    console.log("enter");
    if (inputSaver.trim() === "") {
      return;
    }
    setList([...list, { name: inputSaver, type: status }]);
    setInputSaver("");
  };

  const dfunction = (taskIndex) => {
    setList(list.filter((item, index) => index !== taskIndex));
  };
  // console.log("MOONNNNNN", list);

  const taskList = list.map((task, index) => (
    <Layout
      style={{
        right: 10,
        marginBottom: 5,
      }}
    >
      <RemoveTask
        taskname={task.name}
        dfunction={dfunction}
        taskIndex={index}
        type={task.type}
      />
    </Layout>
    // console.log("MOONNNNNN", list);

    // const taskList = list.map((task) => (
    // <>
    //   {task.type == "High" ? (
    //     <Layout
    //       style={{
    //         flexDirection: "row",
    //         borderColor: "green",
    //         borderWidth: 1,
    //         marginRight: 160,
    //         borderRadius: 13,
    //         padding: 5,
    //         marginBottom: 5,
    //         alignContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Text style={{ color: "green" }} category="h6">
    //         {task.name}
    //       </Text>

    //     </Layout>
    //   ) : (
    //     <Layout
    //       style={{
    //         flexDirection: "row",
    //         borderColor: "black",
    //         borderWidth: 1,
    //         marginRight: 160,
    //         borderRadius: 13,
    //         padding: 5,
    //         marginBottom: 5,
    //         alignContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Text category="h6">{task.name}</Text>
    //     </Layout>
    //   )}
    // </>
  ));
  const handleAdd = async () => {
    list.forEach(
      async (item) => await taskStore.addTask(item, groupId, Navigation)
    );

    Navigation.goBack();
    onClose();
    // scrollRef.current?.scrollTo({
    //   x: pagevalue,
    //   animated: true,
    // });
    // alert(scrollRef);
  };
  const handleStatus = () => {
    setStatus("High");
  };

  const themeColor =
    ThemeContext._currentValue.theme == "light" ? "#1a2138" : "white";
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
                    borderColor: themeColor,
                    borderWidth: 1,
                    borderRadius: 15,
                    padding: 5,
                  }}
                  value={inputSaver}
                  onChangeText={setInputSaver}
                  color={themeColor}
                  placeholder="type the task here"
                  placeholderTextColor={themeColor}
                  returnKeyType="done"
                  returnKeyLabel="ADD"
                  maxLength="20"
                  onEndEditing={(r) => handlePress(r)}
                ></TextInput>

                <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={
                    <Button
                      style={{
                        borderRadius: 15,
                        backgroundColor: color,
                        borderColor: color,
                      }}
                      onPress={openMenu}
                    >
                      {status ? status : "priority"}
                    </Button>
                  }
                >
                  <Menu.Item
                    onPress={() => {
                      setStatus("High");
                      setColor("#FA7C6C");
                      closeMenu();
                    }}
                    title="High"
                  />
                  <Menu.Item
                    onPress={() => {
                      setStatus("Low");
                      setColor("#FA9D90");
                      closeMenu();
                    }}
                    title="Low"
                  />
                </Menu>
              </Layout>

              <Layout
                style={{
                  flex: 1,
                  marginTop: 20,
                  marginLeft: 10,
                }}
              >
                {taskList}
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
          <Button onPress={handleAdd} style={styles.btn}>
            Save
          </Button>
          <Button
            appearance="ghost"
            status="primary"
            style={{ top: 7 }}
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
