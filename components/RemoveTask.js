import Swipeout from "react-native-swipeout";
import { StyleSheet, View, Text } from "react-native";
import { Layout } from "@ui-kitten/components";

const RemoveTask = ({ dfunction, taskname, taskIndex }) => {
  var swipeoutBtns = [
    {
      text: "Delete",
      backgroundColor: "red",
      borderRadius: 13,
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
      onPress: () => {
        dfunction(taskIndex);
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
        <Layout
          style={{
            flexDirection: "row",
            borderColor: "black",
            borderWidth: 1,
            width: 350,
            height: 43,
            // marginRight: 90,
            borderRadius: 13,
            padding: 5,
            marginBottom: 5,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text>{taskname}</Text>
          </View>
        </Layout>
      </Swipeout>
    </Layout>
  );
};

export default RemoveTask;

const styles = StyleSheet.create({
  btn: {
    height: 30,
    width: 30,
  },
});
