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
    console.log(group1._id, group);
    return group1._id == group;
  });
  console.log(foundGroup);
  const tasks = foundGroup ? foundGroup.task : [];
  const [taskName, setTaskName] = useState("task.name");
  //   const handleEdit = (task) => {
  // tasks.forEach(task1 => {
  //   if (task1._id == task._id)
  //   task1.edit = false;
  //   task.edit = true;

  // });
  //   }
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
                marginLeft: "10%",
                width: "60%",
                maxWidth: "60%",
              }}
              onChangeText={(value) => setTaskName(value)}
            ></TextInput>
            <Feather
              name="check-square"
              size={24}
              color="white"
              onPress={() =>
                taskStore.updateTask(foundGroup._id, task._id, task, taskName)
              }
            />
            <MaterialIcons
              name="cancel-presentation"
              size={24}
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
            <Text
              key={task._id}
              style={{
                fontSize: 16,
                fontWeight: "500",
                width: 190,
                backgroundColor: "#242D65",
                color: "#FFFFFF",
                marginBottom: 1,
                height: 30,
              }}
            >
              {task.name}
            </Text>
            <FontAwesome
              name="pencil-square-o"
              size={24}
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
    <View style={{ width: width, alignItems: "center" }}>
      <View style={styles.list}>
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
      </View>
    </View>
  );
};

export default observer(NQList);

const styles = StyleSheet.create({
  list: {
    width: 270,
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
