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

const AddTask = ({ route }) => {
  const { groupId } = route.params;
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const Navigation = useNavigation();
  const username = authStore.user;
  const [status, setStatus] = useState("normal");

  const [inputSaver, setInputSaver] = useState("");
  console.log(inputSaver);
  const [list, setList] = useState([]);
  const handlePress = (event) => {
    console.log("enter");

    setList([...list, { name: inputSaver, type: status }]);
    setInputSaver("");
  };
  console.log("MOONNNNNN", list);

  const taskList = list.map((task) => (
    <>
      {task.type == "urgent" ? (
        <Layout
          style={{
            flexDirection: "row",
            borderColor: "green",
            borderWidth: 1,
            marginRight: 160,
            borderRadius: 13,
            padding: 5,
            marginBottom: 5,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "green" }} category="h6">
            {task.name}
          </Text>
        </Layout>
      ) : (
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
        </Layout>
      )}
    </>
  ));
  const handleAdd = async () => {
    list.forEach(
      async (item) => await taskStore.addTask(item, groupId, Navigation)
    );

    Navigation.replace("Lists");
  };
  const handleStatus = () => {
    setStatus("urgent");
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
                {status == "urgent" ? (
                  <Button
                    onPress={() => setStatus("normal")}
                    style={{
                      width: "30%",
                      borderRadius: 15,
                      backgroundColor: "green",
                      borderColor: "white",
                    }}
                  >
                    urgent
                  </Button>
                ) : (
                  <Button
                    onPress={handleStatus}
                    style={{ width: "30%", borderRadius: 15 }}
                  >
                    urgent
                  </Button>
                )}
              </Layout>
              <DropdownMenu
                style={{ flex: 1 }}
                bgColor={"white"}
                tintColor={"#666666"}
                activityTintColor={"green"}
                // arrowImg={}
                // checkImage={}
                // optionTextStyle={{color: '#333333'}}
                // titleStyle={{color: '#333333'}}
                // maxHeight={300}
                handler={(selection, row) =>
                  this.setState({ text: data[selection][row] })
                }
                data={data}
              />
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
          <Button onPress={handleAdd} style={styles.btn}>
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
