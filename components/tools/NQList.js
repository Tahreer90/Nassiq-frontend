import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React, { useEffect } from "react";
import taskStore from "../../stores/taskStore";
import groupStore from "../../stores/groupStore";
import { observer } from "mobx-react";
const NQList = ({ group }) => {
  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    taskStore.fetchTaskInGroup(group._id);
  }, []);
  console.log(taskStore.tasks);
  const taskList = taskStore.tasks.map((task) => {
    return <Text key={task._id}>{task.name}</Text>;
  });
  return (
    <View style={{ width: width, alignItems: "center" }}>
      <View style={styles.list}>{taskList}</View>
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
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginVertical: 30,
  },
});
