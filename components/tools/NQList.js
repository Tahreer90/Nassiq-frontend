import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  CheckBox,
} from "react-native";
import React, { useEffect, useState } from "react";
import taskStore from "../../stores/taskStore";
import groupStore from "../../stores/groupStore";
import { observer } from "mobx-react";
import { Layout } from "@ui-kitten/components";
const NQList = ({ group }) => {
  const { width, height } = Dimensions.get("window");
  const [isSelected, setSelection] = useState(false);

  const foundGroup = groupStore.groups.find((group1) => {
    console.log(group1._id, group);
    return group1._id == group;
  });
  const tasks = foundGroup.task;

  console.log(taskStore.tasks);
  console.log("???????????", tasks);
  const taskList = tasks.map((task) => {
    return (
      <Layout style={{ flexDirection: "row" }}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text key={task._id} style={styles.txt}>
          {task.name}
        </Text>
      </Layout>
    );
  });
  return (
    <View style={{ width: width, alignItems: "center" }}>
      <View style={styles.list}>
        <View>
          <Text
            style={{
              color: "#FFFFFF",
              marginTop: 25,
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            {foundGroup.name}
          </Text>
        </View>

        <View>{taskList}</View>
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
  txt: {
    color: "#FFFFFF",
    marginTop: 25,
    fontSize: 18,
    fontWeight: "500",
  },
});
