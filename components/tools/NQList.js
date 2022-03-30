import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import taskStore from "../../stores/taskStore";
import groupStore from "../../stores/groupStore";
import { observer } from "mobx-react";
import { Layout, CheckBox, Input } from "@ui-kitten/components";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NQList = ({ group }) => {
  const { width, height } = Dimensions.get("window");
  const Navigation = useNavigation();
  const foundGroup = groupStore.groups.find((group1) => {
    // console.log(group1._id, group);
    return group1._id == group;
  });
  // console.log(foundGroup);
  const tasks = foundGroup ? foundGroup.task : [];
  const [taskName, setTaskName] = useState("task.name");

  const taskList = tasks.map((task) => {
    return (
      <>
        {task.edit ? (
          <Layout
            style={{
              flexDirection: "row",
              marginBottom: 15,
              justifyContent: "space-between",
              width: 250,
              backgroundColor: "#242D65",
              alignItems: "center",
            }}
          >
            <TextInput
              value={taskName}
              color="white"
              style={{
                fontSize: 22,
                marginLeft: "10%",
                width: "60%",
                maxWidth: "60%",
                borderBottomWidth: 1,
                borderBottomColor: "white",
              }}
              onChangeText={(value) => setTaskName(value)}
            ></TextInput>
            <Feather
              name="check-square"
              size={28}
              style={{ right: 2 }}
              color="white"
              onPress={() =>
                taskStore.updateTask(foundGroup._id, task._id, task, taskName)
              }
            />
            <MaterialIcons
              name="cancel-presentation"
              size={28}
              style={{ left: 2 }}
              color="white"
              onPress={() => {
                task.edit = false;
              }}
            />
          </Layout>
        ) : (
          <Layout
            style={{
              flexDirection: "row",
              marginBottom: 15,
              justifyContent: "space-between",
              width: 250,
              backgroundColor: "#242D65",
              alignItems: "center",
            }}
          >
            <CheckBox
              checked={task.isChecked}
              onChange={(nextChecked) =>
                taskStore.checkTask(task._id, nextChecked, foundGroup._id)
              }
            ></CheckBox>
            {task.isChecked ? (
              <>
                <Text
                  key={task._id}
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    width: 190,
                    backgroundColor: "#242D65",
                    color: "#C5C5C5",
                    opacity: 1,
                    marginBottom: 1,
                    height: 30,
                    top: 3,
                    textDecorationLine: "line-through",
                  }}
                >
                  {task.name}
                </Text>
                {task.type == "High" && (
                  <MaterialIcons
                    name="priority-high"
                    size={26}
                    color="#FD6B68"
                    style={{ position: "absolute", right: 27 }}
                  />
                )}
              </>
            ) : (
              <>
                <Text
                  key={task._id}
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    width: 190,
                    backgroundColor: "#242D65",
                    color: "#FFFFFF",
                    opacity: 1,
                    marginBottom: 1,
                    height: 30,
                    top: 3,
                    left: 3,
                  }}
                >
                  {task.name}
                </Text>
                {task.type == "High" && (
                  <MaterialIcons
                    name="priority-high"
                    size={26}
                    color="#FD6B68"
                    style={{ position: "absolute", right: 27 }}
                  />
                )}
              </>
            )}

            <FontAwesome
              name="pencil-square-o"
              // style={{ position: "relative", right: 2 }}
              size={28}
              color="white"
              onPress={() => {
                setTaskName(task.name);
                taskStore.editTask(task._id, foundGroup._id);
              }}
            />
          </Layout>
        )}
      </>
    );
  });
  return (
    <Layout style={{ width: width, alignItems: "center" }} level="1">
      <Layout style={styles.list} level="2">
        <Pressable
          onPress={() => {
            Navigation.navigate("GroupMemberList", {
              groupId: foundGroup._id,
            });
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 20,
              marginTop: 25,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "700",
                marginRight: 20,
              }}
            >
              {foundGroup ? foundGroup.name : ""}
            </Text>
            <AntDesign name="addusergroup" size={24} color="white" />
          </View>
        </Pressable>

        <ScrollView>
          <View>{taskList}</View>
        </ScrollView>
      </Layout>
    </Layout>
  );
};

export default observer(NQList);

const styles = StyleSheet.create({
  list: {
    width: 300,
    height: 450,
    marginTop: 25,
    backgroundColor: "#242D65",
    borderRadius: 20,
    // justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginVertical: 30,
  },
});
