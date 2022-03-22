import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Actionsheet, Box, HStack } from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

function NQAction({ isOpen, onClose }) {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Actionsheet.Item>
          <HStack style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="plus" size={24} color="#FD6B68" />
            <Text style={{ marginLeft: 7 }}>Add Task</Text>
          </HStack>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <HStack style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="group" size={24} color="#FD6B68" />
            <Text style={{ marginLeft: 7 }}>Create a Group</Text>
          </HStack>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <HStack style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="group-add" size={24} color="#FD6B68" />
            <Text style={{ marginLeft: 7 }}>Join a Group</Text>
          </HStack>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default NQAction;

const styles = StyleSheet.create({});
