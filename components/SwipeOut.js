import Swipeout from "react-native-swipeout";
import taskStore from "../stores/taskStore";
import { StyleSheet, View, Text } from "react-native";
import { Layout } from "@ui-kitten/components";

const SwipeOut = ({ taskId, groupId, taskname }) => {
  var swipeoutBtns = [
    {
      text: "Delete",
      backgroundColor: "red",
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
      onPress: () => {
        taskStore.deleteTask(taskId, groupId);
      },
    },
  ];

  return (
    <Layout
      style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
    >
      <Swipeout
        right={swipeoutBtns}
        autoClose="true"
        backgroundColor="transparent"
      >
        <View>
          <Text>{taskname}</Text>
        </View>
      </Swipeout>
    </Layout>
  );
};

export default SwipeOut;

const styles = StyleSheet.create({});
