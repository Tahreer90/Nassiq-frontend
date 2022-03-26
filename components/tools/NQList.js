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
    return group1._id == group;
  });
  const tasks = foundGroup ? foundGroup.task : [];

  const taskList = tasks.map((task) => {
    return (
      <Layout
        style={{
          flexDirection: "row",
          marginBottom: 15,
        }}
      >
        {/* <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          /> */}
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
              fontWeight: "700",
              marginBottom: 20,
            }}
          >
            {foundGroup ? foundGroup.name : ""}
          </Text>
        </View>

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
