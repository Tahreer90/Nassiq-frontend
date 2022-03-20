import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "./components/MainButton";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
