import Swipeout from "react-native-swipeout";
import { StyleSheet, View, Text } from "react-native";
import { Layout } from "@ui-kitten/components";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "./navigation/theme-context";

const RemoveTask = ({ dfunction, taskname, taskIndex, type }) => {
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

  const themeColor =
    ThemeContext._currentValue.theme == "light" ? "#1a2138" : "white";

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
            borderColor: themeColor,
            borderWidth: 1,
            width: 350,
            height: 43,
            // marginRight: 90,
            borderRadius: 13,
            padding: 5,
            marginBottom: 5,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: themeColor }}>{taskname}</Text>
          </View>
          <View>
            {type == "High" ? (
              <>
                <MaterialIcons name="priority-high" size={24} color="#FD6B68" />
              </>
            ) : (
              <></>
            )}
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
